const initialState = {
  total: 0,
  data: [],
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
