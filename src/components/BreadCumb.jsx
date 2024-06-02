import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";

const BreadcrumbComponent = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumb>
      <Breadcrumb.Item className="font-bold">
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      {pathnames &&
        pathnames.map((item, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <Breadcrumb.Item
              key={item}
              className="capitalize font-bold hover:text-orange-500"
              path={routeTo}
            >
              <Link to={routeTo}>{item}</Link>
            </Breadcrumb.Item>
          );
        })}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
