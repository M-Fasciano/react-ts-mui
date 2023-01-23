// The template used to generate the icons was found in this repo
// I had to modify the template slightly to make it work for my need
// https://github.com/brandonscript/mui-custom-svg-icons

function template(variables, { tpl }) {
  // Change the svg container to MUI's SvgIcon
  variables.jsx.openingElement.name.name = "SvgIcon";
  variables.jsx.closingElement.name.name = "SvgIcon";

  // Append a {...other} to the opening element's attributes
  variables.jsx.openingElement.attributes.push({
    type: "JSXSpreadAttribute",
    argument: {
      type: "Identifier",
      name: "other",
    },
  });

  return tpl`
    import React from "react";
    import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
    const ${variables.componentName} = (props: SvgIconProps) => {
      const { ...other } = props;
      return (
        ${variables.jsx}
      );
    };
    
    ${variables.exports};
  `;
}

module.exports = template;
