import Homepage from "./components/Homepage/Homepage.jsx";
import Shoppage from "./components/Shoppage/Shoppage.jsx";
import Cart from "./components/Shoppage/Cartpage/Cart.jsx";
import App from "./App.jsx";

const routes = [
  {
    path: "/",
    element: <App initialCartItems={[]} />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "shop",
        element: <Shoppage />,
        children: [
          {
            path: "cart",
            element: <Cart />,
          },
        ],
      },
    ],
  },
];

export default routes;
