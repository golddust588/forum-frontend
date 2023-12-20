import React from "react";
import styles from "./likeButton.module.css";

type ButtonType = {
  onClick?: () => void;
  type: "UP" | "DOWN";
  //galima vietoj type tiesiog className duoti:
  //className?: string; klaustukas padaro optional pagal TS
};

// ir cia vietoj type className, kuri apsirasom css faile
const LikeButton: React.FC<ButtonType> = ({ onClick, type }) => {
  return (
    <img
      src="https://metro.co.uk/wp-content/uploads/2014/12/downvote.png"
      onClick={onClick}
      className={`
      ${styles.button} 
      ${type === "UP" && styles.post_button} 
      ${type === "DOWN" && styles.delete_button}
      `}
    ></img>
  );
};

export default LikeButton;
