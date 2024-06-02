import App from "../App";
import Home from "../page/public/Home";
import Error404 from "../page/public/Error404";
import Test from "../Test";

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
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];

export default routes;
