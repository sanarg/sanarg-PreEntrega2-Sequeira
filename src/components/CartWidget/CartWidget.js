import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

/* --------------- Importo el context para acceder al carrito --------------- */
import { CartContext } from "../../context/CartContext";
export default function CartWidget() {
  const { cart } = React.useContext(CartContext);
  let totalItems = 0
  for (var item in cart) {
    totalItems += cart[item].quantity;
  }
  return (
    <div className="CartWidget">
      <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="badge">
          {totalItems}
        </span>
      </Link>
    </div>
  );
}
