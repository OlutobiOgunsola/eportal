import React from "react";
import InputBase from "./Base";
import { Dropdown } from "semantic-ui-react";
import { StyledDropdown } from "./style_index";
// import Dropdown from './Dropdown'

// export default function ProductType ({}) {
//     return <Dropdown id="product_type" name="product_type">
//         <option value={"Option A"}>Option A</option>
//         <option value={"Option B"}>Option B</option>
//         <option value={"Option C"}>Option C</option>
//     </Dropdown>
// }

export default function ProductType({HandleChange, value}) {
    let [state, setState] = React.useState("");
    let handleChange = e => {
        console.log("change in dropdown", e)
        setState(state => setState(e.target.innerHTML));
        // return HandleChange(e?.target?.value, e)
    }
  return (
    <Dropdown onChange={handleChange} value={state} text={value || "Select Product Type"} icon="tags" className="icon" floating labeled fluid button data-input_id="product_type">
      <Dropdown.Menu>
        <Dropdown.Header>Select a Product</Dropdown.Header>

        <Dropdown.Item onClick={handleChange} value="option_a">Option A</Dropdown.Item>
        <Dropdown.Item onClick={handleChange} value="option_b">Option B</Dropdown.Item>
        <Dropdown.Item onClick={handleChange} value="option_c">Option C</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
