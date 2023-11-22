import { css } from "styled-components";

const FONT_FAMILY = "Montserrat Alternates, sans-serif";
const FONT_FAMILY_ALTERNATE = "Montserrat, arial, serif";
const FONT_FAMILY_TERTIARY = "Chivo, arial, serif";
const FONT_FAMILY_SERIF = "Libre Baskerville, arial, serif";
const FONT_BASE_DESKTOP = 16

export const BASE_FONT = FONT_FAMILY;
export const ALT_FONT = FONT_FAMILY_ALTERNATE;
export const TERTIARY_FONT = FONT_FAMILY_TERTIARY;
export const SERIF_FONT = FONT_FAMILY_SERIF;
export const REM_VALUE = FONT_BASE_DESKTOP;
export const BASE_FONT_SIZE = `${FONT_BASE_DESKTOP}px`
export const JUMBO_FONT_SIZE = `${FONT_BASE_DESKTOP * 4}px`
export const XL_FONT_SIZE = `${FONT_BASE_DESKTOP * 3}px`
export const L_FONT_SIZE = `${FONT_BASE_DESKTOP * 2}px`
export const S_FONT_SIZE = `${FONT_BASE_DESKTOP * .75}px`
export const XS_FONT_SIZE = `${FONT_BASE_DESKTOP * .5}px`

export const  STYLE_CONSTANTS = {
  INPUT: {
    primary: css`
      padding: 4px 8px;
      box-sizing: border-box;

      border: solid 1px #bbb;
      border-radius: 2px;
    `
  },
  FONT: {
    H2: css`
       font-family: ${FONT_FAMILY};
       font-size: ${FONT_BASE_DESKTOP * 2}px;

       text-align: center;
    `,
    H3: css`
       font-family: ${FONT_FAMILY};
       font-size: ${FONT_BASE_DESKTOP * 1.5}px;

       text-align: center;
    `,
    H4: css`
      font-family: ${FONT_FAMILY};
      font-size: ${BASE_FONT_SIZE};
    `,
    P: css`
        font-family: ${FONT_FAMILY};
        font-size: ${FONT_BASE_DESKTOP * 1}px;
    `,
    P_SERIF: css`
        font-family: ${FONT_FAMILY_SERIF};
        font-size: ${FONT_BASE_DESKTOP * 1}px;
    `,
    HEAVY_FONT: 900,
    INPUT: {
      PRIMARY: css`
        font-family: ${FONT_FAMILY_ALTERNATE};
        font-size: ${FONT_BASE_DESKTOP * 0.8};
      `
    }
  },
};
