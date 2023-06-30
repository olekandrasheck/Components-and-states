import { useState } from "react";
import { IProducts } from "../types";
import { Icon } from "@mui/material";
import { CardView } from "./CardView";
import { ListView } from "./ListView";
import { IconSwitch } from "./IconSwitch";

export const Store: React.FC<{ products: IProducts[] }> = ({ products }) => {
  const [icon, setIcon] = useState("view_list");
  const [view, setView] = useState(true);

  const handleSwitch = () => {
    if (icon !== "view_list") {
      setIcon("view_list");
      setView(true);
    } else {
      setIcon("view_module");
      setView(false);
    }
  };
  return (
    <div>
      <IconSwitch onSwitch={handleSwitch} icon={icon} />

      {view ? (
        <CardView products={products} />
      ) : (
        <ListView products={products} />
      )}
    </div>
  );
};
