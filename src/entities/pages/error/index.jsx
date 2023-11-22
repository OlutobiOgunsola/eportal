import React, { Component } from "react";

import ErrorPageLayout from "../../layouts/error";
import PageBase from "..";

export default function ErrorPage({ type = "404" }) {
  return (
      <ErrorPageLayout type={type} />
  );
}
