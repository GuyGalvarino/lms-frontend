import axios from "axios";

let userEmail;

export const requestOtp = async (name, email, password) => {
  try {
    const res = await axios.post("http://localhost:8080/users/signin", {
      name,
      email,
      password,
    });
    userEmail = email;
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const verifySignIn = async (otp) => {
  const res = await axios.get(
    `http://localhost:8080/users/signin/verify/${userEmail}`,
    {
      otp,
    }
  );
  return res.data
};
