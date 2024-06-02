const initialState = [
  {
    id: 131,
    quantity: 1,
  },
  {
    id: 184,
    quantity: 1,
  },
  {
    id: 241,
    quantity: 1,
  },
  {
    id: 273,
    quantity: 1,
  },
  {
    id: 304,
    quantity: 2,
  },
];

const crudCartReducer = (state = initialState, action) => {
  let nState = state;
  let index = -1;
  switch (action.type) {
    case "addProductToCart":
      index = nState.findIndex((item) => {
        return item.id === action.id;
      });
      if (index === -1) nState.push({ id: action.id, quantity: 1 });
      else nState[index].quantity = nState[index].quantity + 1;
      return nState;
    case "subProductToCart":
      index = nState.findIndex((item) => {
        return item.id === action.id;
      });
      if (nState[index].quantity === 1)
        return nState.filter((item) => {
          return item.id !== action.id;
        });
      nState[index].quantity = nState[index].quantity - 1;
      return nState;
    case "deleteProductToCart":
      return nState.filter((item) => {
        return item.id !== action.id;
      });
    case "empytiCart":
      return [];
    default:
      return state;
  }
};

export default crudCartReducer;

//test logic
// const res = crudCartReducer(initialState, { type: "deleteAll", id: 200 });
// console.log(res);
