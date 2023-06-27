import React, { ReactNode, Children } from "react";
import { Grid } from "@mui/material";

const TOTAL_COLUMNS = 12;

export interface SplitColumnProps {
  columnWidths: number[];
  children: ReactNode[];
}

function DynamicColumns(props: SplitColumnProps) {
  const { columnWidths = [100], children } = props;

  if (Children.count(children) !== columnWidths.length) {
    throw new Error("Number of columnWidths must match the number of children");
  }

  const invalidWidths =
    columnWidths.filter((width) => width % 10 !== 0).length > 0;
  if (invalidWidths) {
    throw new Error("Invalid width supplied, must use increments of 10");
  }

  const totalWidth = columnWidths.reduce((a, b) => a + b, 0);
  if (totalWidth > 100 || totalWidth < 0) {
    throw new Error(
      "Total width of all columns must not exceed 100% or be less than 0%"
    );
  }

  const percentageToGrid = (percentage: number) =>
    Math.round((percentage / 100) * TOTAL_COLUMNS);

  return (
    <Grid container>
      {Children.map(children, (child, index) => (
        <Grid
          key={index}
          item
          xs={12}
          md={percentageToGrid(columnWidths[index])}
        >
          {child}
        </Grid>
      ))}
    </Grid>
  );
}

export default DynamicColumns;
