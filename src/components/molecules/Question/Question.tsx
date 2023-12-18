import React from "react";
import { useState } from "react";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import styles from "./question.module.css";

type QuestionType = {
  _id: string;
  question_title: string;
  question_text: string;
  date: string;
  gained_likes_number: number;
  user_id: string;
  // removeItem: (id: string) => void;
};

const Question: React.FC<QuestionType> = ({
  _id,
  question_title,
  question_text,
  date,
  gained_likes_number,
  // removeItem,
}) => {
  const onItemClicked = () => {
    // removeItem(_id);
  };

  return (
    <div className={styles.wrapper}>
      <Link href={`/question/${_id}`} className={styles.wrapper2}>
        <h4>{date}</h4>
        <h4>{`Likes: ${gained_likes_number}`}</h4>
        <h2 className={styles.h2}>{question_title}</h2>
        <h4 className={styles.h4}>{question_text}</h4>

        {/* {isShowAdress && <h4>{adress}</h4>} */}
      </Link>
      {/* onClick={()=>onItemClicked(id)} kai i funkcija yra paduodamas kintamasis */}
      <Button text="Delete" onClick={onItemClicked} type="DELETE" />
    </div>
  );
};

export default Question;
