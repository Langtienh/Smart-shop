import { Button, Empty } from "antd";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <Empty
      className="py-20"
      image="https://cdn2.cellphones.com.vn/x,webp/media/cart/Cart-empty-v2.png"
      imageStyle={{
        maxWidth: 600,
        width: "100%",
        height: 200,
        display: "flex",
        justifyContent: "center",
      }}
      description={
        <span>
          Giỏ hàng của bạn đang trống <br /> Hãy chọn thêm sản phẩm để mua sắm
          nhé
        </span>
      }
    >
      <Link to="/">
        <Button type="primary" danger>
          Tiếp tục mua hàng
        </Button>
      </Link>
    </Empty>
  );
};

export default EmptyCart;
