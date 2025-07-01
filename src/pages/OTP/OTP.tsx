import React, { useState } from "react";
import OtpInput from "react-otp-input";

export default function OTPBox() {
  const [otp, setOtp] = useState("");

  return (
    <div className="flex justify-center mt-10">
        otp
      {/* <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        separator={<span className="mx-2">-</span>}
        inputStyle={{
          width: "3rem",
          height: "3rem",
          fontSize: "1.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          textAlign: "center",
        }}
        focusStyle={{
          border: "2px solid #007bff",
          outline: "none",
        }}
      /> */}
    </div>
  );
}
