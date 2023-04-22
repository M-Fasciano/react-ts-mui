import React, { useState } from "react";
import Box from "../atoms/Box";
import styled from "styled-components";
import Pagination from "../molecules/Pagination";

const StyledWrapper = styled("div")`
  display: grid;
  margin: 2rem;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    grid-template-columns: repeat(4, 1fr);
    min-height: 30vh;
  }
`;

function sliceIntoChunks(arr: string[], chunkSize: number) {
  const res: [] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize) as never;
    res.push(chunk);
  }
  return res;
}

const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function PaginationPage() {
  const [page, setPage] = useState(1);
  const chunkedArr = sliceIntoChunks(arr, 4);
  const visibleItems: [] = chunkedArr[page - 1] || [];

  return (
    <>
      <StyledWrapper>
        {visibleItems.map((item) => (
          <Box variant="dark" children={item} />
        ))}
      </StyledWrapper>
      <StyledWrapper>
        <Pagination
          page={page}
          onChange={(_, page) => {
            setPage(page);
          }}
          count={chunkedArr.length}
        />
      </StyledWrapper>
    </>
  );
}

export default PaginationPage;
