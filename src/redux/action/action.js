export const addProductToCart = (item) => {
  return {
    type: "addProductToCart",
    id: item.id,
    name: item.name,
    img_url: item.img_url,
    priceShow: item.priceShow,
    priceThrought: item.priceThrought,
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
