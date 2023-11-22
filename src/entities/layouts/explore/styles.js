import styled from "styled-components";
import { COLORS, PageBase, PagePadding } from "../../../lib/styles";

export const ExplorePageLayoutWrapper = styled.div`
    ${PagePadding()};
    ${PageBase()};

    background-color: ${COLORS.alternateWhite};

    height: auto; 
    min-height: 900px;  

    #highlight_background {
        position: absolute;
        right: 0;
        top: -100px;
        height: 600px;
    }

    #explore_sidebar {
        position: absolute;
        z-index: 900;
        left: 0;
        top: 0;
    }

    .explore_option_card {
        width: 220px;
        height: 300px;
    }

    #explore_options {
        height: 500px;
        width: 100%;

        #options_container {
            width: 700px;
            height: auto;
            margin-left: auto;

            #options {
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                height: 640px;

                #popular_option {
                    width: 230px;
                    height: 100%;
                }

                #other_options {
                    width: calc(100% - 246px);
                    height: 100%;
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-between;
                }
            }
        }
    }
`