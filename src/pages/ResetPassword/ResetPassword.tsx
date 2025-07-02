import React, { useState } from "react";
import { FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
import CommonInput from "@components/inputs/CommonInput";
import { PrimaryButton } from "@components/Buttons/CommonButtons";

const ResetPassword = () => {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allValid) return;
    if (newPassword !== confirmPassword) return;
    alert("Password successfully changed!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className=" p-8 rounded-md w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Change Password
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Old Password */}
          <div>
            <div className="flex gap-2 items-center mb-1">
              <label className="text-sm font-medium">Old Password</label>
              {isOldPasswordCorrect && (
                <FiCheckCircle className="text-green-500 text-xl" />
              )}
            </div>
            <div className="relative">
              <CommonInput
                type={showOld ? "text" : "password"}
                placeholder="Enter your old password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                inputClass={`pr-10 ${
                  isOldPasswordCorrect
                    ? "border-green-500 border"
                    : "border-gray-300 border"
                }`}
              />
              <div
                className="absolute right-3 top-[20px] cursor-pointer text-gray-500"
                onClick={() => setShowOld(!showOld)}
              >
                {showOld ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block mb-1 font-medium">New Password</label>
            <div className="relative">
              <CommonInput
                type={showNew ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                inputClass={`pr-10 ${
                  newPassword
                    ? allValid
                      ? "border-green-500 border"
                      : "border-red-500 border"
                    : "border-gray-300 border"
                }`}
              />
              <div
                className="absolute right-3 top-[20px] cursor-pointer text-gray-500"
                onClick={() => setShowNew(!showNew)}
              >
                {showNew ? <FiEyeOff /> : <FiEye />}
              </div>
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
            <label className="block mb-1 font-medium">
              Confirm New Password
            </label>
            <div className="relative">
              <CommonInput
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                inputClass={`pr-10 ${
                  confirmPassword && confirmPassword !== newPassword
                    ? "border-red-500 border"
                    : "border-gray-300 border"
                }`}
              />
              <div
                className="absolute right-3 top-[20px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>
            {confirmPassword && confirmPassword !== newPassword && (
              <p className="text-sm text-red-500 mt-1">
                Passwords do not match
              </p>
            )}
          </div>

          <PrimaryButton
            btnText="Change Password"
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
