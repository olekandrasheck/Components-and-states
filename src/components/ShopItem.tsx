export const ShopItem = (item: any) => {
  return (
    <div className="shop-item-wrapper">
      <p className="shop-item-name">{item.name}</p>
      <p className="shop-item-color">{item.color}</p>
      <img className="shop-item-img" src={item.img} />
      <p className="shop-item-price">$ {item.price}</p>
      <button className="shop-item-button">ADD TO CART</button>
    </div>
  );
};
