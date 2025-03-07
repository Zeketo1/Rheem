import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./routes/AppRouter";
import { CartContextProvider } from "./components/context/CartContextProvider";

function App() {
  return (
    <>
      <CartContextProvider>
        <RouterProvider router={AppRouter} />
      </CartContextProvider>
    </>
  );
}

export default App;
