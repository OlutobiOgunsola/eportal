import React from "react";
import { ExplorePageLayoutWrapper } from "./styles";
import Header from "../../../components/header";
import PolicySidebar from "../../../components/policySidebar";
import ExploreSidebar from "../../../components/exploreSidebar";
import { Assets } from "../../../settings/connections";
import { Grid } from "semantic-ui-react";
import ExploreOption from "../../../lib/components/Cards/ExploreOption";
import { EXPLORE_CONFIG } from "../../../lib/configs/explore";

export default function ExplorePageLayout({ policy }) {
  const [currPolicy, setCurrPolicy] = React.useState(policy);
  const [policyConfig, setPolicyConfig] = React.useState(null);

  React.useEffect(() => {
    const currPolicyConfig = EXPLORE_CONFIG[currPolicy];
    console.log('curr policy config: ', currPolicyConfig);
    setPolicyConfig(currPolicyConfig);
  }, [])

  return (
    <ExplorePageLayoutWrapper>
      <Header isLanding={false} />
      <img src={Assets.exploreBackgrounds.highlightBackground} alt="" id="highlight_background"/>
      <div id="explore_sidebar">
        <ExploreSidebar currPolicy={currPolicy} />
      </div>
      <div id="explore_options">
        <div id="options_container">
          <Grid columns={2} stackable id="options">
            <Grid.Column id="popular_option">
              <ExploreOption isPopular={true} config={policyConfig?.popularOption}/>
            </Grid.Column>
            <Grid.Column id="other_options">
              {
                policyConfig?.options?.map((option, _idx) => (
                 <div className="explore_option_card">
                   <ExploreOption config={option} key={_idx} />
                 </div>
                ))
              }
            </Grid.Column>
          </Grid>
          <div id="request_quote"></div>
        </div>
      </div>
    </ExplorePageLayoutWrapper>
  );
}
