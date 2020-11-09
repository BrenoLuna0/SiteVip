import cn from "classnames";
import React from "react";

import { Wrapper, Button } from "./styles";

const Pagination = ({ activePage, pages, onChange, className }) => {
  const buttons = [...Array(pages)].map((_, i) => i + 1);

  function previousPage() {
    if (activePage > 1) {
      onChange(activePage - 1);
    }
  }

  function nextPage() {
    if (activePage < pages) {
      onChange(activePage + 1);
    }
  }

  function paginate(selectedPage, totalPages) {
    let pages = [],
      oldPage = selectedPage === 1 ? 1 : selectedPage - 1;
    console.log(`Pagina anterior: ${oldPage}`);

    for (let currentPage = 1; currentPage <= totalPages; currentPage++) {
      const firstAndLastPage = currentPage === 1 || currentPage === totalPages;
      const pagesAfterSelectedpage = currentPage <= selectedPage + 2;
      const pagesBeforeSelectedpage = selectedPage - 2;

      if (
        firstAndLastPage ||
        (pagesBeforeSelectedpage && pagesAfterSelectedpage)
      ) {
        if (oldPage && currentPage - oldPage > 2) {
          console.log("primeiro if " + oldPage, currentPage);
          pages.push("...");
        }
        if (oldPage && currentPage - oldPage == 2) {
          console.log("segundo if " + oldPage, currentPage);
          pages.push(currentPage - 1);
        }
        pages.push(currentPage);
      }
    }
    return pages;
  }

  return (
    <Wrapper className={className}>
      <Button onClick={paginate(activePage, pages)}>&#8249;</Button>

      {buttons.map((value) => (
        <Button
          key={value}
          className={cn({ active: value === activePage })}
          onClick={() => onChange(value)}
        >
          {value}
        </Button>
      ))}

      <Button onClick={nextPage}>&#8250;</Button>
    </Wrapper>
  );
};

export default Pagination;
