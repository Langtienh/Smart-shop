const initialState = {
  total: 5,
  data: [
    {
      id: "48",
      quantity: 2,
      name: "Xiaomi Redmi Note 12 Pro 5G",
      img_url:
        "https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-redmi-note-12-pro-5g.png",
      priceShow: 7390000,
      priceThrought: 9490000,
    },
    {
      id: "130",
      quantity: 1,
      name: "Laptop Lenovo Ideapad Slim 5 14IMH9 83DA0020VN",
      img_url:
        "https://cellphones.com.vn/media/catalog/product/l/a/laptop-lenovo-ideapad-slim-5-14imh9-83da0020vn-thumbnails.png",
      priceShow: 26190000,
      priceThrought: 27990000,
    },
    {
      id: "316",
      quantity: 1,
      name: "Tai nghe Bluetooth True Wireless SoundPEATS Capsule 3 Pro",
      img_url:
        "https://cellphones.com.vn/media/catalog/product/g/r/group_116_2.png",
      priceShow: 940000,
      priceThrought: 1690000,
    },
    {
      id: "55",
      quantity: 1,
      name: "OPPO Reno11 F 5G 8GB 256GB",
      img_url:
        "https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-oppo-reno-11-f-2.png",
      priceShow: 8490000,
      priceThrought: 8990000,
    },
  ],
};

const crudCartReducer = (state = initialState, action) => {
  let state_new = { ...state };
  let index = -1;
  switch (action.type) {
    case "addProductToCart":
      index = state_new.data.findIndex((item) => {
        return item.id === action.id;
      });
      if (index === -1)
        state_new.data.push({
          id: action.id,
          quantity: 1,
          name: action.name,
          img_url: action.img_url,
          priceShow: action.priceShow,
          priceThrought: action.priceThrought,
        });
      else state_new.data[index].quantity = state_new.data[index].quantity + 1;
      // else console.log("run add");
      return { data: state_new.data, total: state_new.total + 1 };
    case "subProductToCart":
      index = state_new.data.findIndex((item) => {
        return item.id === action.id;
      });
      if (state_new.data[index].quantity === 1)
        return {
          data: state_new.data.filter((item) => {
            return item.id !== action.id;
          }),
          total: state_new.total - 1,
        };
      state_new.data[index].quantity = state_new.data[index].quantity - 1;
      return { data: state_new.data, total: state_new.total - 1 };
    case "deleteProductToCart":
      index = state_new.data.findIndex((item) => {
        return item.id === action.id;
      });
      let ntotal = state_new.data[index].quantity;
      return {
        data: state_new.data.filter((item) => {
          return item.id !== action.id;
        }),
        total: state_new.total - ntotal,
      };
    case "empytiCart":
      return { data: [], total: 0 };
    default:
      return state;
  }
};

export default crudCartReducer;

//test logic
// const res = crudCartReducer(initialState, { type: "deleteAll", id: 200 });
// console.log(res);
