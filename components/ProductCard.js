import React from "react";
import BetterButton from "./BetterButton";
import Button from "./Button";
import styles from "./ProductCard.module.css";

// Een typisch "reusable" component van een junior
// Juniors maken vaak grotere components zoals deze
// En dus moeten ze opnieuw de text en de buttons etc stylen!
// Oplossing: maak kleinere components!
// (alleen dit is moeilijker dan het lijkt .. )
export default function ProductCard(props) {
  return (
    <div className={styles.card}>
      <img className={styles.productImage} src={props.productImage} />
      <h3 className={styles.title}>{props.productName}</h3>
      <p>€ {props.price}</p>
      {/* Ok, nog meet dingen voor button */}
      {/* Zie je hoe complex deze button wordt qua props! */}
      {/* We zijn eigenlijk bezig om HTML te herschrijven */}
      {/* Want alles at op een HTML button moet werken */}
      {/* Dat verwacht je collega te kunnen doen met deze button! */}
      {/* Oplossing:
        - props spreading
        - props.children -> zorgt dat je een opening en een closing tag
        kan gebruiken (net als normale HTML)
      */}

      <BetterButton onClick={props.addToCart} disabled={true}>
        Add to Cart
      </BetterButton>

      <BetterButton
        onClick={props.addToCart}
        disabled={true}
        variant="secondary"
      >
        Add to Cart
      </BetterButton>
      {/* <Button
        onClick={props.addToCart}
        disabled={true}
        buttonText="Add to Cart"
        style={{ backgroundColor: "green" }}
      /> */}
    </div>
  );
}
