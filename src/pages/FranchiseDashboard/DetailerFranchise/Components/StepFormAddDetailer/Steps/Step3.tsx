import SelectField from "@components/SelectField/SelectField";
import { AvailabilityTime } from "@pages/FranchiseDashboard/CustomersFranchise/Components/AvailabilityCard";
import React, { useRef, useState } from "react";
import { ReactSVG } from "react-svg";
import uploadServer from "../../../../../../assets/svgs/uploadServer.svg";
import userIcon from "../../../../../../assets/svgs/userIcon.svg";
import { PrimaryButton } from "@components/Buttons/CommonButtons";
import pdfImg from "@assets/svgs/pdf.svg";
import PdfImg from "@assets/svgs/pdf.svg";
import DummyImg from "@assets/images/user-dummy-img.jpg"

const Step3 = () => {
  const passportImageRef = useRef(null);
  const LicenseRef = useRef(null);

  const [passportImage, setPassportImage] = useState();
  const [licenseImage, setLicenseImage] = useState();
  const [previewLicenseImage, setPreviewLicenceImage] = useState();


  const handlePassportImage = () => {
    passportImageRef.current.click();
  };

  const handleLicenseImage = () => {
    LicenseRef.current.click();
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      {/* Uploading */}
      <div className="flex items-center mb-4">
        <div onClick={handlePassportImage} className="w-10 h-10 cursor-pointer">
          <img
            src={passportImage ? URL.createObjectURL(passportImage) : DummyImg}
            alt="file"
            className="w-10 h-10 mr-3 object-cover rounded-full !me-5"
          />
          <input
            type="file"
            id="upload"
            className="hidden "
            accept="image/*"
            ref={passportImageRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setPassportImage(file);
              }
            }}
          />
        </div>
        <div className="flex-1 ms-5">
          <p className="text-sm font-medium">Upload License</p>
          <p className="text-xs text-gray-500">4.8 MB</p>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 relative">
            <div className="bg-teal-500 h-2 rounded-full w-[100%]"></div>
            <div className="absolute top-0 right-0 -mt-5 mr-1 text-blue-500 animate-spin">
              {/* <svg
                className="w-6 h-6 animate-spin text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M12 2a10 10 0 1 1-10 10h4a6 6 0 1 0 6-6V2z"
                ></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="flex items-center mb-4">
        <div onClick={handleLicenseImage} className="w-10 h-10 cursor-pointer">
          <img
            src={licenseImage ? URL.createObjectURL(licenseImage) : DummyImg}
            alt="file"
            className="w-10 h-10 mr-3 object-cover rounded-full !me-5"
          />
          <input
            type="file"
            id="upload"
            className="hidden "
            accept="image/*"
            ref={LicenseRef}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setLicenseImage(file);
              }
            }}
          />
        </div>
        <div className="flex-1 ms-5">
          <p className="text-sm font-medium">Upload Visa</p>
          <p className="text-xs text-gray-500">4.8 MB</p>
          <div className="w-full bg-gray-200 h-2 rounded-full mt-1 relative">
            <div className="bg-teal-500 h-2 rounded-full w-[100%]"></div>
            <div className="absolute top-0 right-0 -mt-5 mr-1 text-blue-500 animate-spin">
              {/* <svg
                className="w-6 h-6 animate-spin text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M12 2a10 10 0 1 1-10 10h4a6 6 0 1 0 6-6V2z"
                ></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
