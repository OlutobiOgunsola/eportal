import styled from "styled-components";
import { COLORS } from "../../styles";
import { BASE_FONT_SIZE, SERIF_FONT } from "../../../settings/styles";

export const ButtonBaseWrapper = styled.button`
    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    width: ${({ width }) => (width ? width : "100%")};
    height: ${({ height }) => (height ? height : "auto")};
    padding: ${({ padding }) => (padding ? padding : "4px")};
    margin: ${({ margin }) => (margin ? margin : "16px 0px")};

    position: relative;

    color: ${({ color, type }) =>
      color
        ? color
        : type === "alternate" || "text"
        ? `${COLORS.primaryNavyBlue}`
        : `${COLORS.alternateWhite}`};


    font-family: ${SERIF_FONT};
    font-size: ${({ fontSize }) => (fontSize ? fontSize : BASE_FONT_SIZE)};

    background: ${({ type, overrideBackground }) => {
      console.log("type from styles", type, overrideBackground);
      // if (overrideBackground) return overrideBackground;
      // switch (type) {
      //     case 'alternate':
      //         return 'none';
      //     default:
      //         return `${COLORS.primaryNavyBlue}`;
      // }
      return (type === "alternate" || "text") ? "none" : (type === "primary") ? COLORS.primaryNavyBlue : "none";
    }};


    border: ${({ type }) => {
      switch (type) {
        case "alternate":
          return "solid";
        case "text":
          return "none";
        default:
          return "none";
      }
    }};
    border-width: ${({ type, borderWidth }) =>
      type === "alternate" ? ".5px" : borderWidth ? borderWidth : "0px"}};
    border-color: ${({ type, borderColor }) =>
      type === "alternate"
        ? COLORS.primaryNavyBlue
        : borderColor
        ? borderColor
        : ""}};
    border-radius: ${({ type, borderRadius }) =>
      type === "alternate" ? "8px" : borderRadius ? borderRadius : "0px"}};

    
    img {
        margin-left: 4px;
        transition: all .25s ease-in-out;
    }

    &:after {
        content: '';
        bottom: -4px;
        z-index: 1000;
        left: 4px;
        background-color: ${COLORS.primaryNavyBlue};
        width: 0px;
        height: 1px;
        position: absolute;
        transition: all .25s ease-in-out;
    }

    transition: all .25s cubic-bezier(.15,.18,.59,1.59);

    &:hover {
        cursor: pointer;
        scale: 1.01;
        img {
            margin-left: 8px;
        };

        &:after {
            width: ${({ width }) => (width ? width : "calc(100% - 8px)")};
        }
    }
`;
