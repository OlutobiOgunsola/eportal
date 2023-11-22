import styled from "styled-components";
import { Assets } from "../../../settings/connections";
import { COLORS } from "../../styles";
import { ALT_FONT, STYLE_CONSTANTS } from "../../../settings/styles";

export const ClaimsFormWrapper = styled.form`
    width: 100%;
    max-width: 450px;
    height: auto;
    border-radius: 16px;
    box-shadow: 43px 45px 33px 7px rgba(0, 0, 0, 0.25);

    background: ${COLORS.cardBackground};

    padding: 48px 32px;
    box-sizing: border-box;

    

    #back_link {
        img {
            margin-right: 8px;
        }

        margin-bottom: 40px;
    }

    a {
        text-decoration: none;
        font-family: 'Montserrat';
        font-size: 16px;
        color: ${COLORS.primaryNavyBlue};
    }

    h4 {
        ${STYLE_CONSTANTS.FONT.H4};
        text-transform: uppercase;
        font-family: ${ALT_FONT};
        color: ${COLORS.primaryNavyBlue};
    }

    #product_type {
        margin-bottom: 16px;
    }

`
