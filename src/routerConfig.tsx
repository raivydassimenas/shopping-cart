import Home from "./pages/Home.tsx";
import Shop from "./pages/Shop.tsx";

const routerConfig = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/shop",
        element: <Shop/>
    }]

export default routerConfig;