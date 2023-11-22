import styled from "styled-components";
import { PagePadding } from "../../lib/styles";

export const PageBaseWrapper = styled.div`
  position: relative;

  z-index: 1;

  #header_container {
    ${PagePadding()};
    display: block;
  }
`;
