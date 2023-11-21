import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [signedIn, setSignedIn] = useState(false);
  return (
    <div>
      HOME
      <button>
        <Link to="/signin">Register</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </div>
  );
};

export default Home;
