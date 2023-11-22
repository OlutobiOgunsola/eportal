import styled from "styled-components";
import { COLORS } from "../../styles";
import {
  ALT_FONT,
  BASE_FONT_SIZE,
  L_FONT_SIZE,
  STYLE_CONSTANTS,
  S_FONT_SIZE,
  XL_FONT_SIZE,
  XS_FONT_SIZE,
} from "../../../settings/styles";

export const ExploreCardWrapper = styled.div`
  border: 1px solid ${COLORS.cardStroke};
  border-radius: 4px;
  height: ${({ isPopular }) => (isPopular ? "100%" : "300px")};
  background: white;

  position: relative;

  #popular_tag {
    font-family: ${ALT_FONT};
    font-size: ${XS_FONT_SIZE};
    font-weight: bold;
    padding: 4px;
    border: none;
    border-radius: 4px;
    background: rgba(147, 231, 255, 0.7);
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 1000;
  }

  #image_group {
    position: relative;
    height: ${({ isPopular }) => (isPopular ? "255px" : "170px")};

    img {
      border: solid 7px ${COLORS.alternateWhite};
      width: calc(100% - 14px);
      height: calc(100% - 14px);
    }
    #image_modal {
      display: block;
      position: absolute;
      height: 255px;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 900;
      border-radius: 8px 8px 0px 0px;
      border: none;
      background: linear-gradient(
          180deg,
          rgba(239, 233, 244, 0.01) 0.23%,
          #faf8fc 78%
        ),
        rgba(25, 29, 99, 0.39);
    }
  }

  #copy {
    position: absolute;
    top: ${({isPopular, title}) => (isPopular ? "40%" : title?.split(" ").length === 1 ? "60%" : "20%")};
    height: auto;
    z-index: 1000;
    padding: 16px;
    box-sizing: border-box;

    h4 {
      ${STYLE_CONSTANTS.FONT.H4};
      color: ${COLORS.primaryNavyBlue};
      text-transform: uppercase;
      font-family: ${ALT_FONT};
      letter-spacing: -0.025rem;
      font-weight: 500;
      margin: 8px 0px;
    }

    h3 {
      color: ${COLORS.primaryNavyBlue};
      text-transform: uppercase;
      font-weight: 600;
      font-family: ${ALT_FONT};
      text-align: left;
      font-size: ${({title}) => (title?.split(" ").length === 1 ? BASE_FONT_SIZE : XL_FONT_SIZE)};
      margin: 8px 0px;
    }

    p {
      color: ${COLORS.primaryNavyBlue};
      opacity: 0.5;
      font-size: ${S_FONT_SIZE};
      font-family: ${ALT_FONT};

      margin: ${({isPopular}) => (isPopular ? "16px 0px 64px" : "8px 0p")};

    }
  }

  #cta {
    width: 100%;
    height: 40px;
  }
`;
