

function BasketItem(props) {

  const {
    mainId, 
    displayName,  
    price,
    quantity
  } = props;

  return (
  <li className="collection-item">
    {displayName} x{quantity} = {price.regularPrice}
    <span className="secondary-content"><i className="material-icons">close</i></span>
    </li>
  )

}

export { BasketItem };