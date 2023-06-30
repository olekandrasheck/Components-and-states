import { nanoid } from "nanoid";
import { IProducts } from "../types";
import { ShopCard } from "./ShopCard";

export const CardView: React.FC<{ products: IProducts[] }> = ({ products }) => {
  return (
    <div className="card-view">
      <div className="card-view-wrapper">
        {products?.map((card: any) => (
          <ShopCard
            key={nanoid()}
            name={card.name}
            color={card.color}
            price={card.price}
            img={card.img}
          />
        ))}
      </div>
    </div>
  );
};
