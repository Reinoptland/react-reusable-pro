import React from "react";
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
      <button onClick={props.addToCart}>Add to Cart</button>
    </div>
  );
}
