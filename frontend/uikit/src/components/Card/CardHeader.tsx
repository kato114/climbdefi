import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardHeaderProps = SpaceProps;

const CardHeader = styled.div<CardHeaderProps>`
  border-bottom: 2px solid #0c0520;

  ${space}
`;

CardHeader.defaultProps = {
  p: "24px",
};

export default CardHeader;
