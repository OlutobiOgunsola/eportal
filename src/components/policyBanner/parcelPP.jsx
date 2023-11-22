import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import RevealChildren from '../widgets/revealingChildren/revealingChildren'
import { Assets } from '../../settings/connections'
import { PolicyCopies } from '../../lib/literature'
import { useNavigate } from 'react-router'
import { createExploreUrl } from '../../lib/helpers'

export default function ParcelProtectionBanner ({}) {
  const [drawerState, setDrawerState] = React.useState(false);
  const navigate = useNavigate();
  const openExplore = (e) => {
    console.log(e)
    return navigate(createExploreUrl(e.target.dataset.policy))
  }

  const toggleDrawer = () => {
    return setDrawerState(drawerState => !drawerState);
  }
    return <Grid columns={2} stackable className="splash_container"
        data-aos="zoom-in"
        data-aos-duration="2000">
      <Grid.Column
        data-aos="fade-right"
        data-aos-duration="1000"
        className="grid_col"
        id="left_column"
      >
        <div id="policy_title">
          <RevealChildren data-aos="slide-down" data-aos-duration="3000">
            <h2 className='header-text'>
              Parcel <br />
            </h2>
          </RevealChildren>
          <RevealChildren data-aos="slide-down" data-aos-duration="3000">
            <h2 className='header-text'>Protection</h2>
          </RevealChildren>
        </div>

        <div id="policy_cta">
            <button
              id="explore_btn"
              data-policy="parcelPP"
              data-aos="fade-up-right"
              data-aos-delay="2000"
              data-aos-duration="2000"
              className="animation_bounce"
              onClick={openExplore}
            >
              Explore <Icon name="arrow right"></Icon>
            </button>
          <button id="manage_btn" data-aos="fade-up" data-aos-duration="3000">
            Manage Your Policy <Icon name="arrow right"></Icon>
          </button>
        </div>
      </Grid.Column>
      <Grid.Column
        data-aos="fade-left"
        data-aos-duration="2500"
        className="grid_col"
        id="right_column"
      >
        <div id="policy_img"
            data-aos="slide-up"
            data-aos-duration="1500">
          <img
            src={Assets.images.ParcelPP}
            alt=""
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
        <div id="policy_copy">
          <h3 data-aos="fade-down" data-aos-duration="1500">
            {PolicyCopies.parcelPP.tag}
          </h3>
          <RevealChildren
            revealTime={1500}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <p>
                {PolicyCopies.parcelPP.summary}
            </p>
          </RevealChildren>
        </div>
      </Grid.Column>
    </Grid>
}