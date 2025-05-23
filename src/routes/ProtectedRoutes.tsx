import React, { JSX } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const isAuthenticatied = localStorage.getItem("userInfo");

  if (!isAuthenticatied) {
    return <Navigate to={"/login"} />;
  }

  return children;
};


export const PublicProtectRoutes:React.FC<{children:JSX.Element}> = ({children})=>{
    const isAuthenticated=localStorage.getItem("userInfo")
    if(isAuthenticated){
        return <Navigate to={"/"} />
    }
    // console.log("loooooooo",children)
    return children;
}

// export default ProtectedRoutes;
