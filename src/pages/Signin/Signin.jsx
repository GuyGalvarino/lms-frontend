import { useEffect } from "react";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

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
        <a href="" onClick={() => navigate(-1)}>
          Back
        </a>
      </div>
      <Form />
    </div>
  );
};

export default Signin;
