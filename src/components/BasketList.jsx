import { BasketItem } from './BasketItem';

function BasketList(props) {
  const {order = []} = props;


  return ( 
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {
        order.length ? order.map(item => (
          <BasketItem key={item.mainId} {...item}/>
        )) : <li className="collection-item">Корзина пуста</li>
      }
      <li className="collection-item active">Общая стоимость:</li>
    </ul>
  )
}

export { BasketList };
