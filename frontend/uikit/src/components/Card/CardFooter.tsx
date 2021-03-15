import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardFooterProps = SpaceProps;

const CardFooter = styled.div<CardFooterProps>`
  border-top: 2px solid #0c0520;
  ${space}
`;

CardFooter.defaultProps = {
  p: "24px",
};

export default CardFooter;
