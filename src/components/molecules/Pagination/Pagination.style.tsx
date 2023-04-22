import {
  styled,
  Pagination as MuiPagination,
  PaginationItem as MuiPaginationItem,
  paginationClasses as MuiPaginationClasses,
  paginationItemClasses as MuiPaginationItemClasses,
} from "@mui/material";

export const StyledPagination = styled(MuiPagination)(({ theme }) => ({
  [`& .${MuiPaginationClasses.ul} > * + *`]: {
    marginLeft: theme.spacing(2),
  },
}));

export const StyledPaginationItem = styled(MuiPaginationItem)(({ theme }) => ({
  [`&.${MuiPaginationItemClasses.root}`]: {
    height: 24,
    minWidth: 24,
    padding: theme.spacing(0),

    "&:hover": {
      background: theme.palette.success.light,
      color: theme.palette.common.white,
    },
  },

  [`&.${MuiPaginationItemClasses.text}`]: {},

  [`&.${MuiPaginationItemClasses.selected}`]: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.common.white,

    "&:hover": {
      backgroundColor: theme.palette.success.main,
    },
  },
}));
