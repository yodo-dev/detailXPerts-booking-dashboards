import React from "react";
import { Link } from "react-router-dom";
import { PrimaryBtnProps } from "./types";
import downloadBtn from "../../assets/svgs/downloadBtn.svg"

export const PrimaryButton: React.FC<PrimaryBtnProps> = ({
  btnText,
  btnTextClass,
  btnClass,
  img,
  showImg,
  imgClass,
  onClick,
  Link: linkTo,
  imgPosition = "left",
  type
}) => {
  const imageElement =  showImg && <img src={img} className={`${imgClass}`} />;
  const textElement = <span className={`${btnTextClass}`}>{btnText}</span>;

  // const content = (
  //   <div className="flex items-center gap-x-1 justify-center">
  //     {imgPosition === "left" ? (
  //       <>
  //         {imageElement}
  //         {textElement}
  //       </>
  //     ) : (
  //       <>
  //         {textElement}
  //         {imageElement}
  //       </>
  //     )}
  //   </div>
  // );


  return  (
    <button
      className={`rounded-lg cursor-pointer w-full ${btnClass}`}
      onClick={onClick}
      type={type}
    >
      {btnText}
    </button>
  );

};
