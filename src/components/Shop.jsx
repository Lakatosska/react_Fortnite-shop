import { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { GoodsList } from './GoodsList';

function Shop() {

  // список товаров и функция обновления этого списка
  const [goods, setGoods] = useState('');
  
  // сделаем состояние загрузки, задаем его изначально
  const [loading, setLoading] = useState(true);

  // всегда получает функцию и массив зависимостей(он пустой, т.к. надо выполнить 1 раз)
  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
          Authorization: API_KEY,
      },
    }).then(res => res.json())
      .then(data => {
        
        data.shop && setGoods(data.shop); // проверка, что данные пришли, иначе станут underfined
        console.log(data.shop)
        setLoading(false); // в любом случае загрузка закончилась
      })
  }, [])

  return <main className='container content'>
      {
        loading ? <Preloader /> : <GoodsList goods={goods}/>
      }
    </main>
}

export { Shop };