import React from "react";
import { PolicySidebarWrapper } from "./styles";
import { Assets } from "../../settings/connections";
import { SelectPolicy } from "../../lib/handlers";

export default function PolicySidebar({ currPolicy, updatePolicy }) {

    const selectPolicy = (e) => {
      let selectedPolicy = e.target.dataset.policy;
      return updatePolicy(selectedPolicy);
    }
  return (
    <PolicySidebarWrapper selectedSidebarTitle={currPolicy?.title || "Motor 3PT"}>
      <div onClick={selectPolicy} className="policy_item" data-policy="Motor3PT">
        <img src={Assets?.icons?.VehicleIcon} alt=""  data-policy="Motor3PT"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="HomePP">
        <img src={Assets?.icons?.NavHomeIcon} alt=""  data-policy="HomePP"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="PersonalCP">
        <img src={Assets?.icons?.PersonalIcon} alt="" data-policy="PersonalCP" />
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="ShopPP">
        <img src={Assets?.icons?.ShopIcon} alt=""  data-policy="ShopPP"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="ParcelPP">
        <img src={Assets?.icons?.ParcelIcon} alt=""  data-policy="ParcelPP"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="RoyalGC">
        <img src={Assets?.icons?.GroupIcon} alt=""  data-policy="RoyalGC"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="RoyalFC">
        <img src={Assets?.icons?.FamilyIcon} alt=""  data-policy="RoyalFC"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="DriverPP">
        <img src={Assets?.icons?.NavLoginIcon} alt=""  data-policy="DriverPP"/>
      </div>
      <div onClick={selectPolicy} className="policy_item" data-policy="StudentPP">
        <img src={Assets?.icons?.NavClaimIcon} alt=""  data-policy="StudentPP"/>
      </div>
    </PolicySidebarWrapper>
  )
}