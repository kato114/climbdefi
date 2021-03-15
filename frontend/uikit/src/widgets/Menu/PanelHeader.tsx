import React from "react";
import styled from "styled-components";
import { MENU_HEIGHT } from "./config";
import { PanelProps, PushedProps } from "./types";
import { MountainBigIcon } from "./icons";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  height: ${MENU_HEIGHT}px;
  color: #41f3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: none;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
  font-size: 18px;
  font-weight: 200;
`;

const PanelHeader: React.FC<Props> = ({ isPushed }) => {
  if (!isPushed) {
    return <Container></Container>;
  }

  return (
    <Container>
      <MountainBigIcon />
      <TextContent>
        <p>Earn</p>
        <p>Mountains</p>
      </TextContent>
    </Container>
  );
};

export default PanelHeader;
