import { useState } from "react";
import Login from "../Login/Login";
import Signin from "../Signin/Signin";
const Home = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <>
      <Signin />
    </>
  );
};

export default Home;
