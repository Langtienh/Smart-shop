import { useEffect, useState } from "react";
import NavBrands from "./NavBrands";
import { axiosGet } from "../services/axiosHelper";
import ProductList from "./ProductList";

const Section = (props) => {
  // get api
  const category = props.category;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getTop10Products = async () => {
      try {
        const res = await axiosGet(`top10Products?category=${category}`);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getTop10Products();
  }, [category]);
  return (
    <div className="py-3 flex flex-col gap-3">
      <NavBrands category={category} />
      <ProductList products={products} />
    </div>
  );
};

export default Section;
