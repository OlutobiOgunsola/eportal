import React from "react";
import { DrawerNavlink, PolicyDrawerWrapper } from "./styles";
import DrawerInput from "../../lib/components/Input/DrawerInput";
import { Assets } from "../../settings/connections";

export default function PolicyDrawer({ isOpen }) {
  const [mode, setMode] = React.useState("buy");
  const [data, setData] = React.useState(null);
  const [state, setState] = React.useState("");

  const toggleDrawerMode = (e) => {
    return setMode(e?.target?.dataset?.mode);
  };

  const handleChange = (e) => {
    let value = e?.target?.value;
    return setState((oldState) => value);
  };
  return ( isOpen &&
    <PolicyDrawerWrapper isOpen={isOpen}>
      <div id="drawer_header">
        <DrawerNavlink
          data-mode="buy"
          className="drawer_navlink"
          onClick={toggleDrawerMode}
          isSelected={mode === 'buy'}
        >
          BUY
        </DrawerNavlink>
        <DrawerNavlink
          data-mode="renew"
          className="drawer_navlink"
          onClick={toggleDrawerMode}
          isSelected={mode === 'renew'}
        >
          RENEW
        </DrawerNavlink>
      </div>
      <div id="drawer_input_container">
        <DrawerInput type="text" value={state} InputPlaceholder={mode === "buy" ? "Enter Your Vehicle VIN Number" : "Enter Your Policy Number" } HandleChange={handleChange} />
        <img src={Assets.utilityIcons.questionMark} alt="" />
      </div>
    </PolicyDrawerWrapper>
  );
}
