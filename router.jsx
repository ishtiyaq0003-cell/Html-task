import { createBrowserRouter } from "react-router-dom";
import Landing    from "./pages/Landing";
import Login      from "./pages/Login";
import Register   from "./pages/Register";
import Layout     from "./components/Layout";
import Home       from "./pages/Home";
import Menu       from "./pages/Menu";
import ItemDetail from "./pages/ItemDetail";
import Cart       from "./pages/Cart";
import Checkout   from "./pages/Checkout";
import Orders     from "./pages/Orders";
import Offers     from "./pages/Offers";
import Profile    from "./pages/Profile";

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/app",
    element: <Layout />,
    children: [
      { path: "home",       element: <Home />       },
      { path: "menu",       element: <Menu />       },
      { path: "menu/:itemId", element: <ItemDetail /> },
      { path: "cart",       element: <Cart />       },
      { path: "checkout",   element: <Checkout />   },
      { path: "orders",     element: <Orders />     },
      { path: "offers",     element: <Offers />     },
      { path: "profile",    element: <Profile />    },
    ],
  },
]);

export default router;
