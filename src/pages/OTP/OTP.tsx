import { PrimaryButton } from "@components/Buttons/CommonButtons";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import OtpInput from "react-otp-input";
import OtpImg from "@assets/images/otp.png";
import { useMutation, useQueryClient } from "react-query";
import { ApiVerifyOtp } from "../../Api/ApiVerifyOtp";
import toast from "react-hot-toast";
import { ApiResendCode } from "../../Api/ApiResendCode";
import { useNavigate } from "react-router-dom";

const OTP: React.FC = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [isLoading, setIsLoading] = useState(false);

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  useEffect(() => {
    if (timer <= 0) return; // Stop when timer reaches 50

    const id = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearTimeout(id); // Cleanup on re-render
  }, [timer]);

  const { mutateAsync: optMutation, isLoading: optLoading } = useMutation({
    mutationFn: (otp) => ApiVerifyOtp(otp),

    // onMutate: () => setLoadingId(currentId),
    onSuccess: async () => {
      toast.success("OTP Matched!");
      navigate("/reset-password");
    },
    onError: (error) => {
      console.error("OTP Not Matched:", error);
    },
  });

  const handleClick = () => {
    optMutation({ otp: otp });
  };

  const { mutateAsync: resendCodeMutation, isLoading: resendCodeLoading } =
    useMutation({
      mutationFn: (otp) => ApiResendCode(otp),

      // onMutate: () => setLoadingId(currentId),
      onSuccess: async () => {
        toast.success("OTP Sended Successfully!");
      },
      onError: (error) => {
        console.error("Error while sending OTP:", error);
      },
    });

  const handleResendCode = () => {
    resendCodeMutation();
  };

  return (
    <div className="flex  justify-center items-center py-8 ">
      <div className="p-8 rounded-xl  w-[400px]">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <img src={OtpImg} alt="" className="mx-auto w-[200px]" />
          </div>
        </div>

        <h2 className="text-center uber-move !text-[28px] !font-semibold mb-2">
          Account Verification
        </h2>
        <p className="text-center text-sm mb-5">Enter verify code below</p>

        <div className="mb-5 flex justify-center">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              width: "40px",
              height: "45px",
              margin: "0 5px",
              fontSize: "20px",
              borderRadius: "2px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
            renderInput={(props) => <input {...props} />}
          />
        </div>

        <PrimaryButton
          btnText={`${optLoading ? "Loading..." : `Verify Code In ${timer}s`}`}
          btnClass="w-full bg-[var(--primary-color)]  mb-5 text-white py-2 rounded-md  transition"
          onClick={handleClick}
          disabled={timer == 50 && true}
        />

        <PrimaryButton
          btnText="Resend Code"
          btnClass={`text-center text-sm text-[#000] mt-3 cursor-pointer  ${
            timer == 0 ? "hover:underline" : ""
          }`}
          onClick={handleResendCode}
          disabled={timer == 0 ? false : true}
        />
      </div>
    </div>
  );
};

export default OTP;
