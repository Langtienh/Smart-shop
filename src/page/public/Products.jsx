import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosGet } from "../../services/axiosHelper";
import ProductList from "../../components/ProductList";
import NavBrands from "../../components/NavBrands";
import { Pagination } from "antd";

const ProductsPage = () => {
  // nếu thay đổi trang => thay đổi category, brand
  const parmas = useParams();
  const brand = parmas.brand;
  const category = parmas.category;
  // get api
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axiosGet(`products?category=${category}`);
        setProducts(res.data);
      } catch (error) {
        console.log("get products error", error);
      }
    };
    getProducts();
  }, [category]);
  // tạo bộ lọc
  // lưu ý filter là một đối tượng ví dụ {attribute: "brand", value: samsung}
  // filters là một mảng các đối tượng
  const [filters, setFilters] = useState([]);
  // các bộ lọc khác khi người dùng chọn bộ lọc
  const handlerAddFilter = (filter) => {
    let newFilters = filters;
    newFilters = newFilters.filter(
      (item) => item.attribute !== filter.attribute
    );
    newFilters = [...newFilters, filter];
    setFilters(newFilters);
  };
  const handlerDeleteFilter = (filter) => {
    setFilters((preState) =>
      preState.filter((item) => item.attribute !== filter.attribute)
    );
  };
  // thay đổi khi brand thay đổi
  useEffect(() => {
    if (brand) handlerAddFilter({ attribute: "brand", value: brand });
    else handlerDeleteFilter({ attribute: "brand" });
  }, [brand]);

  const [productsFilter, setProductsFilter] = useState([]);
  useEffect(() => {
    let newData = products;
    if (filters && filters.length > 0 && products && products.length > 0)
      filters.forEach((item) => {
        newData = newData.filter((data) => data[item.attribute] === item.value);
      });
    setProductsFilter(newData);
    setPageActive(1);
  }, [filters, products]);
  const [pageActive, setPageActive] = useState(1);
  const limitItem = 10;
  const handlePageChange = (page) => {
    setPageActive(page);
  };
  const displayProducts = productsFilter.slice(
    (pageActive - 1) * limitItem,
    pageActive * limitItem
  );
  return (
    <>
      <div className="mb-3">
        <NavBrands category={category} />
      </div>
      <ProductList products={displayProducts} />
      <div className="mt-4 text-center">
        <Pagination
          current={pageActive}
          pageSize={limitItem}
          total={productsFilter.length}
          onChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default ProductsPage;
