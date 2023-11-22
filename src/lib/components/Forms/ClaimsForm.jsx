import React from "react";
import { ClaimsFormWrapper } from "./styles";
import PolicyNumberInput from "../Input/PolicyNumber";
import ProductType from "../Input/ProductType";
import FileInput from "../Input/FileInput";
import ClaimsDescription from "../Input/ClaimsDescription";
import { Link } from "react-router-dom";
import { Assets, Paths } from "../../../settings/connections";
import RegicButton from "../Button";
import { REM_VALUE } from "../../../settings/styles";

export default function ClaimsForm({SubmitClaim}) {
    const [policyNumber, setPolicyNumber] = React.useState(null);
    const [productType, setProductType] = React.useState(null);
    const [claimsFile, setClaimsFile] = React.useState(null);
    const [claimsDescription, setClaimsDescription] = React.useState(null);

    const handleChange = function(value, e) {
        let target = e.target.dataset.input_id;
        console.log("target: " + target);
    }

  return (
    <ClaimsFormWrapper>
      <div
        id="back_link"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-offset="200"
      >
        <img src={Assets.utilityIcons.backArrow} alt="" id="back_arrow" />
        <Link to={Paths.HOME}>BACK</Link>
      </div>
      <h4>File a Claims Report</h4>
      <div id="policy_number">
        <PolicyNumberInput HandleChange={handleChange} name="policy_input" />
      </div>
      <div id="product_type">
        <ProductType HandleChange={handleChange} name="product_type" />
      </div>
      <div id="pick_file">
        <FileInput HandleChange={handleChange} name="pick_file" />
      </div>
      <div id="claims_description">
        <ClaimsDescription HandleChange={handleChange} name="claims_description"/>
      </div>
      <div id="submit_btn">
        <RegicButton
          config={{
            type: "primary",
            fontSize: `${REM_VALUE * 0.625}px`,
            padding: "16px 4px",
            withIcon: "forwardArrow",
          }}
        >
          SUBMIT
        </RegicButton>
      </div>
    </ClaimsFormWrapper>
  );
}
