// import { useParams } from "react-router-dom";
// import ProductList from "../../../combonents/ProductList";
// import { useContext, useEffect, useState } from "react";
// import { getApi } from "../../../services/getAPI";
// import { Pagination } from "react-bootstrap";
// import createApiUrl from "../../../services/pjToLink";
// import { CategoryContext } from "./Category";

// const AllBrand = () => {
//   // Bộ lọc
//   const prop = useContext(CategoryContext);
//   const category = useParams().category;
//   const [filters, setFilters] = useState({ category: category });
//   // Phần này để phân trang
//   const coutItem = 10;
//   const [pageActive, setPageActive] = useState(0);
//   const [pageCouter, setPageCouter] = useState(0);
//   const [products, setProducts] = useState([]);
//   const handleClick = (page) => {
//     if (page >= 0 && page < pageCouter) setPageActive(page);
//   };
//   // set lại bộ lọc khi prop thay đổi
//   useEffect(() => {
//     setFilters({ category, ...prop });
//     setPageActive(0);
//   }, [prop, category]);

//   // phân lại trang khi bộ lọc hoặc pageActive hoặc category thay đổi
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const data = await getApi(
//           `${createApiUrl(filters)}&limit=${coutItem}&skip=${
//             pageActive * coutItem
//           }`
//         );
//         setPageCouter(Math.floor(data.total / coutItem) + 1);
//         setProducts(data.products);
//       } catch (error) {
//         console.log(`get products by category = ${category} error: `, error);
//       }
//     };
//     getProducts();
//   }, [filters, pageActive, category]);

//   return (
//     <>
//       <ProductList products={products} />;
//       <Pagination className="justify-content-center">
//         <Pagination.First onClick={() => handleClick(0)} />
//         <Pagination.Prev onClick={() => handleClick(pageActive - 1)} />
//         {[...Array(pageCouter)].map((_, index) => {
//           return (
//             <Pagination.Item
//               active={pageActive === index}
//               onClick={() => handleClick(index)}
//               key={index}
//             >
//               {index + 1}
//             </Pagination.Item>
//           );
//         })}
//         <Pagination.Next onClick={() => handleClick(pageActive + 1)} />
//         <Pagination.Last onClick={() => handleClick(pageCouter - 1)} />
//       </Pagination>
//     </>
//   );
// };

const AllBrand = () => {
  return <>AllBrand</>;
};

export default AllBrand;
