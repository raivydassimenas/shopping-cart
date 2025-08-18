import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";
import Cart from "./pages/Cart.tsx";

const routerConfig = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/shop",
    element: <Shop />
  },
  {
    path: "/cart",
    element: <Cart />
  }];

export default routerConfig;