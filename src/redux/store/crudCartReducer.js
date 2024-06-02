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
  let nState = state;
  let index = -1;
  switch (action.type) {
    case "addProductToCart":
      index = nState.data.findIndex((item) => {
        return item.id === action.id;
      });
      if (index === -1)
        nState.data.push({
          id: action.id,
          quantity: 1,
          name: action.name,
          img_url: action.img_url,
          priceShow: action.priceShow,
          priceThrought: action.priceThrought,
        });
      else nState.data[index].quantity = nState.data[index].quantity + 1;
      return { data: nState.data, total: nState.total + 1 };
    case "subProductToCart":
      index = nState.data.findIndex((item) => {
        return item.id === action.id;
      });
      if (nState.data[index].quantity === 1)
        return nState.data.filter((item) => {
          return item.id !== action.id;
        });
      nState.data[index].quantity = nState.data[index].quantity - 1;
      return { data: nState.data, total: nState.total - 1 };
    case "deleteProductToCart":
      index = nState.data.findIndex((item) => {
        return item.id === action.id;
      });
      let ntotal = nState.data[index].quantity;
      return {
        data: nState.filter((item) => {
          return item.id !== action.id;
        }),
        total: nState.total - ntotal,
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
