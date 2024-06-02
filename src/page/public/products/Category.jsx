// import { Container, Dropdown } from "react-bootstrap";
// import { Outlet, useParams } from "react-router-dom";
// import NavBrands from "../../../combonents/NavBrands";
// import { createContext, useEffect, useState } from "react";
// import { getApi } from "../../../services/getAPI";

// export const CategoryContext = createContext();

// const Category = () => {
//   const category = useParams().category;
//   const [filters, setFilters] = useState([]);
//   const [filtersOj, setFiltersOj] = useState({});
//   const [data, setData] = useState({});
//   useEffect(() => {
//     const getFilters = async () => {
//       try {
//         const data = await getApi(`more?category=${category}`);
//         setData(data);
//         setFilters(data.filters);
//       } catch (error) {
//         console.log("get filters error: ", error);
//       }
//     };
//     getFilters();
//   }, [category]);
//   const handleFilter = (oj) => {
//     setFiltersOj({ ...filtersOj, ...oj });
//   };
//   const handleDeleteFilter = () => {
//     setFiltersOj({});
//   };
//   const handleUpdateFilter = (attribute) => {
//     const newFileters = filtersOj;
//     delete newFileters[attribute];
//     setFiltersOj({ ...newFileters });
//   };
//   return (
//     <CategoryContext.Provider value={filtersOj}>
//       <Container>
//         <NavBrands category={category} />
//         <div className="d-flex gap-2 flex-wrap">
//           <button
//             onClick={handleDeleteFilter}
//             className="btn btn-sm btn-warning"
//           >
//             Xóa bộ lọc
//           </button>
//           {filters &&
//             filters.length > 0 &&
//             filters.map((filter, index) => {
//               return (
//                 filter.name !== "brand" && (
//                   <Dropdown key={index}>
//                     <Dropdown.Toggle className="btn-sm btn-danger">
//                       {filter.name}
//                     </Dropdown.Toggle>
//                     <Dropdown.Menu>
//                       <Dropdown.Item
//                         onClick={() => handleUpdateFilter(filter.name)}
//                       >
//                         Tất cả
//                       </Dropdown.Item>
//                       {data &&
//                         data[filter.name] &&
//                         data[filter.name].length > 0 &&
//                         data[filter.name].map((item, index) => {
//                           return (
//                             <Dropdown.Item
//                               onClick={() =>
//                                 handleFilter({ [filter.name]: item })
//                               }
//                               key={index}
//                             >
//                               {item}
//                               {filter.extend}
//                             </Dropdown.Item>
//                           );
//                         })}
//                     </Dropdown.Menu>
//                   </Dropdown>
//                 )
//               );
//             })}
//         </div>
//         <Outlet />
//       </Container>
//     </CategoryContext.Provider>
//   );
// };
const Category = () => {};
export default Category;
