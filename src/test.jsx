import React from "react";
import { Dropdown, Menu, Button } from "antd";
import { Link } from "react-router-dom";

const Test = () => {
  const menuItems = [
    { key: "1", label: "Home", to: "/" },
    { key: "2", label: "About", to: "/about" },
    { key: "3", label: "Contact", to: "/contact" },
  ];

  const menu = (
    <Menu>
      {menuItems.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.to}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown.Button overlay={menu} placement="bottom">
      Menu
    </Dropdown.Button>
  );
};

export default Test;
