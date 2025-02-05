import { Menu, Dropdown, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="1">
        <h2>Danh mục sản phẩm</h2>
        <ul>
            <li>Đồ Ăn Vặt</li>
            <li>Bánh Ngọt</li>
            <li>Combo 1 Người</li>
            <li>Combo 2 Người</li>
            <li>Combo Nhóm 4</li>
            <li>Humberger</li>
            <li>Cơm Gà + Sốt</li>
            <li>Đồ Uống</li>
        </ul>
    </Menu.Item>
    <Menu.Item key="2">
        <h2>ONALA </h2>
        <ul>
            <li>Giới thiệu</li>
            <li>Tin tức </li>
            <li>Tuyển dụng </li>
            <li>Đặt tiệc sinh nhật </li>
        </ul>
    </Menu.Item>
    <Menu.Item key="3">
        <h2>Liên Hệ & Chính Sách </h2>
        <ul>
            <li>Theo Dõi Đơn Hàng </li>
            <li>Liên Hệ ONALA </li>
            <li>Hệ Thống </li>
            <li>Khiếu Nại </li>
            <li>Chính sách và Quy Định</li>
            <li>Chính sách hoạt động </li>
        </ul>
    </Menu.Item>
  </Menu>
);

function MenuDropdown() {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Button icon={<MenuOutlined />}></Button>
    </Dropdown>
  );
}

export default MenuDropdown; 
