import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import cookie from "js-cookie";
import PageTemplate from "@/components/organisms/PageTemplate/PageTemplate";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button/Button";

type QuestionType = {
  _id: string;
  question_title: string;
  question_text: string;
  date: string;
  gained_likes_number: number;
  user_id: string;
  // removeItem: (id: string) => void;
};

type AnswerType = {
  answers: Array<any> | null;
};

const Question = () => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [answers, setAnswers] = useState<AnswerType | null>(null);

  const headers = {
    authorization: cookie.get("jwt_token"),
  };

  const router = useRouter();

  const fetchQuestion = async (id: string) => {
    const question = await axios.get(
      `${process.env.SERVER_URL}/questions/${router.query.id}`
    );

    setQuestion(question.data.question);
  };

  useEffect(() => {
    router.query.id && fetchQuestion(router.query.id as string);
  }, [router.query.id]);

  const fetchAnswer = async (id: string) => {
    const answers = await axios.get(
      `${process.env.SERVER_URL}/question/${router.query.id}/answers`
    );

    setAnswers(answers.data.answers);
    console.log(answers);
  };

  useEffect(() => {
    router.query.id && fetchAnswer(router.query.id as string);
  }, [router.query.id]);

  const [answer_text, setAnswerText] = useState<string>("");

  const insertAnswer = async () => {
    const body = {
      answer_text: answer_text,
    };

    try {
      console.log(body);
      const response = await axios.post(
        `${process.env.SERVER_URL}/question/${router.query.id}/answers`,
        body,
        {
          headers,
        }
      );

      if (response.status === 201) {
        setAnswerText("");
        alert("Answer posted!");
        router.reload();
      }
      console.log("response", response);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        {question && (
          <div>
            <h2>{`${question.question_title}`}</h2>
            <h4>{`${question.question_text}`}</h4>
            <div>{`Date: ${question.date}`}</div>
            <div
              className={styles.likes}
            >{`Likes: ${question.gained_likes_number}`}</div>
            <h3>Answers:</h3>
            {answers &&
              // @ts-ignore
              answers.map((answer) => {
                return (
                  <div className={styles.answerWrapper} key={answer._id}>
                    <h4>{answer.answer_text}</h4>
                  </div>
                );
              })}

            <h3>Create your answer:</h3>
            {headers.authorization ? (
              <div>
                <textarea
                  className={styles.answerTextarea}
                  placeholder="Answer text:"
                  value={answer_text}
                  onChange={(e) => setAnswerText(e.target.value)}
                />
                <Button type="POST" text="Answer" onClick={insertAnswer} />
              </div>
            ) : (
              <div>
                <span>Must be logged in to answer questions</span>
              </div>
            )}
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default Question;
