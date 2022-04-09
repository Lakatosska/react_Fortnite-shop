import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';

function Shop() {

  // список товаров и функция обновления этого списка
  const [goods, setGoods] = useState([]);
  
  // сделаем состояние загрузки, задаем его изначально
  const [loading, setLoading] = useState(true);

  // список заказов
  const [order, setOrder] = useState([]);

  console.log(order);

  const [isBasketShow, setBasketShow] = useState(false);

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow)
  }

  // функция добавления товара в корзину, потом спускаем ее через пропсы в GoodsList
  const addToBasket = (item) => {

    // обходим наши заказы методом findIndex, если не находим индекс товара в индексе заказанного товара, то...
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      // ... товар добавляется первый раз (поэтому нужна проверка, чтоб quantity наращивать)
      // объект ...item наследует все ключи, которые мы получим через ф-цию, и добавим поле quantity c "1"
      const newItem = {
        ...item,
        quantity: 1,
      };
      // возвращает массив, который уже сейчас есть, и добавляет туда новый объект
      // т.о. у нас массив объектов и каждый раз добавляем 1 новый
      setOrder([...order, newItem]);

      // если товар уже в корзине, то тогда изменяем значение quantity, все остальные значения - без изменений
      // т.о. нужно перебрать наш массив
    } else {
        const newOrder = order.map((orderItem, index) => {

          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            }

          } else {
            return orderItem;
          }
        });

      // в результате сформированный массив через метод setOrder отправляем в state
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {

    const newOrder = order.filter(el => el.mainId !== itemId)
    setOrder(newOrder)
  };

  const increaseQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
          return el;
      }
    });
    setOrder(newOrder);
  }

  const decreaseQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if (el.mainId === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
          return el;
      }
    });
    setOrder(newOrder);
  }

  // всегда получает функцию и массив зависимостей(он пустой, т.к. надо выполнить 1 раз)
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
          Authorization: API_KEY,
      },
    }).then(res => res.json())
      .then(data => {
        data.shop && setGoods(data.shop); // проверка, что данные пришли, иначе станут underfined
        setLoading(false); // в любом случае загрузка закончилась
      })
  }, [])

  return <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
      {
        isBasketShow && 
          <BasketList 
            order={order} 
            handleBasketShow={handleBasketShow} 
            removeFromBasket={removeFromBasket}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
      }
    </main>
}

export { Shop };