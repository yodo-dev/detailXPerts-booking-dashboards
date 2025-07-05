import React, { useState } from "react";
import { FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
// import CommonInput from "@components/inputs/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import CommonInput from "@pages/Admin/Login/Components/CommonInput";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { ApiResetPassword } from "../../../Api/ApiResetPassword";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate("");
  // const;

  const validatePassword = (password) => ({
    length: password.length >= 8,
    upper: /[A-Z]/.test(password),
    lower: /[a-z]/.test(password),
    digit: /\d/.test(password),
    special: /[@$!%*?&#]/.test(password),
  });

  const checks = validatePassword(newPassword);
  const allValid = Object.values(checks).every(Boolean);
  const isOldPasswordCorrect = oldPassword.length >= 6;

  const queryClient = useQueryClient();

  const { mutateAsync: resetMutation,isLoading } = useMutation({
    mutationFn: (password) => ApiResetPassword(password),

    onSuccess: async () => {
      navigate("/login");

      console.log("Password reset successfully");
    },
    onError: (error) => {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password.");
    },
  });

  const handleForm = async (e) => {
    if (e.ConfirmNewPassword !== e.newPassword) {
      toast.error("Passwords do not match");
      return;
    }
    await resetMutation({ password: e.newPassword });
  };

  return (
    <div className="min-h-screen uber-move flex items-center justify-center ">
      <div className=" p-8 rounded-md w-full max-w-lg">
        <h3 className="text-2xl uber-move font-semibold mb-6 text-gray-800">
          Change Password
        </h3>

        <form onSubmit={handleSubmit(handleForm)} className="space-y-6">
          {/* New Password */}
          <div>
            <div className="relative">
              <CommonInput
                type={showNew ? "text" : "password"}
                label="New Password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                // eyeIcon={true}
                register={register}
                registerName="newPassword"
                inputClass={`pr-10 ${
                  newPassword
                    ? allValid
                      ? "border-green-500 border"
                      : "border-red-500 border"
                    : "border-gray-300 border"
                }`}
              />
            </div>

            {newPassword && !allValid && (
              <ul className="mt-2 text-sm text-red-600 space-y-1">
                {!checks.length && <li>At least 8 characters</li>}
                {!checks.upper && <li>One uppercase letter</li>}
                {!checks.lower && <li>One lowercase letter</li>}
                {!checks.digit && <li>One digit</li>}
                {!checks.special && <li>One special character</li>}
              </ul>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="relative">
              <CommonInput
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                register={register}
                registerName="ConfirmNewPassword"
                // eyeIcon={true}
                label="Confirm New Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                inputClass={`pr-10 ${
                  confirmPassword && confirmPassword !== newPassword
                    ? "border-red-500 border"
                    : "border-gray-300 border"
                }`}
              />
            </div>
            {confirmPassword && confirmPassword !== newPassword && (
              <p className="text-sm text-red-500 mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          <PrimaryButton
            btnText={`${isLoading ? "Loading..." : "Reset Password"}`}
            type="submit"
            btnClass="w-full  bg-[var(--primary-color)] text-white py-2 rounded-md transition"
          />

          <p className="text-sm text-blue-600 hover:underline cursor-pointer mt-2">
            Forgot Password?
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
