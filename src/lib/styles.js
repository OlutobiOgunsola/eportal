import { css } from "styled-components";
import { ALT_FONT, BASE_FONT } from "../settings/styles";

const STYLE_BAG = {
    BASE_FONT: BASE_FONT,
    ALT_FONT: ALT_FONT,

    CENTER_FONT: `text_align: center`
}

export const COLORS = {
  primaryNavyBlue: "#191D63",
  fontWhiteSaturated: "#f5f5f5",
  alternateWhite: "#FAF8FC",
  cardStroke: "#E9E5FF",
  primaryHighlight: "#93E7FF",
  cardBackground: "#DEDBF0",
};

export function PageBase() {
  return css`
    width: 100%;
    
    position: relative;
    min-height: 700px;

    padding-top: 100px;
    box-sizing: border-box;

  `;
}

export function PagePadding() {
  return css`
    box-sizing: border-box;
    padding: 0px 100px;

    @media (max-width: 768px) {
      padding: 0px 50px;
    }

    @media (max-width: 425px) {
      padding: 0px 12.5px;
    }
  `;
}
