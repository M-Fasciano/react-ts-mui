import React from "react";
import type { CustomSVGIconProps } from "./icon.type";

export const GridViewIcon: React.FC<CustomSVGIconProps> = ({ htmlColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill={htmlColor}
        stroke={htmlColor}
        d="M9.1.5v8.6H.5V.5h8.6ZM23.5.5v8.545h-8.6V.5h8.6ZM.5 14.9h8.545v8.6H.5v-8.6ZM14.955 14.938h8.504v8.5h-8.504v-8.5Z"
      />
    </svg>
  );
};

export const ListViewIcon: React.FC<CustomSVGIconProps> = ({ htmlColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill={htmlColor}
        d="M23.938 0v15H0V0h23.938ZM0 19.2h24V24H0v-4.8Z"
      />
    </svg>
  );
};
