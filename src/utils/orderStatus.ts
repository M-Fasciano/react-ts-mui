import { theme } from "../themes/theme";

const OrderStatuses: { [key: string]: string } = {
  M: "Created",
  A: "Pending Payment",
  L: "In Process",
  H: "Created",
  D: "Shipped",
  R: "Confirmed",
  X: "Cancelled",
  "1": "Delivered",
  E: "Pending Prescription",
};

export interface StatusMap {
  color: string;
  label: string;
}

export const statusMap = (status: string): StatusMap => {
  let statusColor = theme.palette.success.main;

  switch (status) {
    case "E":
      // case 'H':
      statusColor = theme.palette.error.main;
      break;
  }

  return {
    color: statusColor,
    label: OrderStatuses[status],
  };
};
