import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';

function Shop() {

  // список товаров и функция обновления этого списка
  const [goods, setGoods] = useState([]);
  
  // сделаем состояние загрузки, задаем его изначально
  const [loading, setLoading] = useState(true);

  // список заказов
  const [order, setOrder] = useState([]);

  // функция добавления товара в корзину, потом спускаем ее через пропсы в GoodsList
  const addToBasket = (item) => {

    // обходим наши заказы методом findIndex, если не находим индекс товара в индексе заказанного товара, то...
    const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

    if (itemIndex < 0) {
      // ... товар добавляется первый раз (поэтому нужна проверка, чтоб quantity наращивать)
      // объект ...item наследует все ключи, которые мы получим через ф-цию, и добавим поле quantity c "1"
      const newItem = {
        ...item,
        quantity: 1,
      }
      // возвращает массив, который уже сейчас есть, и добавляет туда новый объект
      // т.о. у нас массив объектов и каждый раз добавляем 1 новый
      setOrder([...order, newItem]);

      // если товар уже в корзине, то тогда изменяем значение quantity, все остальные значения - без изменений
      // т.о. нужно перебрать наш массив
    } else {
      const newOrder = order.map((orderItem, index) => {

        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }

        } else {
          return orderItem;
        }
      })

      // в результате сформированный массив через метод setOrder отправляем в state
      setOrder(newOrder);
    }
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
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket}/>}
    </main>
}

export { Shop };