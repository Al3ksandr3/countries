import React from "react";

import "./HeaderText.css";

export default function HeaderText(props) {
  return <h1 className="headerText">{props.text}</h1>;
}
