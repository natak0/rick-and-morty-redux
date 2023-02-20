import React from "react";
import { Character } from "../../components/Character/Character";
import { useGetCharactersByPageQuery } from "../../services/rickMortyConnect";
import Pagination from "../../components/Pagination/Pagination";
import ChartWrapper from "../../components/charts/ChartWrapper/ChartWrapper";
import DonutChart from "../../components/charts/Donut/Donut";
import { useSelector } from "react-redux";
import "./ListPage.css";

const ListPage = () => {
  const searchValue = useSelector((state) => state.search.query);
  const page = useSelector((state) => state.setpage.page);
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

  return isLoading ? (
    <h2>Loading list...</h2>
  ) : (
    <main className="panel">
      <section className="panel--left">
        <div className="panel__row">
          {data.characters.info.count !== null && (
            <p style={{ textAlign: "center" }}>
              {`Total: ${data.characters.info.count}`}
            </p>
          )}
          <Pagination pageInfo={data.characters.info} />
        </div>
        <div className="list-wrapper"> {renderList()}</div>
      </section>
      {data.characters.info.count !== null && (
        <section className="panel--right">
          <ChartWrapper>
            <div className="chart-container__item">
              <DonutChart data={data.characters.results} />
            </div>
          </ChartWrapper>
        </section>
      )}
    </main>
  );
};

export default ListPage;
