import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
      id="Layer_1"
      enable-background="new 0 0 510 510"
      height="24"
      viewBox="0 0 700 510"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="m75 0v510h360v-510zm330 480h-300v-450h300z" />
        <path d="m239.333 165h.667v30h30v-30h.667c40.987 0 74.333-33.346 74.333-74.334v-30.666h-30.667c-24.212 0-45.753 11.641-59.333 29.615-13.58-17.974-35.121-29.615-59.333-29.615h-30.667v30.666c0 40.988 33.346 74.334 74.333 74.334zm75-75h.667v.666c0 24.446-19.888 44.334-44.333 44.334h-.667v-.667c0-24.445 19.888-44.333 44.333-44.333zm-119.333 0h.667c24.445 0 44.333 19.888 44.333 44.333v.667h-.667c-24.445 0-44.333-19.888-44.333-44.334z" />
        <path d="m135 225h240v30h-240z" />
        <path d="m135 285h240v30h-240z" />
        <path d="m135 345h240v30h-240z" />
        <path d="m135 405h120v30h-120z" />
        <path d="m285 405h45v30h-45z" />
      </g>
    </Svg>
  );
};

export default Icon;
