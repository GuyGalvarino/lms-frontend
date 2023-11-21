import { useState } from "react";
import { verifySignIn } from "../../services/signin";
import svg from "../../assets/react.svg";
const Otp = () => {
  const [otp, setOtp] = useState("");
  const updateOtp = (e) => {
    let allDigits = true;
    for (let i = 0; i < e.target.value.length; ++i) {
      if (e.target.value[i] < "0" || e.target.value[i] > "9") {
        allDigits = false;
        break;
      }
    }
    if (e.target.value.length > 6 || !allDigits) {
      setOtp(otp);
    } else {
      setOtp(e.target.value);
    }
  };
  const submitForm = async (e) => {
    e.preventDefault();
    const res = await verifySignIn(otp);
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" value={otp} onChange={updateOtp} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Otp;
