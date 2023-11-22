import styled from "styled-components";
import { Assets } from "../../settings/connections";
import { COLORS, PagePadding } from "../../lib/styles";
import { ALT_FONT, STYLE_CONSTANTS } from "../../settings/styles";

export const ExploreSidebarWrapper = styled.div`
    height: 900px;
    min-height: 900px;
    width: 405px;
    background: url(${({currPolicy}) => {
        return Assets.exploreBackgrounds[currPolicy]
    }});
`
export const ExploreModal = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(103deg, rgba(175, 178, 229, 0.54) 11.52%, rgba(250, 248, 252, 0.92) 72.5%), rgba(250, 248, 252, 0.85);
    ${PagePadding()};
    padding-right: 0px;
    padding-top: 150px;
    box-sizing: border-box;

    #back_link {
        img {
            margin-right: 8px;
        }
    }

    a {
        text-decoration: none;
        font-family: 'Montserrat';
        font-size: 16px;
        color: ${COLORS.primaryNavyBlue};
    }

    h2 {
        ${STYLE_CONSTANTS.FONT.H2};
        text-align: left;
        color: ${COLORS.primaryNavyBlue};
        margin-top: 32px;
        font-family: ${ALT_FONT};
        font-weight: ${STYLE_CONSTANTS.FONT.HEAVY_FONT};
    }

    p {
        ${STYLE_CONSTANTS.FONT.P_SERIF};
        color: ${COLORS.primaryNavyBlue};
        line-height: 150%;
        text-align: justify;
    }

    #button_group {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        #shadow_logo {
            width: calc(100% - 200px);
            height: 35px;
            margin-top: 5px;
        }

        div {
            // width: calc(100% - 90px);
            width: 254px;
        }
    }
`