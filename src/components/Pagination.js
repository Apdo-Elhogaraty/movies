import React, { useEffect, useState } from 'react'
import { Pagination } from 'react-bootstrap'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getPage } from '../redux/actions/movieAction';

const PaginationComponent = () => {
  
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState([]);

  const pages = useSelector(state => state.pageCount) // GET Number Of Pages
  useEffect(()=>{

    // Pages must less than 500 or will push error
    if(pages > 500)
      setPageCount(500);
    else
      setPageCount(pages)
  },[pages])

    const handlePageClick = (data) => {
      dispatch(getPage(data.selected + 1));
    }

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount} 
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
