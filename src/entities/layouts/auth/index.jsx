import React from "react";
import { AuthPageLayoutWrapper, AuthForm } from "./styles";
import Header from "../../../components/header";
import { SubmitAuthDetails } from "../../../lib/handlers/SubmitAuthDetails";

import SVGLogo from "../../../assets/images/enterprise/Logo_Sat.png";
import { CONFIGURATIONS } from "../../../settings/config";
import { INPUT_PLACEHOLDERS } from "../../../lib/literature";

export default function AuthPageLayout({ policy }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const SubmitAuthDetailsHandler = function (event) {
    return SubmitAuthDetails({});
  };

  const handleEmail = function (event) {
    let target = event.target,
      value = target.value;

    console.log("handleEmail", value);
    return setEmail((oldValue) => value);
  };
  const handlePassword = function (event) {
    let target = event.target,
      value = target.value;
    console.log("handlePassword", value);

    return setPassword((oldValue) => value);
  };
  return (
    <AuthPageLayoutWrapper>
      <Header isLanding={false} withLogo={false} />
      <AuthForm onSubmit={SubmitAuthDetailsHandler}>
        <div id="auth_form_header">
          <h3>Sign In</h3>
          <p>Please provide your credentials to continue.</p>
        </div>

        <div id="auth_form_input_fields">
          <span className="column">
            <label htmlFor="email_id">Email</label>
            <input
              name="email_id"
              value={email}
              onChange={handleEmail}
              placeholder={`${INPUT_PLACEHOLDERS.EMAIL}`}
              config={CONFIGURATIONS.INPUTS.EMAIL}
            />
          </span>
          <span className="column">
            <label htmlFor="secure_key">Password</label>
            <input
              name="secure_key"
              value={password}
              onChange={handlePassword}
              placeholder={`${INPUT_PLACEHOLDERS.PASSWORD_INPUT}`}
              config={{
                Placeholder: INPUT_PLACEHOLDERS.PASSWORD_INPUT,
                ...CONFIGURATIONS.INPUTS.PASSWORD,
              }}
            />
          </span>

          <span className="row" id="persist_signin_row">
            <input
              type="checkbox"
              placeholder="Remember Me"
              name="persist_signin"
              id="persist_signin"
            />
            <label htmlFor="persist_signin">Remember Me</label>
          </span>
        </div>

        <div id="auth_form_footer">
          <h3>Royal Exchange General Insurance Company</h3>
          <p>Credential Management Service</p>
        </div>
      </AuthForm>

      <div id="auth_form_image" data-aos="fade-in" data-aos-duration="1000">
        <img src={SVGLogo} alt="" />
      </div>
    </AuthPageLayoutWrapper>
  );
}
