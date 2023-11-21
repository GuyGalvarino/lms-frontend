import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = ({ signedInUser, setSignedInUser }) => {
  const logout = () => {
    window.localStorage.removeItem("signedInUser");
    setSignedInUser(null);
  };
  return (
    <div>
      HOME
      {signedInUser ? (
        <div>
          <div>{signedInUser.name}</div>
          <div>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      ) : (
        <div>
          <button>
            <Link to="/signin">Register</Link>
          </button>
          <button>
            <Link to="/login">Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
