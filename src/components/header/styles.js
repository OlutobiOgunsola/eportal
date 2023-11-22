import styled from "styled-components";
import { PagePadding } from "../../lib/styles";

export const HeaderWrapper = styled.header`
    width: 100%;
    height: 60px;
    box-sizing: border-box;

    margin: 0;
    margin-bottom: 60px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;

    ${PagePadding()};


    div {
        display: inline-block;
        width: 250px;
        height: auto;
    }

    #logo_container {
        height: 100%;
    }

    #nav_links{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding: 0 20px;
        box-sizing: border-box;

        list-style-type: none;


        img {
            display: inline-block;
            width: 24px;
            height: 24px;

            opacity: 0.2;

            transition: all 0.25s ease-in-out;
            &:hover {
                opacity: 1;
                cursor: pointer;
            }
        }

        .active_link {
            opacity: 1;
        }
    }

    #header_container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;
    }
`