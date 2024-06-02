// import { useParams } from "react-router-dom";
// import ProductList from "../../../combonents/ProductList";
// import { useContext, useEffect, useState } from "react";
// import { getApi } from "../../../services/getAPI";
// import createApiUrl from "../../../services/pjToLink";
// import { CategoryContext } from "./Category";

// const Brand = () => {
//   const prop = useContext(CategoryContext);
//   console.log("prop:", prop);
//   const parma = useParams();
//   const category = parma.category;
//   const brand = parma.brand;
//   const [filters, setFilters] = useState({ category, brand });
//   console.log(filters);
//   const [products, setProducts] = useState([]);
//   // thêm bộ lọc từ prop
//   useEffect(() => {
//     setFilters({ category, brand, ...prop });
//   }, [prop, category, brand]);

//   // xử lý lấy dữ liệu
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await getApi(`${createApiUrl(filters)}`);
//         setProducts(data.products);
//       } catch (error) {
//         console.log(`get products by category = ${category} error: `, error);
//       }
//     };
//     getProducts();
//   }, [category, filters]);

//   return <ProductList products={products} />;
// };

const Brand = () => {
  return <>Brand</>;
};
export default Brand;
