import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = ({ signedInUser, setSignedInUser }) => {
  return (
    <div>
      <h2>Home</h2>
      {signedInUser ? (
        <div>
          <div>{signedInUser.name}</div>
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
