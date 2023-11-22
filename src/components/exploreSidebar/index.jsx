import React from "react";
import { ExploreModal, ExploreSidebarWrapper } from "./styles";
import Aos from "aos";
import { Assets, Paths } from "../../settings/connections";
import { Link } from "react-router-dom";
import { EXPLORE_COPIES } from "../../lib/literature";
import RegicButton from "../../lib/components/Button";
import { REM_VALUE, S_FONT_SIZE, XS_FONT_SIZE } from "../../settings/styles";

export default function ExploreSidebar({ currPolicy }) {
  React.useEffect(() => {
    Aos.init({
      // once: true,
    });
    console.log(currPolicy);
  }, []);
  return (
    <ExploreSidebarWrapper currPolicy={currPolicy}>
      <ExploreModal>
        <div id="back_link" data-aos="fade-down" data-aos-duration="2000" data-aos-offset="200">
          <img src={Assets.utilityIcons.backArrow} alt="" id="back_arrow" />
          <Link to={Paths.HOME}>BACK</Link>
        </div>
        <h2 data-aos="fade-up" data-aos-duration="1000">{EXPLORE_COPIES[currPolicy]?.title || "NULL"}</h2>
        <p data-aos="fade-up" data-aos-duration="1500">{EXPLORE_COPIES[currPolicy]?.summary || "NULL"}</p>
        <div id="button_group" data-aos="fade-up" data-aos-duration="3000">
          <div>
            <RegicButton
              config={{
                type: "alternate",
                fontSize: S_FONT_SIZE,
                padding: '8px',
                withIcon: 'forwardArrow'
              }}
            >
              RENEW YOUR POLICY
            </RegicButton>
          </div>
          <img src={Assets.logo.REGICExploreLogo} alt="" id="shadow_logo"  data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000"/>
        </div>
      </ExploreModal>
    </ExploreSidebarWrapper>
  );
}
