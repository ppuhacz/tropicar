import "./App.scss";
import { RouterProvider } from "react-router";
import router from "./config/routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
