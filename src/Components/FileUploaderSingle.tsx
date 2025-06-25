import React from "react";
import UploadIcon from "@assets/svgs/uploadFile.svg";

const FileUploaderSingle = ({ label, file, onChange, singleImage }) => {
  // Safely generate preview URL
  const previewUrl = file
    ? URL.createObjectURL(file)
    : singleImage
    ? `${import.meta.env.VITE_APP_API_IMG_URL}${singleImage}`
    : null;

    console.log("++++++++++++++++++++++++",singleImage)
  return (
    <div>
      {label && <label className="block mb-2 font-medium">{label}</label>}

      <div className="w-full min-h-[140px] border border-gray-200 rounded-xl flex items-center justify-center flex-col text-center bg-white">
        <label className="cursor-pointer">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onChange(e.target.files?.[0] || null)}
            className="hidden"
          />

          <div className="flex flex-col items-center gap-2">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="uploaded"
                className="w-32 h-32 object-cover rounded-md shadow"
              />
            ) : (
              <>
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <img src={UploadIcon} alt="Upload Icon" />
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Click to upload</strong> or drag and drop
                  <br />
                  <span className="text-xs">
                    SVG, PNG, JPG or GIF (max. 800x400px)
                  </span>
                </p>
              </>
            )}
          </div>
        </label>
      </div>
    </div>
  );
};

export default FileUploaderSingle;
