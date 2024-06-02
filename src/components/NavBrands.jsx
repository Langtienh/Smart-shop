import { useEffect, useState } from "react";
import { axiosGet } from "../services/axiosHelper";
import { Button } from "antd";
import { Link } from "react-router-dom";
const NavBrands = (props) => {
  const category = props.category;
  const [brands, setBrands] = useState([]);
  // call api
  useEffect(() => {
    const getBrands = async () => {
      try {
        const res = await axiosGet(`brands?category=${category}`);
        const data = res.data;
        setBrands(data[0].brands);
      } catch (error) {
        console.log("Tải brands thất bại", error);
      }
    };
    getBrands();
  }, [category]);
  return (
    <>
      <h2 className="font-bold text-3xl capitalize pb-3">
        {category} bán chạy
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex flex-wrap items-center gap-3">
          {/* <div> */}
          {brands &&
            brands.length > 0 &&
            brands.map((item) => <Button>{item}</Button>)}
          {/* </div> */}
        </div>
        <div>
          <Button danger>
            <Link to={`/category/${category}`}>All</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NavBrands;
