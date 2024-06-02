import { useEffect, useState } from "react";
import { axiosGet } from "../services/axiosHelper";
import { Badge, Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { GiSmartphone } from "react-icons/gi";
import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineLaptopMac, MdTabletAndroid } from "react-icons/md";
import { ImHeadphones } from "react-icons/im";
import { LuScreenShare } from "react-icons/lu";
import { CgAppleWatch } from "react-icons/cg";
import Search from "antd/es/transfer/search";
import { HiOutlineNewspaper } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import BreadcrumbComponent from "./BreadCumb";
import { useSelector } from "react-redux";

const Header = () => {
  // call api
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await axiosGet("brands");
        setBrands(res.data);
      } catch (error) {
        console.log("xảy ra lỗi khi getBrands", error);
      }
    };
    getBrands();
  }, []);
  // set menus, items
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    if (brands && brands.length > 0) {
      const data = brands.map((brand) => ({
        key: brand.category,
        items: [
          {
            key: `${brand.category}_all`,
            label: <Link to={`/category/${brand.category}`}>Xem tất cả</Link>,
          },
          ...brand.brands.map((item) => ({
            key: `${brand.category}_${item}`,
            label: (
              <Link to={`/category/${brand.category}/${item}`}>
                <span className="capitalize">{item}</span>
              </Link>
            ),
          })),
        ],
      }));
      setMenus(data);
    }
  }, [brands]);
  const icons = (category) => {
    switch (category) {
      case "smartphone":
        return <GiSmartphone />;
      case "laptop":
        return <MdOutlineLaptopMac />;
      case "tablet":
        return <MdTabletAndroid />;
      case "headphone":
        return <ImHeadphones />;
      case "watch":
        return <CgAppleWatch />;
      case "tivi":
        return <LuScreenShare />;
      case "screen":
        return <LuScreenShare />;
      default:
        return <AiOutlineProduct />;
    }
  };
  // hiển thị số hàng trong giỏ
  const quantityProducts = useSelector((state) => state.cart.total);
  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 bg-[#d70018] text-white">
        <h2 className="font-bold text-2xl">
          <Link to="/">Smart Shop</Link>
        </h2>
        <div>
          <Search
            placeholder="Bạn cần tìm gì ?"
            style={{
              width: "300px",
            }}
          />
        </div>
        <div className="flex gap-8">
          <Link to="/cart">
            <div className="flex flex-col items-center ">
              <Badge count={quantityProducts}>
                <IoCart className="font-bold text-white" size={24} />
              </Badge>
              <p className="text-sm">Giỏ hàng</p>
            </div>
          </Link>
          <div className="flex-col items-center hidden md:flex">
            <HiOutlineNewspaper className="font-bold" size={24} />
            <p className="text-sm">Thông tin hay</p>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <WiStars className="font-bold" size={24} />
            <p className="text-sm">Dịch vụ</p>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <FaRegUserCircle className="font-bold" size={24} />
            <p className="text-sm">Tài khoản</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-5 bg-black ">
        {menus &&
          menus.length > 0 &&
          menus.map((menu) => (
            <Dropdown
              menu={{ items: menu.items }}
              key={menu.key}
              placement="bottom"
            >
              <Button type="text">
                <div className="uppercase font-bold text-white flex items-center gap-2">
                  {icons(menu.key)}
                  <p className="hidden md:block">{menu.key}</p>
                </div>
              </Button>
            </Dropdown>
          ))}
      </div>
      <div className="px-2 md:px-6">
        <BreadcrumbComponent />
      </div>
    </>
  );
};

export default Header;
