import { Badge, Button, Card, message } from "antd";
import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/action/action";

function ProductList(props) {
  const data = props.products;
  const [products, setProducts] = useState([]);

  // lấy dữ liệu và fake loadding
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  useEffect(() => {
    // Giả loadding
    setTimeout(() => {
      setLoading(false);
    }, 500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);
  // xử lý thêm vào giỏ hàng
  const [loadingItem, setloadingItem] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const handleAddProduct = (index, item) => {
    dispatch(addProductToCart(item));
    setloadingItem((prevloadingItem) => {
      const newloadingItem = [...prevloadingItem];
      newloadingItem[index] = true;
      return newloadingItem;
    });
    setTimeout(() => {
      setloadingItem((prevloadingItem) => {
        const newloadingItem = [...prevloadingItem];
        newloadingItem[index] = false;
        return newloadingItem;
      });
      messageApi.open({
        type: "success",
        content: "Thêm vào giỏ hàng thành công",
        duration: 1,
      });
    }, 400);
  };

  return (
    <>
      {contextHolder}
      <div className=" max-w-screen-xl mx-auto px-2 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2">
        {products &&
          products.length > 0 &&
          products.map((item, i) => {
            return (
              <Badge.Ribbon
                text={`Giảm ${Math.floor(
                  (1 - item.priceShow / item.priceThrought) * 100
                )} %`}
                color="red"
              >
                {" "}
                <Card
                  bodyStyle={{ padding: 0 }}
                  loading={loading}
                  hoverable
                  className="shadow-md p-[10px]"
                  key={i}
                  cover={
                    <div className="h-40">
                      <img
                        className="object-cover h-full mx-auto"
                        alt={item.name}
                        src={item.img_url}
                      />
                    </div>
                  }
                >
                  <div className="flex flex-col gap-1">
                    <div className="min-h-16 font-bold">{item.name}</div>
                    <div className="flex gap-1 items-baseline">
                      <p className="text-[16px] font-bold text-red-600">
                        {item.priceShow &&
                          item.priceShow.toLocaleString("vi-VN")}
                        đ
                      </p>
                      <p className="text-gray-500 font-bold line-through">
                        {item.priceThrought &&
                          item.priceThrought.toLocaleString("vi-VN")}
                        đ
                      </p>
                    </div>
                    <div className="min-h-[21px]">
                      {
                        <p>
                          <span className="text-[11px]">
                            Smember giảm thêm đến:{" "}
                          </span>
                          <span className="text-red-500 font-bold">
                            {(500000.0).toLocaleString("vi-VN")}đ
                          </span>
                        </p>
                      }
                    </div>
                    <div className="min-h-12">
                      {item.coupon && (
                        <p className="text-[12px] line-clamp-2 p-1 rounded border-[1px] bg-gray-100">
                          {item.coupon}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto pt-2 flex justify-between items-center">
                      <p>
                        <span className="font-bold text-red-500">
                          {item.purchases &&
                            item.purchases.toLocaleString("vi-VN")}
                        </span>{" "}
                        lượt xem
                      </p>
                      <Button
                        loading={loadingItem[i]}
                        onClick={() => {
                          handleAddProduct(i, item);
                        }}
                        size="large"
                        icon={<FaCartPlus />}
                        danger
                      />
                    </div>
                  </div>
                </Card>
              </Badge.Ribbon>
            );
          })}
      </div>
    </>
  );
}

export default ProductList;
