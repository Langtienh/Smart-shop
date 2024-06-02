import { FaFacebook, FaGithub, FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const categories = [
    "smartphone",
    "laptop",
    "tablet",
    "tivi",
    "screen",
    "headphone",
    "watch",
  ];
  const technology = [
    "React",
    "Redux",
    "Ant design",
    "tailwind css",
    "node",
    "json-server",
    "Postgre sql",
  ];
  return (
    <div className=" bg-[#d70018] text-white mt-8">
      <div className="class flex justify-between px-4 py-3">
        <h2 className="font-bold text-lg">Shop bán đồ công nghệ</h2>
        <div>
          <h2 className="font-bold">Các loại sản phẩm</h2>
          <ul className="list-disc ps-5">
            {categories &&
              categories.length > 0 &&
              categories.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold">Công nghệ sử dụng</h2>
          <ul className="list-disc ps-5">
            {technology &&
              technology.length > 0 &&
              technology.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
        <div className="">
          <h2 className="font-bold">Liên hệ</h2>
          <ul>
            <li className="flex items-center gap-2 mb-1">
              <FaPhoneAlt />
              Phone: <button>0349174556</button>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <IoIosMail />
              email: <button>langtienk4@gmail.com</button>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <FaGithub />
              Github: <Link to="https://github.com/Langtienh">Langtienh</Link>
            </li>
            <li className="flex items-center gap-2 mb-1">
              <FaFacebook />
              Facebook:{" "}
              <Link to="https://www.facebook.com/lang.chien1704">
                Lăng Tiến
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center py-2 border-t">
        Copyright © Lăng Tiến clone CellphoneS
      </p>
    </div>
  );
};

export default Footer;
