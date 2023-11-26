import styled from "styled-components";
import { COLORS, PageBase, PagePadding } from "../../../lib/styles";
import { STYLE_CONSTANTS } from "../../../settings/styles";
import { DEVICES } from "../../../settings/constants";

export const AuthPageLayoutWrapper = styled.div`
  ${PageBase()};
  ${PagePadding()};

  #auth_form_image {
    img {
      transform: scale(1.5);
      display: block;
      margin: 0 auto;
      margin-top: 48px;
    }
  }
`;
export const AuthForm = styled.form`
  width: 400px;
  height: auto;

  margin: 0 auto;
  padding: 4px 16px;
  padding-top: 100px;
  box-sizing: border-box;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  div {
    width: 100%;
    max-width: 250px;
  }

  #auth_form_footer {
    margin-top: 48px;
  }

  #auth_form_header {
    margin-bottom: 48px;
  }

  #auth_form_input_fields {
    #persist_signin_row {
      input {
        margin: 0px;
        margin-right: 8px;
      }
      margin: 0;
      padding: 0px 25px;
    }
    label {
      display: inline-block;
      margin-bottom: 4px;

      font-size: 14px;
    }

    .row {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      input {
        width: 16px;
        margin-right: 8px;
      }
    }

    input {
      width: 100%;
      height: 32px;
      margin: 0 auto;
      padding: 4px 12px;
      box-sizing: border-box;

      font-size: 12px;
      border: 0.5px solid #ccc;
      border-radius: 4px;

      color: #eeeQ N;
    }

    span {
      display: block;
      width: 100%;
      max-width: 200px;
      margin: 0 auto;
      margin-bottom: 16px;
    }
  }

  @media (${DEVICES.mobile}) {
    width: 100%;
    max-width: 150px;
  }

  h2 {
    ${STYLE_CONSTANTS.FONT.H2};
  }
  h3 {
    ${STYLE_CONSTANTS.FONT.H3};
    margin: 0;
    margin-bottom: 8px;
  }
  p {
    font-size: 16px;
    text-align: center;
  }
`;
