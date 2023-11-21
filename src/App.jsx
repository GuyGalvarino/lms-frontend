import Home from "./pages/Home/Home";
import Layout from "./pages/Layout"
import Signin from "./pages/Signin/Signin";
import Otp from "./pages/Signin/Otp";
import Login from "./pages/Login/Login";
import { getUsers } from "./services/user";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  getUsers().then(res => console.log(res));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<Otp />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
