import { GoodsItem } from './GoodsItem';

function GoodsList(props) {
  
  // по умолчанию goods - пустой массив
  const {goods = []} = props;

/*
  if (!goods.lenght) {
    return <h3>Nothing here</h3>
  }
  */

  return(
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item}/>
      ))}
    </div>
  )
}

export { GoodsList };