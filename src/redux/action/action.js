export const addProductToCart = (id) => {
  return {
    type: "addProductToCart",
    id,
  };
};
export const subProductToCart = (id) => {
  return {
    type: "subProductToCart",
    id,
  };
};
export const deleteProductToCart = (id) => {
  return {
    type: "deleteProductToCart",
    id,
  };
};
export const empytiCart = () => {
  return {
    type: "empytiCart",
  };
};
