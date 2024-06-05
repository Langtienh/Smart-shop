const initialState = {
  products: [],
  user: {
    name: "Lăng Trọng Tiến",
    phone: "0349174556",
    mail: "langtienk4@gmail.com",
    is_vip: true,
  },
};

const invoiceReducer = (state = initialState, action) => {
  const user = state.user;
  switch (action.type) {
    case "createInvoice":
      const products = action.data.filter(
        (_, index) => action.chooseList[index]
      );
      return { products, user };
    // return state;
    default:
      return state;
  }
};

export default invoiceReducer;
