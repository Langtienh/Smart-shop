// import { useEffect, useState } from "react";
// import { getApi } from "../services/getAPI";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const NavBrands = (prop) => {
//   const category = prop.category;
//   const [brands, setBrands] = useState([]);
//   useEffect(() => {
//     const getBrands = async () => {
//       try {
//         const data = await getApi(`brands?category=${category}`);
//         setBrands(data);
//       } catch (error) {
//         console.log("fetch brands error:", error);
//       }
//     };
//     getBrands();
//   }, [category]);
//   return (
//     <>
//       <h2 className="text-capitalize">{category} bán chạy</h2>
//       <div className="row g-0 my-3">
//         <div className="d-flex flex-wrap gap-2 col-7">
//           {brands &&
//             brands.length > 0 &&
//             brands.map((item, index) => {
//               return (
//                 <Button
//                   key={index}
//                   as={Link}
//                   to={`/${category}/${item}`}
//                   className="btn btn-sm btn-primary"
//                 >
//                   {item}
//                 </Button>
//               );
//             })}
//         </div>
//         <div className="ms-auto col-4  text-end">
//           <Button
//             as={Link}
//             to={`/${category}`}
//             className="btn btn-sm btn-warning"
//           >
//             Tất cả thương hiệu
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// };
const NavBrands = () => {
  return (
    <>
      <p>NavBrand</p>
    </>
  );
};

// export default NavBrands;
