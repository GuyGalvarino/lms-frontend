import Form from "./Form";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <div>
        <a href="" onClick={() => navigate(-1)}>Back</a>
      </div>
      <Form />
    </div>
  );
};

export default Signin;
