import "./App.scss";
import GetRoutes from "./config/routes";
import { RouterProvider } from "react-router";
import router from "./config/routes";
function App() {
  return (
    <RouterProvider router={router}>
      <GetRoutes />
    </RouterProvider>
  );
}

export default App;
