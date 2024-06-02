import { useEffect, useState } from "react";
import { axiosGet } from "../services/axiosHelper";
import { Button, Dropdown } from "antd";

const Header = () => {
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
  return (
    <>
      <div>Header1</div>
      <div className="flexx">
        {brands &&
          brands.length > 0 &&
          brands.map((brand) => {
            return (
              <Dropdown key={brand.category}>
                <Button>{brand.category}</Button>
              </Dropdown>
            );
          })}
      </div>
    </>
  );
};

export default Header;
