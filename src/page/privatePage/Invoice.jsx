import { Badge, Button, Checkbox, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { empytiCart } from "../../redux/action/action";
import Swal from "sweetalert2";
import { axiosGet } from "../../services/axiosHelper";
import ScrollToTop from "../../components/ScrollToTop";

const Invoice = () => {
  // lấy dữ liệu từ redux
  const invoice = useSelector((state) => state.invoice);
  const products = invoice.products;
  const user = invoice.user;
  const [totalPrice, setTotalPrice] = useState(0);

  // lấy dữ liệu tỉnh thành,..
  const [tinh, setTinh] = useState([]);
  const [huyen, setHuyen] = useState([]);
  const [xa, setXa] = useState([]);
  const [tinhCode, setTinhCode] = useState();
  const [huyenCode, setHuyenCode] = useState();
  // lấy dữ liệu tỉnh
  useEffect(() => {
    const getTinh = async () => {
      try {
        const res = await axiosGet("tinh");
        if (res.data) {
          const new_data = res.data.map((item) => ({
            value: item.code,
            label: item.name,
          }));
          setTinh(new_data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTinh();
  }, []);
  // đặt lại dữ liệu huyện khi tỉnh thay đổi
  useEffect(() => {
    const getHuyen = async () => {
      try {
        const res = await axiosGet(`huyen?parent_code=${tinhCode}`);
        if (res.data) {
          const new_data = res.data.map((item) => ({
            value: item.code,
            label: item.name,
          }));
          setHuyen(new_data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getHuyen();
  }, [tinhCode]);
  // đặt lại dữ liệu xa khi huyen thay đổi
  useEffect(() => {
    const getXa = async () => {
      try {
        const res = await axiosGet(`xa?parent_code=${huyenCode}`);
        if (res.data) {
          const new_data = res.data.map((item) => ({
            value: item.name,
            label: item.name,
          }));
          setXa(new_data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getXa();
  }, [huyenCode]);
  console.log(tinhCode, huyenCode, xa);
  // tính tổng tiền
  useEffect(() => {
    let sum = 0;
    products &&
      products.length > 0 &&
      products.forEach((item) => {
        sum += item.priceShow * item.quantity;
      });
    setTotalPrice(sum);
  }, [products]);
  // done
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDone = () => {
    Swal.fire({
      title: "Thanh toán thành công",
      text: "Chuyển về trang chủ sau 3s",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
    });
    setTimeout(() => {
      dispatch(empytiCart());
      navigate("/");
    }, 3000);
  };
  // lấy địa chỉ
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <>
      <ScrollToTop />
      <div className="max-w-[600px] mx-auto">
        <h2 className="font-bold text-red-500 text-center text-3xl py-3">
          Xác nhận thanh toán
        </h2>
        <div className="flex flex-col gap-7 pb-[120px]">
          {products &&
            products.length > 0 &&
            products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-[10px] border rounded-lg bg-white"
                >
                  <div className="flex">
                    <div className="h-[100px] w-[100px]">
                      <img src={item.img_url} alt="" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between py-[10px]">
                        <h2 className="max-w-[300px] font-semibold">
                          {item.name}
                        </h2>
                      </div>
                      <div className="flex justify-between py-[10px]">
                        <div className="flex items-baseline gap-2">
                          <p className="font-bold text-red-500">
                            {item.priceShow &&
                              item.priceShow.toLocaleString("vi-VN")}
                            đ
                          </p>
                          <p className="text-sm font-bold text-gray-500 line-through">
                            {item.priceThrought &&
                              item.priceThrought.toLocaleString("vi-VN")}
                            đ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* Info user */}
          <div>
            <h2 className="font-bold text-xl">Thông tin khách hàng</h2>
            <Badge.Ribbon text="Vip" color="red">
              <div className="p-[10px] pe-10 border rounded-lg bg-white shadow-lg">
                <div className="flex justify-between">
                  <div>
                    <p>{user && user.name}</p>
                  </div>
                  <p className="text-sm opacity-80">{user && user.phone}</p>
                </div>
                <div>
                  <label htmlFor="ip" className="font-bold text-gray-500">
                    Email
                  </label>
                  <input
                    className="w-full outline-none py-1 border-b focus:border-slate-700"
                    type="text"
                    id="ip"
                    placeholder="Your email"
                    defaultValue={user && user.mail}
                  />
                  <p className="text-[11px] text-gray-500 pb-3">
                    (*) Hóa đơn VAT sẽ được gửi qua email này
                  </p>
                </div>
                <div className="pt-3">
                  <Checkbox>
                    Nhận email thông báo và ưu đãi từ Smart-Shop
                  </Checkbox>
                </div>
              </div>
            </Badge.Ribbon>
          </div>
          {/* Form address */}
          <div>
            <h2 className="font-bold text-xl">Thông tin nhận hàng</h2>
            <div className="p-[10px] border rounded-lg bg-white shadow-lg">
              <Form name="address" layout="vertical" onFinish={onFinish}>
                <div className="grid grid-cols-2 gap-x-8">
                  <Form.Item
                    label="Tên người nhận"
                    name="username"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input defaultValue={user && user.name} />
                  </Form.Item>
                  <Form.Item
                    label="SĐT người nhận"
                    name="phone"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input defaultValue={user && user.phone} />
                  </Form.Item>
                  <Form.Item
                    label="TỈNH / THÀNH PHỐ"
                    name="tinh"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      options={tinh}
                      onChange={(value) => setTinhCode(value)}
                      placeholder="Chọn tỉnh/thành phố"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Quận/Huyện"
                    name="huyen"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      options={huyen}
                      onChange={(value) => setHuyenCode(value)}
                      placeholder="Chọn Quận/Huyện"
                    />
                  </Form.Item>
                  <Form.Item
                    label="Xã/Phường"
                    name="xa"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Select
                      options={xa}
                      onChange={(value) => setTinhCode(value)}
                      placeholder="Chọn Xã/Phường"
                    />
                  </Form.Item>
                  <Form.Item label="Số nhà, tầng, đường" name="address">
                    <Input />
                  </Form.Item>
                </div>
                <Form.Item label="Ghi chú thêm nếu có" name="note">
                  <Input />
                </Form.Item>
                <Form.Item>
                  <div className="flex">
                    <Button
                      className="ms-auto"
                      type="primary"
                      htmlType="submit"
                    >
                      Cập nhật
                    </Button>
                  </div>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="p-[10px] border rounded-lg bg-white shadow-lg flex justify-between">
            <div className="flex flex-col">
              <p>Tạm tính</p>
              <p className="text-red-500 font-bold">
                {totalPrice && totalPrice.toLocaleString("vi-VN")}đ
              </p>
            </div>
            <div>
              <Button onClick={handleDone} type="primary" size="large" danger>
                Xác nhận thanh toán
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
