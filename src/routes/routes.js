import App from "../App";
import Home from "../page/public/Home";
import Error404 from "../page/public/Error404";
import Test from "../Test";
import Category from "../page/public/Category";
import ProductsPage from "../page/public/Products";
import Cart from "../page/privatePage/Cart";
import Invoice from "../page/privatePage/Invoice";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "category",
        element: <Category />,
        children: [
          {
            index: true,
            element: <Error404 />,
          },
          {
            path: ":category",
            element: <ProductsPage />,
            children: [{ path: ":brand", element: <ProductsPage /> }],
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "invoice",
        element: <Invoice />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

export default routes;
