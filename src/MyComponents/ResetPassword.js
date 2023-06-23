import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { getAuth } from "firebase/auth";

export const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  const triggerResetEmail = async () => {
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="resetPassword-main">
      <div>
        <label htmlFor="email-address">Email address</label>
        <input
          className="inputbox"
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>{" "}
      <button className="Btn" type="button" onClick={triggerResetEmail}>
        Send Email to reset password
      </button>
    </div>
  );
};
