import React from "react";
import { LandingLayoutWrapper } from "./styles";
import { Grid, Icon } from "semantic-ui-react";
import RevealChildren from "../../../components/widgets/revealingChildren/revealingChildren";
import { Assets } from "../../../settings/connections";
import Aos from "aos";
import Header from "../../../components/header";
import PolicyBanners from "../../../components/policyBanner";
import PolicySidebar from "../../../components/policySidebar";

export default function LandingPageLayout({ policyConfig }) {
  const [selectedPolicy, setSelectedPolicy] = React.useState("Motor3PT");

  const updatePolicy = function (nextPolicy) {
    console.log("next policy: " + nextPolicy);
    if (!nextPolicy) {
      return setSelectedPolicy("Motor3PT");
    }
    return setSelectedPolicy((currPolicy) => nextPolicy);
  };
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <LandingLayoutWrapper
      currPolicy={selectedPolicy}
      data-aos="fade-in"
      data-aos-duration="2500"
    >
      <Header isLanding={true} />
      {PolicyBanners[selectedPolicy]}
      <PolicySidebar currPolicy={selectedPolicy} updatePolicy={updatePolicy} />
    </LandingLayoutWrapper>
  );
}
