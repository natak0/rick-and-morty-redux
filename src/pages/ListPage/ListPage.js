import React, { useState, useEffect, useLayoutEffect, Suspense } from "react";
import { Character } from "../../components/Character/Character";
import { useGetCharactersByPageQuery } from "../../slices/rickMortyConnect";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "../../components/Search/Search";

import "./ListPage.css";

const ListPage = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetCharactersByPageQuery(page);
  const [scrolledData, setScrolledData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  console.log(data, page, "page");
  const renderList = () => {
    if (isLoading) return <p>Loading list...</p>;
    if (error) return <p>Unable to display list.</p>;
    const _data =
      scrolledData.length > 0 ? scrolledData : data.characters.results;
    return _data.map((item) => (
      <Character key={`${item.name}-${item.id}`} item={item} excerpt />
    ));
  };

  function Loading() {
    return <h2>Loading...</h2>;
  }

  useEffect(() => {
    if (data && data.characters.results && data.characters.results.length > 0) {
      let dataArray = [...scrolledData].concat(data.characters.results);
      setScrolledData(dataArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useLayoutEffect(() => {
    if (searchValue.length > 0 && scrolledData.length > 0) {
      const row = scrolledData.filter(
        (value) =>
          value.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          value.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          value.species.toLowerCase().includes(searchValue.toLowerCase())
      );
      setScrolledData(row);
    }
    if (searchValue.length === 0 && scrolledData.length > 0)
      setScrolledData(data.characters.results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <section>
      <Search
        placeholder="Search"
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <h2 style={{ textAlign: "center" }}>Find Your Character</h2>

      <Suspense fallback={<Loading />}>
        {data &&
          data.characters.results &&
          data.characters.results !== undefined &&
          data.characters.info !== undefined && (
            <>
              <p style={{ textAlign: "center" }}>{`Total: ${
                data.characters.info.count
              }, Page: ${data.characters.info.next - 1}`}</p>
              <InfiniteScroll
                dataLength={data.characters.info.count}
                next={() => setPage(page + 1)}
                hasMore={data.characters.info.next !== undefined}
                loader={<p>Loading...</p>}
                className="list-wrapper"
                endMessage={<p>No more results</p>}
              >
                {renderList()}
              </InfiniteScroll>
            </>
          )}
      </Suspense>
    </section>
  );
};

export default ListPage;
