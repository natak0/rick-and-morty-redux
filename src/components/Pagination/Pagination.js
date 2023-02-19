import React from "react";
import "./Pagination.css";

const Pagination = ({ pageInfo, page, setPage }) => {
  const setPreviousPage = () => {
    if (pageInfo && pageInfo.prev) {
      setPage(pageInfo.prev);
    }
  };

  const setNextPage = () => {
    if (pageInfo && pageInfo.next) {
      setPage(pageInfo.next);
    }
  };
  return pageInfo.pages === null ? (
    <p>No results were found</p>
  ) : (
    <div className="pagination">
      <button disabled={!pageInfo.prev} onClick={() => setPreviousPage()}>
        prev
      </button>
      <span className="pagination__current-page">{`${page}/${pageInfo.pages}`}</span>
      <button disabled={!pageInfo.next} onClick={() => setNextPage()}>
        next
      </button>
    </div>
  );
};

export default Pagination;
