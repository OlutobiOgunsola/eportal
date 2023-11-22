import React from "react";
import { ExploreCardWrapper } from "./styles";
import Aos from "aos";
import RegicButton from "../Button";
import { BASE_FONT_SIZE, REM_VALUE, S_FONT_SIZE, XS_FONT_SIZE } from "../../../settings/styles";

export default function ExploreOption({ isPopular = false, config = {}, key }) {
  React.useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <ExploreCardWrapper
      title = {config?.title}
      isPopular={isPopular}
      data-aos={isPopular ? "fade-right" : "slide-up"}
      data-aos-duration={isPopular ? "2000" : key * 1000}
    >
      {isPopular && (
        <span data-aos="fade-in" data-aos-duration="1000" id="popular_tag">
          POPULAR
        </span>
      )}
      <div id="image_group">
        <img
          src={config?.image}
          alt=""
          data-aos="fade-in"
          data-aos-duration="3000"
        />
        <span
          id="image_modal"
          data-aos="fade-in"
          data-aos-duration="3000"
        ></span>
      </div>
      <div id="copy">
        <h4 data-aos={isPopular ? "fade-up" : ""} data-aos-duration="3000" data-aos-delay="1000">
          {config?.title?.split(" ").length > 1 ? config?.title?.split(" ")[0] : null}
        </h4>
        <h3 data-aos={isPopular ? "fade-up" : ""} data-aos-duration="2000" data-aos-delay="1500">
          {config?.title?.split(" ").length === 1 ? config?.title : config?.title?.split(" ")[1]}
        </h3>

        {/* {isPopular && ( */}
          <p data-aos={isPopular ? "fade-up" : ""} data-aos-duration="3000" data-aos-delay="2000">
            FOR SUM INSURED/BENEFITS UP TO NGN{" "}
            {config?.benefitLimit?.toLocaleString()}
          </p>
        {/* )} */}

        <div id="cta" data-aos={isPopular ? "fade-up" : ""} data-aos-duration="3000" data-aos-delay="3000">
          <RegicButton
            config={{
              type: "text",
              fontSize: `${REM_VALUE * 0.625}px`,
              padding: "4px",
              withIcon: (isPopular) ? "forwardArrow" : "",
            }}
          >
            BUY AT NGN {config?.price?.toLocaleString()} PER ANNUM
          </RegicButton>
        </div>
      </div>
    </ExploreCardWrapper>
  );
}
