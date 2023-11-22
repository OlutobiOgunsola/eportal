import styled from "styled-components";
import { COLORS } from "../../lib/styles";
import { ALT_FONT, REM_VALUE, S_FONT_SIZE } from "../../settings/styles";

export const PolicyDrawerWrapper = styled.div`
  height: 150px;
  width: 400px;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 16px 16px 0px 0px;
  background: ${COLORS.cardBackground};
  opacity: 0.5;
  transition: all 0.25s ease-in-out;
  position: absolute;
  bottom: ${({isOpen}) => (isOpen ? "-80px" : "80px")};

  &:hover {
    opacity: 1;
  }
  #drawer_header {
    height: 40px;
    p {
      display: inline-block;
      width: 60px;
    }

    margin-bottom: 8px;
  }

  #drawer_input_container {
    width: 100%;
    position: relative;

    img {
      position: absolute;
      top: 10px;
      right: 16px;
    }
  }

  .drawer_navlink {
    font-size: ${S_FONT_SIZE};
    font-weight: bold;
    font-family: ${ALT_FONT};
    color: ${COLORS.primaryNavyBlue};
    transition: all 0.25s ease-in-out;
  }
`;

export const DrawerNavlink = styled.p`
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
`;
