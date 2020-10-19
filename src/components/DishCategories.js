import React, { useState } from "react";

import { restoData } from "../api/data";

import "./styles/dishCategories.scss";
import DishesAvailable from "./DishesAvailable";

export default () => {
  const [selected, setSelected] = useState(restoData[0].table_menu_list[0]);

  const CategoryOptions = () =>
    restoData[0].table_menu_list.map((menu) => {
      const { menu_category_id, menu_category } = menu;
      return (
        <div
          onClick={() => setSelected(menu)}
          className={`each-category ${
            selected.menu_category_id === menu_category_id
              ? "selected-category"
              : ""
          }`}
          key={menu_category_id}
        >
          {menu_category}
        </div>
      );
    });

  return (
    <>
      <div className='categories-container'>
        <CategoryOptions />
      </div>
      <div className='dishes-container'>
        <DishesAvailable selected={selected} />
      </div>
    </>
  );
};
