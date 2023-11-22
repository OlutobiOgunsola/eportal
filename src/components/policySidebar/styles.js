import styled from "styled-components";
import {DEVICES} from '@/settings/constants'
import { SIZES } from "../../settings/constants";

export const PolicySidebarWrapper = styled.div`
  width: 70px;
  height: auto;

  position: fixed;
  top: 100px;
  right: 50px;

  box-sizing: border-box;

  .policy_item {
    display: block;
    width: 50px;
    border: solid 1px #eee;
    border-radius: 4px;

    margin-bottom: 24px;
    margin-left: auto;

    padding: 4px;
    box-sizing: border-box;

    position: relative;

    transition: all 0.5s cubic-bezier(0.8, 0, 0.19, 1.46);
    img {
      width: 12px;
      height: 12px;
      margin: 4px auto;
      display: block;
    }

    opacity: 0.3;

    &:before {
      content: "";
      display: inline-block;
      width: 0;
      height: 100%;
      position: absolute;
      top: -5px;
      left: 0;

      transition: all 2s ease;
    }

    &:hover {
      opacity: 0.7;
      width: 65px;
      cursor: pointer;

      img {
        width: 18px;
        height: 18px;
        margin: 2px auto;
      }

      &:before {
        content: ${({selectedSidebarTitle}) => (selectedSidebarTitle)};
        display: inline-block;
        width: 100%;
        height: 100%;

        left: -65px;
      }
    }
  }

  .policy_item.active {
    img {
      width: 32px;
      height: 32px;
    }

    width: 70px;

    opacity: 1;
  }


  @media(max-width: ${SIZES.laptop}) {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: calc(100% - 50px);
    position: absolute;
    margin: 0 auto;
    right: 0;
    left: 0;

    .policy_item {
      display: inline-block;

      width: calc(100% / 10);
    }
  }
`;
