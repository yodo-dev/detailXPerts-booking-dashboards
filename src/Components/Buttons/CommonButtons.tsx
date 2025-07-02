// import React from "react";
// import { Link } from "react-router-dom";
// import { PrimaryBtnProps } from "./types";
// import downloadBtn from "../../assets/svgs/downloadBtn.svg";
// import Spinner from "@components/Spinner";

// export const PrimaryButton: React.FC<PrimaryBtnProps> = ({
//   btnText,
//   btnTextClass,
//   btnClass,
//   img,
//   showImg,
//   imgClass,
//   onClick,
//   Link: linkTo,
//   imgPosition = "left",
//   isLoading = false,
//   type,
  
// }) => {
//   const imageElement = showImg && <img src={img} className={`${imgClass}`} />;
//   const textElement = <span className={`${btnTextClass}`}>{btnText}</span>;

//   const content = (
//     <div className="flex items-center gap-x-1 justify-center">
//       {imgPosition === "left" ? (
//         <>
//           {imageElement}
//           {textElement}
//         </>
//       ) : (
//         <>
//           {textElement}
//           {imageElement}
//         </>
//       )}
//     </div>
//   );

//   return (

    
//     <button
//       className={`rounded-lg flex items-center justify-center cursor-pointer w-full ${btnClass}`}
//       onClick={onClick}
//       type={type}
//     >
//       {isLoading ? <Spinner /> : btnText}
//     </button>
//   );
// };



import React from "react";
import { Link } from "react-router-dom";
import { PrimaryBtnProps } from "./types";
import Spinner from "@components/Spinner";

export const PrimaryButton: React.FC<PrimaryBtnProps> = ({
  btnText,
  btnTextClass = "",
  btnClass = "",
  img,
  showImg = false,
  imgClass = "",
  onClick,
  Link: linkTo,
  imgPosition = "left",
  isLoading = false,
  type = "button",
  disabled=false
}) => {
  const imageElement = showImg && img && (
    <img src={img} className={imgClass} alt="button icon" />
  );

  const textElement = <span className={btnTextClass}>{btnText}</span>;

  const content = (
    <div className="flex items-center gap-x-1 justify-center">
      {imgPosition === "left" ? (
        <>
          {imageElement}
          {textElement}
        </>
      ) : (
        <>
          {textElement}
          {imageElement}
        </>
      )}
    </div>
  );

  const buttonBody = isLoading ? <Spinner /> : content;

  const button = (
    <button
      className={`rounded-lg flex items-center justify-center ${disabled==true ?  "" : "cursor-pointer " } w-full ${btnClass}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {buttonBody}
    </button>
  );

  // If `linkTo` is passed, wrap with react-router Link
  return linkTo ? <Link to={linkTo}>{button}</Link> : button;
};
