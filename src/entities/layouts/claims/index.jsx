import React from "react";
import { ClaimsWrapper } from "./styles";
import Header from "../../../components/header";
import ClaimsForm from "../../../lib/components/Forms/ClaimsForm";

export default function ClaimsLayout({SubmitClaim}) {
  return (
    <ClaimsWrapper>
      <Header isLanding={true} />
      <div id="claims_form">
        <ClaimsForm OnSubmit={SubmitClaim} />
      </div>
    </ClaimsWrapper>
  );
}
