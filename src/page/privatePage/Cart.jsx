import { Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import GoBack from "../../components/Goback";
import EmptyCart from "../../components/EmpytiCart";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import {
  subProductToCart,
  addProductToCart,
  deleteProductToCart,
  empytiCart,
  createInvoice,
} from "../../redux/action/action";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";

const Cart = () => {
  // lấy dữ liệu cart { total: tổng số sản phẩm, data: [{dữ liệu product},..]}
  const cart = useSelector((state) => state.cart);
  const total = cart.total;
  const data = cart.data;
  // console.log(data);

  // xử lý checkbox
  // chức năng checkbox nhiều
  const [initCheck, setInitCheck] = useState([]);
  const [checkFull, setCheckFull] = useState([]);
  const [listCheck, setListCheck] = useState([]);
  useEffect(() => {
    setInitCheck(data.map((_) => false));
    setCheckFull(data.map((_) => true));
    setListCheck(data.map((_) => false));
  }, [data]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [selected, setSelected] = useState(false);
  // listcheck thay đổi => đặt lại các trạng thái
  useEffect(() => {
    let counter = 0;
    listCheck.forEach((item) => {
      counter = item ? counter + 1 : counter;
    });
    setSelected(counter !== 0);
    setIndeterminate(counter < listCheck.length && counter > 0);
    setCheckAll(counter === listCheck.length);
  }, [listCheck]);
  const changeOne = (e, index) => {
    let checked = e.target.checked;
    // nhất định phải giải listCheck ra, thay đổi listCheck[index] không set lại status
    let newListCheck = [...listCheck];
    newListCheck[index] = checked;
    setListCheck(newListCheck);
  };
  const changeAll = () => {
    setListCheck(checkAll ? initCheck : checkFull);
  };
  // kết thúc xử lý checkbox

  // tính tổng tiền các sản phẩm được hàng
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let sum = 0;
    listCheck.forEach((item, index) => {
      if (item && data && data[index]) {
        sum += data[index].priceShow * data[index].quantity;
      }
    });
    setTotalPrice(sum);
    // chưa biết lỗi cảnh báo gì
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listCheck]);

  // xử lý thêm sửa xóa product_in_cart
  const dispatch = useDispatch();
  const handleAddQuantyti = (id) => {
    const product = data.find((item) => item.id === id);
    dispatch(addProductToCart(product));
  };
  const handleSubQuantyti = (id) => dispatch(subProductToCart(id));
  const handleDeleteProduct = (id) => dispatch(deleteProductToCart(id));
  const handleEmptyCart = () => dispatch(empytiCart());

  // Tạo thanh toán
  const navigate = useNavigate();
  const handleCreateInvoi = () => {
    dispatch(createInvoice(data, listCheck));
    navigate("/invoice");
  };
  return (
    <>
      <ScrollToTop />
      <div className="bg-[#f4f6f8]">
        <div className="px-[10px] max-w-[600px] mx-auto min-h-screen">
          <div className="flex items-center border-b-2 pb-3">
            <div>
              <GoBack />
            </div>
            <h2 className="font-bold text-xl text-center flex-1">
              Giỏ hàng của bạn
            </h2>
          </div>
          {total === 0 ? (
            <EmptyCart />
          ) : (
            <div>
              <div className="flex justify-between min-h-7">
                <Checkbox
                  onChange={changeAll}
                  indeterminate={indeterminate}
                  checked={checkAll}
                >
                  {!checkAll ? "Chọn tất cả" : "Xóa lựa chon"}
                </Checkbox>
                {selected && checkAll && (
                  <Button
                    onClick={handleEmptyCart}
                    type="text"
                    className="text-black font-bold opacity-30"
                  >
                    Làm trống giỏ hàng
                  </Button>
                )}
              </div>
              <div className="flex flex-col gap-7 pb-[120px]">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="p-[10px] border rounded-lg bg-white"
                    >
                      <Checkbox
                        checked={listCheck[index]}
                        onChange={(e) => changeOne(e, index)}
                        key={item.id}
                      ></Checkbox>
                      <div className="flex">
                        <div className="h-[100px] w-[100px]">
                          <img src={item.img_url} alt="" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between py-[10px]">
                            <h2 className="max-w-[300px] font-semibold">
                              {item.name}
                            </h2>
                            <Button
                              onClick={() => handleDeleteProduct(item.id)}
                              danger
                              size="small"
                            >
                              <MdDelete size={20} />
                            </Button>
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
                            <div className="flex">
                              <Button
                                onClick={() => handleAddQuantyti(item.id)}
                                size="small"
                              >
                                +
                              </Button>
                              <Button size="small" type="text">
                                {item.quantity}
                              </Button>
                              <Button
                                onClick={() => handleSubQuantyti(item.id)}
                                size="small"
                              >
                                -
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="p-[10px] border rounded-lg bg-white shadow-lg flex justify-between">
                  <div className="flex flex-col">
                    <p>Tạm tính</p>
                    <p className="text-red-500 font-bold">
                      {totalPrice && totalPrice.toLocaleString("vi-VN")}đ
                    </p>
                  </div>
                  <div>
                    <Button
                      type="primary"
                      size="large"
                      danger
                      disabled={!selected}
                      onClick={handleCreateInvoi}
                    >
                      Thanh toán
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
