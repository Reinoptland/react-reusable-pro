import React from "react";
// En dan nog styling met css.modules

// Zo doe je dat! (maar dat weten de meeste react beginners niet!)
export default function BetterButton(props) {
  // {...props} geef alle props door (onCLick, disabled etc etc etc)
  //  aan de button. Dus alles wat op een normale button werkt, werkt nu ook
  return <button {...props}>{props.children}</button>;
}
