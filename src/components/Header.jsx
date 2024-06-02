import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getApi } from "../services/getAPI";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getApi("categories");
        setCategories(result);
      } catch (error) {
        console.error("There was an error!", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="h-10 bg-slate-600">Header 1</div>
      <div className="h-10 bg-red-700 sticky top-0">Header 2</div>
      <p className="h-[2000px]">Header</p>
    </>
  );
};

export default Header;

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Dropdown, Form, FormControl } from "react-bootstrap";
// import { IoSearchOutline } from "react-icons/io5";
// import { FaHome, FaMapMarkerAlt, FaRegUserCircle } from "react-icons/fa";
// import { FiPhoneCall } from "react-icons/fi";
// import { BsCart3 } from "react-icons/bs";
// import { LuMenu } from "react-icons/lu";

// function Header() {

//   return (
//     <>
//       <Navbar fixed="top" expand="md">
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             <FaHome size={50} />
//           </Navbar.Brand>
//           {/* đoạn này thanh search xấu muốn hiện thêm class d-flex thay đổi expand="lg" */}
//           <Form className=" d-none position-relative">
//             <div
//               style={{ left: "10px" }}
//               className="text-black position-absolute top-50 translate-middle-y"
//             >
//               <IoSearchOutline size={24} />
//             </div>
//             <FormControl
//               type="search"
//               placeholder="Bạn cần tìm gì?"
//               className="mr-2 rounded-5 ps-5"
//             />
//           </Form>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Dropdown className="ms-3 my-auto">
//               <Dropdown.Toggle variant="danger">
//                 <b>
//                   Danh mục
//                   <LuMenu size={25} className="ms-2" />
//                 </b>
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item disabled className="text-black">
//                   Các sản phẩm
//                 </Dropdown.Item>
//                 <Dropdown.Divider />
//                 {categories &&
//                   categories.length > 0 &&
//                   categories.map((item, index) => {
//                     return (
//                       <Dropdown.Item
//                         className="text-capitalize"
//                         to={`/${item}`}
//                         as={Link}
//                         key={index}
//                       >
//                         {item}
//                       </Dropdown.Item>
//                     );
//                   })}
//               </Dropdown.Menu>
//             </Dropdown>
//             <Nav className="ms-auto">
//               <Nav.Link
//                 className="d-flex align-items-center column-gap-3 flex-lg-column"
//                 as={NavLink}
//                 to="/about"
//               >
//                 <FaMapMarkerAlt size={30} />
//                 <span>Cửa hàng gần bạn</span>
//               </Nav.Link>
//               <Nav.Link
//                 className="d-flex align-items-center column-gap-3 flex-lg-column"
//                 as={NavLink}
//                 to="/contact"
//               >
//                 <FiPhoneCall size={30} />
//                 <span>Gọi mua hàng</span>
//               </Nav.Link>
//               <Nav.Link
//                 className="d-flex align-items-center column-gap-3 flex-lg-column"
//                 as={NavLink}
//                 to="/cart"
//               >
//                 <BsCart3 size={30} />
//                 <span>Giỏ hàng</span>
//               </Nav.Link>
//               <Nav.Link
//                 className="d-flex align-items-center column-gap-3 flex-lg-column"
//                 as={NavLink}
//                 to="/login"
//               >
//                 <FaRegUserCircle size={30} />
//                 <span>Đăng nhập</span>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;
