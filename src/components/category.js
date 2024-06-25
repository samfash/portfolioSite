import React from "react";
import DetailList from "./datailList";

const Category = ({ category }) => {
  return (
    <div className='skill-category'>
      <h3>{category.category}</h3>
      <DetailList details={category.details} />
    </div>
  );
};

export default Category;
