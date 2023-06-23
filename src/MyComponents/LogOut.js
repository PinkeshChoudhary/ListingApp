import React from "react";
import { useNavigate } from "react-router-dom";

export const LogOut = () => {
  const navigate = useNavigate();
  return (
    <div className="logoutbtn">
      <button onClick={() => navigate("/login")}>LogOut</button>
    </div>
  );
};
