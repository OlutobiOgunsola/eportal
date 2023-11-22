import styled from "styled-components";

export const TextWrapper = styled.span`
  display: inline-block;
  position: relative;
  transition: all 1.5s ease-in-out;

  
  color: ${({ status }) => {
    return status === "open" ? "#fff" : "rgba(0,0,0,0)";
  }};
  height: ${({ status }) => {
    return status === "open" ? "110px" : "0px";
  }};

  overflow: hidden;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: ${({ status }) => {
      return status === "open" ? "0%" : "100%";
    }};
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.25s ease-in-out;
  }
`;
