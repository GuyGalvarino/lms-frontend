import { useState } from "react";
import { loginRequest } from "../../services/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  loginRequest(email, password);

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");
    const res = await loginRequest(email, password);
    console.log(res.data);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
