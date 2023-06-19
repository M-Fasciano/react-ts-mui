import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { StyledLink } from "./Link.style";
import { LinkProps as MuiLinkProps } from "@mui/material";

interface BaseLink {
  target?: MuiLinkProps["target"];
  rel?: MuiLinkProps["rel"];
  children: React.ReactNode;
  variant?: MuiLinkProps["variant"];
  dataName?: string;
}

interface StandardLink extends BaseLink {
  href: MuiLinkProps["href"];
  onClick?: never;
  to?: never;
}

interface ActionLink extends BaseLink {
  onClick: MuiLinkProps["onClick"];
  href?: never;
  to?: never;
}

interface InternalLink extends BaseLink {
  to: string;
  href?: never;
  onClick?: never;
}

export type LinkProps = StandardLink | ActionLink | InternalLink;

function Link(props: LinkProps) {
  const { children, variant = "body2", dataName, to, onClick, href } = props;
  const linkType = to ? "internal" : "external";
  const actionType = typeof props.onClick === "function" ? "action" : linkType;

  const linkProps = {
    underline: "hover" as MuiLinkProps["underline"],
    variant,
    "data-name": dataName,
    ...(actionType === "action" ? { onClick } : {}),
    ...(actionType === "internal" ? { to, component: ReactRouterLink } : {}),
    ...(actionType === "external" ? { href } : {}),
    ...(props.target ? { target: props.target } : {}),
    ...(props.rel ? { rel: props.rel } : {}),
  };

  return <StyledLink {...linkProps}>{children}</StyledLink>;
}

export default Link;
