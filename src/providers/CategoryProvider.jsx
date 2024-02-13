/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "../contexts";

const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState("All");
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
