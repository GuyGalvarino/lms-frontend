import Home from "./pages/Home/Home";
import Layout from "./pages/Layout";
import Signin from "./pages/Signin/Signin";
import Otp from "./pages/Signin/Otp";
import Login from "./pages/Login/Login";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [signedInUser, setSignedInUser] = useState(null);
  useEffect(() => {
    const res = window.localStorage.getItem("signedInUser");
    if (res) {
      setSignedInUser(JSON.parse(res));
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                signedInUser={signedInUser}
                setSignedInUser={setSignedInUser}
              />
            }
          />
          <Route
            path="signin"
            element={<Signin signedInUser={signedInUser} />}
          />
          <Route
            path="login"
            element={
              <Login
                signedInUser={signedInUser}
                setSignedInUser={setSignedInUser}
              />
            }
          />
          <Route
            path="otp"
            element={
              <Otp
                signedInUser={signedInUser}
                setSignedInUser={setSignedInUser}
              />
            }
          />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
