import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setpage } from "../../slices/page";
import "./Pagination.css";

const Pagination = ({ pageInfo }) => {
  const page = useSelector((state) => state.setpage.page);
  const dispatch = useDispatch();

  const setPreviousPage = () => {
    if (pageInfo && pageInfo.prev) {
      dispatch(setpage(page > 1 && page - 1));
    }
  };

  const setNextPage = () => {
    if (pageInfo && pageInfo.next) {
      dispatch(setpage(page < pageInfo.pages && page + 1));
    }
  };
  return pageInfo.pages === null ? (
    <p>No results were found</p>
  ) : (
    <div className="pagination">
      <button disabled={!pageInfo.prev} onClick={() => setPreviousPage()}>
        previous
      </button>
      <span className="pagination__current-page">{`${page}/${pageInfo.pages}`}</span>
      <button disabled={!pageInfo.next} onClick={() => setNextPage()}>
        next
      </button>
    </div>
  );
};

export default Pagination;
