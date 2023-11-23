import { useEffect } from "react";
import Form from "./Form";
import { useNavigate, Link } from "react-router-dom";

const Signin = ({ signedInUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (signedInUser) {
      navigate("/");
    }
  }, [signedInUser]);

  return (
    <div>
      <div>
        <Link to="/">Back</Link>
      </div>
      <Form />
    </div>
  );
};

export default Signin;
