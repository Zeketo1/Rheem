import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Gallery from "@/pages/Gallery";
import PrivateRoutes from "./PrivateRoutes";
import Cart from "@/pages/Cart";
import Contact from "@/pages/Contact";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  { path: "/gallery/:id", element: <PrivateRoutes /> },
  { path: "/cart", element: <Cart /> },
  { path: "/contact", element: <Contact /> },
]);
