import React from "react";
import { Link } from "react-router-dom";

import Header from "../../../components/header";
import { ErrorPageWrapper } from "./styles";
import { ErrorCopies } from "../../../lib/literature";

export default function ErrorPageLayout({ type = 404 }) {
  let [currError, setCurrError] = React.useState({});

  React.useEffect(() => {
    setCurrError(ErrorCopies[type]);
  }, []);

  return (
    <ErrorPageWrapper>
      <Header />

      <div id="error_type" data-aos="zoom-in" data-aos-duration="500">
        <h1>{currError["header"] || "Error - Please contact support"}</h1>
      </div>

      <div id="error_info" data-aos="fade-up" data-aos-duration="1500">
        {type === (404 || "404") && (
          <>
            {/* <h6>Hi there,</h6> */}
            <h3 data-aos="fade-up" data-aos-duration="1800">Page Not Found!</h3>
            <p data-aos="fade-up" data-aos-duration="2000">{ErrorCopies[404]["summary"]}</p>
            {/* <Link to="/">Go back home {`>`}</Link> */}
            
          </>
        )}
      </div>
    </ErrorPageWrapper>
  );
}
