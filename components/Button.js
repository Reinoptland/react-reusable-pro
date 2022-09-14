import React from "react";

export default function Button(props) {
  // maar we gebruiken ze niet:
  return (
    <button
      style={props.style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.buttonText}
    </button>
  );
}
