import styled from "styled-components";
import {
  ALT_FONT,
  BASE_FONT_SIZE,
  STYLE_CONSTANTS,
  S_FONT_SIZE,
} from "../../../settings/styles";
import { Dropdown } from "semantic-ui-react";
import { COLORS } from "../../styles";

export const InputBaseWrapper = styled.input`
    width: ${(width) => (width ? width : "100%")};
    height: ${(height) => (height ? height : "60px")};
    border: ${(border) => (border ? border : "solid 1px black")};
    border-radius: ${(borderRadius) =>
      borderRadius ? borderRadius + "px" : ""};
    background: ${(background) => (background ? background : "#F5F5F5")};

    // FONT STYLES
    font-family: ${(fontFamily) => (fontFamily ? fontFamily : `${ALT_FONT}`)};
    font-size: ${(fontSize) => (fontSize ? fontSize : `${S_FONT_SIZE}`)};
    font-weight: ${(fontWeight) => (fontWeight ? fontWeight : `300`)};

    box-sizing: border-box;
    padding: ${({ padding }) => (padding ? padding : "4px")}
    margin: ${({ margin }) => (margin ? margin : "4px")}
`;

export const SelectWrapper = styled.select`
    width: ${(width) => (width ? width : "100%")};
    height: ${(height) => (height ? height : "60px")};
    border: ${(border) => (border ? border : "solid 1px black")};
    border-radius: ${(borderRadius) => (borderRadius ? borderRadius + "px" : "")};
    background: ${(background) => (background ? background : "#F5F5F5")};

    // FONT STYLES
    font-family: ${(fontFamily) => (fontFamily ? fontFamily : `${ALT_FONT}`)};
    font-size: ${(fontSize) => (fontSize ? fontSize : `${S_FONT_SIZE}`)};
    font-weight: ${(fontWeight) => (fontWeight ? fontWeight : `300`)};

    box-sizing: border-box;
    padding: ${({ padding }) => (padding ? padding : "4px")}
    margin: ${({ margin }) => (margin ? margin : "4px")}

`;

export const StyledDropdown = styled(Dropdown)({
    background: `white5 !important`,
    fontFamily: `${ALT_FONT} !important`,
    fontSize: `${BASE_FONT_SIZE} !important`,
})
