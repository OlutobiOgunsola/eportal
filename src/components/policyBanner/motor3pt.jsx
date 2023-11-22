import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'
import RevealChildren from '../widgets/revealingChildren/revealingChildren'
import { Assets } from '../../settings/connections'
import { createExploreUrl, openExplore } from '../../lib/helpers'
import { useNavigate } from 'react-router'
import PolicyDrawer from '../managePolicyDrawer'

export default function Motor3PTBanner ({...props}) {
    const [drawerState, setDrawerState] = React.useState(false)
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
              Auto <br />
            </h2>
          </RevealChildren>
          <RevealChildren data-aos="slide-down" data-aos-duration="3000">
            <h3 className='header-text'>Care Plan</h3>
          </RevealChildren>
        </div>

        <div id="policy_cta">
            <button
              id="explore_btn"
              data-policy="motor3pt"
              data-aos="fade-up-right"
              data-aos-delay="2000"
              data-aos-duration="2000"
              className="animation_bounce"
              onClick={openExplore}
            >
              Explore <Icon name="arrow right"></Icon>
            </button>
          <button id="manage_btn" data-aos="fade-up" data-aos-duration="3000" onClick={toggleDrawer}>
            Manage Your Policy <Icon name="arrow right"></Icon>
          </button>
        </div>
        <div id="drawer_container">
          <PolicyDrawer isOpen={drawerState}/>
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
            src={Assets.images.Motor3PT}
            alt=""
            data-aos="fade-left"
            data-aos-duration="2000"
          />
        </div>
        <div id="policy_copy">
          <h3 data-aos="fade-down" data-aos-duration="1500">
            A 3rd-Party Policy That Protects
          </h3>
          <RevealChildren
            revealTime={1500}
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <p>
              This policy covers the third party against Bodily injury and
              death resulting from a car accident caused by the insured the
              legal liability of the insured where damage was caused to
              another person’s property.
            </p>
          </RevealChildren>
        </div>
      </Grid.Column>
    </Grid>
}