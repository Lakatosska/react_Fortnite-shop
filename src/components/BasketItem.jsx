import { useState } from "react";


function BasketItem(props) {

  const [count, setCount] = useState(0);

  const {
    mainId, 
    displayName,  
    price,
    quantity,
    removeFromBasket,
    increaseQuantity,
    decreaseQuantity 
  } = props;

  return (
    <li className="collection-item">
      {displayName} 
      <i className="material-icons basket-quantity" onClick={() => decreaseQuantity(mainId)}>remove</i>
       x{quantity}
      <i className="material-icons basket-quantity" onClick={() => increaseQuantity(mainId)}>add</i> = {price.regularPrice * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(mainId)}>
        <i className="material-icons basket-delete">close</i>
      </span>
    </li>
  )
}

export { BasketItem };