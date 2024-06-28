import { useState } from "react";

export const usePasswordType = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordType = () =>
    setPasswordType((type) => (type == "password" ? "text" : "password"));

  return {
    passwordType: passwordType,
    passwordTypeToggler: togglePasswordType,
  };
};
