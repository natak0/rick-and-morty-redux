import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const DonutChart = (appdata) => {
  const wrapper = useRef(null);
  const width = 400;
  const height = 400;
  const margin = 10;

  useEffect(() => {
    d3.select(wrapper.current).selectAll("svg").remove();
  }, [appdata.data]);

  useEffect(() => {
    const genders = ["Female", "Male", "Genderless", "unknown"]; // graphql api spec for gender
    const totalPerGender = [];
    genders.forEach((gender) => {
      const count = appdata.data.filter((d) => d.gender === gender).length;
      count > 0 &&
        totalPerGender.push({
          name: gender,
          value: count,
        });
    });

    const svg = d3
      .select(wrapper.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    const radius = Math.min(width, height) / 2 - margin;
    const color = d3.scaleOrdinal(d3.schemeCategory10);
    const pie = d3.pie().value((d) => d.value);
    const data = pie(totalPerGender);

    const arc = d3
      .arc()
      .innerRadius(radius * 0.2)
      .outerRadius(radius * 0.8);

    svg
      .selectAll("slice")
      .data(data)
      .enter()
      .append("g")
      .attr("class", "slice")
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d));

    svg
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .text((d) => `${d.data.name}: ${d.data.value}`)
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .attr("fill", "white")
      .attr("fontSize", "12");
  }, [wrapper, appdata.data]);

  return (
    <div ref={wrapper}>
      <h3
        style={{
          textAlign: "center",
        }}
      >
        Genders Per Page View
      </h3>
    </div>
  );
};

export default DonutChart;
