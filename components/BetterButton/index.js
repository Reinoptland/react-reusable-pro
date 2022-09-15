import React from "react";
import styles from "./BetterButton.module.css";

// Zo doe je dat! (maar dat weten de meeste react beginners niet!)
export default function BetterButton(props) {
  // {...props} geef alle props door (onCLick, disabled etc etc etc)
  //  aan de button. Dus alles wat op een normale button werkt, werkt nu ook

  let className = styles.btn;

  // variant is hier: secondary
  if (props.variant) {
    // dus styles[variant] is styles["secondary"]
    className = `${styles.btn} ${styles[props.variant]}`;
  }

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}
