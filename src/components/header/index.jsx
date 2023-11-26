import React from "react";
import { HeaderWrapper } from "./styles";
import { Grid, GridRow } from "semantic-ui-react";
import { Assets } from "../../settings/connections";
import Aos from "aos";
import { useNavigate } from "react-router";
import { useGetPath } from "../../lib/hooks/usePath";

export default function Header({ isLanding = false, withLogo = true }) {
  const HomeRef = React.useRef(null);
  const RenewRef = React.useRef(null);
  const ClaimsRef = React.useRef(null);
  const AuthRef = React.useRef(null);

  const path = useGetPath();
  const refArray = [HomeRef, AuthRef, ClaimsRef, RenewRef];

  React.useEffect(() => {
    Aos.init({
      // once: true,
    });

    refArray.forEach((ref) => (ref.current.classList = ""));
    switch (path.pathname) {
      case "/":
        return HomeRef.current.classList.add("active_link");
      case "/claims":
        return ClaimsRef.current.classList.add("active_link");
      case "/auth":
        return AuthRef.current.classList.add("active_link");
      // case "/renew":
      //   return RenewRef.current.classList.add("active_link");
      default:
        return null;
    }
  }, []);

  const Navigate = useNavigate();

  const openPage = (e) => {
    console.log(e);
    return Navigate(e?.target?.dataset?.target);
  };
  return (
    <HeaderWrapper>
      <Grid columns={12} container id="header_container">
        <div id="logo_container" data-aos="slide-down" data-aos-duration="500">
          {withLogo ? (
            <div
              id="logo"
              data-aos="fade-in"
              data-aos-duration="3000"
              data-aos-delay="3000"
            >
              <img
                src={
                  isLanding
                    ? Assets.logo.REGICLogoWhite
                    : Assets.logo.REGICLogoSaturated
                }
                alt=""
                id="logo_img"
              />
            </div>
          ) : null}
        </div>

        <div>
          <div>
            <ul
              id="nav_links"
              className=""
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="1000"
            >
              <li
                data-aos="slide-right"
                data-aos-duration="3000"
                data-aos-delay="2000"
                onClick={openPage}
              >
                <img
                  src={
                    isLanding
                      ? Assets.icons.NavHomeIcon
                      : Assets.icons.NavHomeIconSat
                  }
                  className="active_link"
                  alt=""
                  ref={HomeRef}
                  data-target="/"
                />
              </li>
              <li
                data-aos="slide-right"
                data-aos-duration="2500"
                data-aos-delay="2000"
              >
                <img
                  src={
                    isLanding
                      ? Assets.icons.NavRenewIcon
                      : Assets.icons.NavRenewIconSat
                  }
                  alt=""
                  ref={RenewRef}
                  data-target="/renew"
                />
              </li>
              <li
                data-aos="slide-right"
                data-aos-duration="2000"
                data-aos-delay="2000"
                onClick={openPage}
              >
                <img
                  src={
                    isLanding
                      ? Assets.icons.NavClaimIcon
                      : Assets.icons.NavClaimIconSat
                  }
                  alt=""
                  ref={ClaimsRef}
                  data-target="/claims"
                />
              </li>
              <li
                data-aos="slide-right"
                data-aos-duration="1500"
                data-aos-delay="2000"
                onClick={openPage}
              >
                <img
                  src={
                    isLanding
                      ? Assets.icons.NavLoginIcon
                      : Assets.icons.NavLoginIconSat
                  }
                  alt=""
                  ref={AuthRef}
                  data-target="/auth"
                />
              </li>
            </ul>
          </div>
        </div>
        <div id="nav_link_sidebar" />
      </Grid>
    </HeaderWrapper>
  );
}
