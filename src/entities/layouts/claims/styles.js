import styled from "styled-components";
import { PageBase, PagePadding } from "../../../lib/styles";
import { Assets } from "../../../settings/connections";


export const ClaimsWrapper = styled.div`
    ${PagePadding()};
    ${PageBase()};

    background: url(${Assets.pageBackgrounds.claims});

    #claims_form {
        max-width: 620px;
        width: 100%;
        height: auto;
    }
`