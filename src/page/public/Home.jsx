import { useEffect, useState } from "react";
import { axiosGet } from "../../services/axiosHelper";
import Section from "../../components/Section";

const Home = () => {
  // call api categories
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axiosGet("categories");
        setCategories(res.data);
      } catch (error) {
        console.log("Tải dữ liệu categories bị lỗi", error);
      }
    };
    getCategories();
  }, []);
  return (
    <>
      {categories &&
        categories.length > 0 &&
        categories.map((item) => (
          <Section key={item.id} category={item.name} />
        ))}
    </>
  );
};
export default Home;
