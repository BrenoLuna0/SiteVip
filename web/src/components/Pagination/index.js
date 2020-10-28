import cn from "classnames";
import React from "react";

import { Wrapper, Button } from "./styles";

const Pagination = ({ activePage, pages, onChange }) => {
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

  return (
    <Wrapper>
      <Button onClick={previousPage}>&#8249;</Button>

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
