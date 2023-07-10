import React from "react";

function Container(props) {
  return <div className="w-full bg-transparent">{props.children}</div>;
}

export default Container;
