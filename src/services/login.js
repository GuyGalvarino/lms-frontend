import axios from "axios";

export const loginRequest = async (email, password) => {
  const res = await axios.post("http://localhost:8080/users/login", {
    email,
    password,
  });
  return res.data;
};
