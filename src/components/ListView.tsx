import { nanoid } from "nanoid";
import { IProducts } from "../types";
import { ShopItem } from "./ShopItem";

export const ListView: React.FC<{ products: IProducts[] }> = ({ products }) => {
  return (
    <div>
      {products?.map((item: any) => (
        <ShopItem
          key={nanoid()}
          name={item.name}
          color={item.color}
          price={item.price}
          img={item.img}
        />
      ))}
    </div>
  );
};
