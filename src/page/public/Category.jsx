import { Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="min-h-96">
      <Outlet />
    </div>
  );
};

export default Category;
