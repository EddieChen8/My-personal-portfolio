import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

// const App = () => {
//   let routes = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "login", element: <Login /> },
//     // ...
//   ]);
//   return routes;
// };

// export default App;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
