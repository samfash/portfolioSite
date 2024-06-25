import React from "react";
import Category from "./category";

const CategoryList = ({ categories }) => {
  return (
    <div className="table-responsive skills-grid">
      {categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
