import styled from "styled-components";
import { Assets } from "../../../settings/connections";
import { DEVICES, SIZES } from "../../../settings/constants";
import { PageBase, PagePadding } from "../../../lib/styles";

export const LandingLayoutWrapper = styled.div`
  .animation_bounce {
    transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);
  }

  #modal {
    background: linear-gradient(
        9.15deg,
        rgba(10, 34, 79, 0.2) 30.52%,
        rgba(0, 0, 0, 0) 66.61%
      ),
      radial-gradient(
          91.06% 129.02% at 20.24% 91.06%,
          #ffffff 0%,
          #6c5b1e 0.01%,
          #0b0961 41.34%
        )
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    display: block;
  }

  ${PagePadding()};
  ${PageBase()};

  width: 100%;
  min-height: 100vh;
  background: url(${({ currPolicy }) => {
    return Assets.backgrounds[currPolicy];
  }});
  background-size: cover;
  background-repeat: no-repeat;

  overflow: hidden;

  @media (max-width: ${SIZES.laptop}) {
    overflow: scroll;
  }

  position: relative;

  .splash_container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    .header-text {
      margin: 0;
      padding: 0;
      margin-bottom: 32px;

      color: #ffffff;

      font-family: "Montserrat Alternates";
      width: 500px;
      font-style: normal;
      display: inline-block;
      font-weight: 900;
    }

    h2 {
      font-size: 80px;
      font-family: "Montserrat Alternates";
    }

    h3 {
      font-size: 50px;
      font-family: "Montserrat Alternates";
    }

    @media (max-width: ${SIZES.laptop}) {
      flex-flow: column nowrap;

      padding-top: 40px;
    }
  }

  .grid_col {
    display: inline-block;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: auto;
  }

  #right_column {
    max-width: calc(100% - 432px);
    height: auto;

    img {
      display: block;
      max-width: 100%;
      max-height: 300px;
      margin: 0 auto;
      margin-bottom: 32px;
      margin-top: 0px;
    }

    @media (max-width: ${SIZES.laptop}) {
      img {
        display: none;
      }
      width: 100%;
      max-width: 100%;

      margin: 40px 0px;
      text-align: center;

    }
  }
  #left_column {
    max-width: 400px;

    @media (max-width: ${SIZES.laptop}) {
      width: 100%;
      max-width: 100%;

      text-align: center;

      margin-bottom: 32px;

    }
  }

  #policy_cta {
    display: flex;
    justify-content: space-between;
    button {
      background: rgba(40, 34, 81, 0.31);
      border: 1px solid #ffffff;
      border-radius: 8px;
      padding: 8px 20px;
      box-sizing: border-box;
      display: inline-block;
      text-align: left;

      font-family: "Libre Baskerville";
      font-style: normal;
      text-transform: uppercase;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */

      color: #ffffff;
    }

    #explore_btn {
      width: 140px;
    }
    #manage_btn {
      width: calc(100% - 156px); //account for padding
    }

    @media (max-width: ${SIZES.laptop}) {
      justify-content: center;

      #manage_btn {
        width: fit-content;
        margin-left: 32px;
      }
    }
  }

  #policy_copy {
    width: 100%;
    h3 {
      font-family: "Chivo";
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 29px;
      /* identical to box height */

      letter-spacing: 0.2em;

      color: #ffffff;

      margin: 0;

      opacity: 0.4;

      text-transform: uppercase;
    }

    p {
      font-family: "Libre Baskerville";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      text-align: justify;
      letter-spacing: 0.12em;

      color: #ffffff;

      opacity: 0.4;
    }

    @media (max-width: ${SIZES.laptop}) {
      width: 100%;
    }
  }
`;
