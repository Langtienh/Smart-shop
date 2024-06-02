import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="/">Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/about">About</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/contact">Contact</Link>
    </Menu.Item>
  </Menu>
);

const Test = () => {
  return (
    <Dropdown overlay={menu}>
      <Button>Menu</Button>
    </Dropdown>
  );
};

export default Test;
