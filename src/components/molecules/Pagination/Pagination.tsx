import React from "react";
import { StyledPagination, StyledPaginationItem } from "./Pagination.style";
import {
  PaginationProps as MuiPaginationProps,
  PaginationItemProps as MuiPaginationItemProps,
  SvgIconProps,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

export interface PaginationProps {
  page: MuiPaginationProps["page"];
  count: MuiPaginationProps["count"];
  boundaryCount?: MuiPaginationProps["boundaryCount"];
  siblingCount?: MuiPaginationProps["siblingCount"];
  renderItem?: MuiPaginationProps["renderItem"];
  components?: MuiPaginationItemProps["components"];
  onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
}

function Pagination(props: PaginationProps) {
  const renderIcon = (Icon: React.ComponentType<SvgIconProps>) => (
    <Icon sx={{ fontSize: 16 }} />
  );

  return (
    <StyledPagination
      {...props}
      renderItem={(item) => (
        <StyledPaginationItem
          components={{
            previous: () => renderIcon(KeyboardArrowLeft),
            next: () => renderIcon(KeyboardArrowRight),
          }}
          {...item}
        />
      )}
    />
  );
}

export default Pagination;
