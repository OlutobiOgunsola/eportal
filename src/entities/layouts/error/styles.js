import styled from "styled-components";
import { COLORS, PagePadding } from "../../../lib/styles";

export const ErrorPageWrapper = styled.div`
    width: 100%;
    height: 100%;

    ${PagePadding()};

    #error_type {
        display: block;

        h1 {
            font-family: "Montserrat Alternates";
            font-size: 40px;
            margin: 0;
            font-weight: 900;

            color: ${COLORS.primaryNavyBlue};

            margin-bottom: 40px;
        }
    }

    #error_info {
        width: 100%;
        height: 400px;

        background: #191d63;
        padding: 32px;
        box-sizing: border-box;

        border-radius: 8px;

        color: ${COLORS.fontWhiteSaturated};
        font-family: "Montserrat";

        h6 {
            font-size: 16px;
            font-family: "Chivo"
        }


        h3 {
            font-size: 32px;
        }

        a {
            color: ${COLORS.fontWhiteSaturated};
            font-family: "Libre Baskerville", "Courier New"
        }
    }
`