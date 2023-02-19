import React, { useState, useLayoutEffect } from "react";
import { Character } from "../../components/Character/Character";
import { useGetCharactersByPageQuery } from "../../services/rickMortyConnect";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination/Pagination";
import ChartWrapper from "../../components/charts/ChartWrapper/ChartWrapper";
import DonutChart from "../../components/charts/Donut/Donut";
import "./ListPage.css";

const ListPage = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const { data, error, isLoading } = useGetCharactersByPageQuery({
    page,
    name: searchValue,
  });

  const renderList = () => {
    if (error) return <p>Unable to display list.</p>;
    return data.characters.results.map((item) => (
      <Character key={`${item.name}-${item.id}`} item={item} excerpt />
    ));
  };

  useLayoutEffect(() => {
    if (searchValue.length > 0) setPage(1);
  }, [searchValue]);

  return isLoading ? (
    <h2>Loading list...</h2>
  ) : (
    <section>
      <Search
        placeholder="Search"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Pagination
        pageInfo={data.characters.info}
        page={page}
        setPage={setPage}
      />
      <p style={{ textAlign: "center" }}>
        {`Total: ${data.characters.info.count}`}
      </p>
      <div className="list-wrapper"> {renderList()}</div>
      <ChartWrapper>
        <div className="chart-container__item">
          <DonutChart data={data.characters.results} />
        </div>
      </ChartWrapper>
    </section>
  );
};

export default ListPage;
