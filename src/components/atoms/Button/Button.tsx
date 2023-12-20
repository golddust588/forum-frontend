import React from "react";
import styles from "./button.module.css";

type ButtonType = {
  text: string;
  onClick: () => void;
  type: "POST" | "DELETE" | "NONE";
  //galima vietoj type tiesiog className duoti:
  //className?: string; klaustukas padaro optional pagal TS
};

// ir cia vietoj type className, kuri apsirasom css faile
const Button: React.FC<ButtonType> = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      className={`
      ${styles.button} 
      ${type === "POST" && styles.post_button} 
      ${type === "DELETE" && styles.delete_button}
      ${type === "NONE" && styles.none}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
