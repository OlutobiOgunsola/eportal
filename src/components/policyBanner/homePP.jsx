import React from "react";
import { Grid, Icon } from "semantic-ui-react";
import RevealChildren from "../widgets/revealingChildren/revealingChildren";
import { Assets } from "../../settings/connections";
import { PolicyCopies } from "../../lib/literature";
import { BannerWrapper } from "./styles";
import { useNavigate } from "react-router";
import { createExploreUrl } from "../../lib/helpers";

export default function HomeProtectionBanner({}) {
  const [drawerState, setDrawerState] = React.useState(false);
  const navigate = useNavigate();
  const openExplore = (e) => {
    console.log(e)
    return navigate(createExploreUrl(e.target.dataset.policy))
  }

  const toggleDrawer = () => {
    return setDrawerState(drawerState => !drawerState);
  }
  return (
    <BannerWrapper className="home_pp">
      <Grid
        columns={2}
        stackable
        className="splash_container"
        data-aos-duration="3000"
      >
        <Grid.Column
          data-aos="fade-left"
          data-aos-duration="1000"
          className="grid_col"
          id="left_column"
        >
          <div id="policy_title">
            <RevealChildren data-aos="slide-down" data-aos-duration="3000">
              <h2 className="header-text">
                Home <br />
              </h2>
            </RevealChildren>
            <RevealChildren data-aos="slide-down" data-aos-duration="3000">
              <h3 className="header-text">Protection Plan</h3>
            </RevealChildren>
          </div>

          <div id="policy_cta">
            <button
              id="explore_btn"
              data-policy="homePP"
              data-aos="fade-right"
              data-aos-duration="2000"
              className="animation_bounce"
              onClick={openExplore}
            >
              Explore <Icon name="arrow right"></Icon>
            </button>
            <button id="manage_btn" data-aos="fade-left" data-aos-duration="1000">
              Manage Your Policy <Icon name="arrow right"></Icon>
            </button>
          </div>
        </Grid.Column>
        <Grid.Column
          className="grid_col"
          id="right_column"
        >
          <div id="policy_img">
            <img
              src={Assets.images.HomePP}
              alt=""
              data-aos="fade-up"
              data-aos-duration="2000"
            />
          </div>
          <div id="policy_copy">
            <h3 data-aos="fade-up" data-aos-duration="3000">
              {PolicyCopies.homePP.tag}
            </h3>
            <RevealChildren
              revealTime={1500}
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <p>{PolicyCopies.homePP.summary}</p>
            </RevealChildren>
          </div>
        </Grid.Column>
      </Grid>
    </BannerWrapper>
  );
}
