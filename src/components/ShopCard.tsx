export const ShopCard = (card: any) => {
  return (
    <div className="shop-card-wrapper">
      <div className="shop-card-name">{card.name}</div>
      <div className="shop-card-color">{card.color}</div>
      <div className="shop-card-img-wrapper">
        <img className="shop-card-img" src={card.img} />
      </div>
      <div className="shop-card-price">${card.price}</div>
      <button className="shop-card-button">ADD TO CART</button>
    </div>
  );
};
