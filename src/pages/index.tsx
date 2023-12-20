import styles from "./index.module.css";
import { useEffect, useState } from "react";
import PageTemplate from "@/components/organisms/PageTemplate/PageTemplate";

import axios from "axios";
import Questions from "@/components/organisms/Questions/Questions";
import NavBar from "../components/molecules/NavBarMainPageFilter/NavBar";

const Main = () => {
  const [questions, setQuestions] = useState<Array<any> | null>(null);
  const [originalQuestions, setOriginalQuestions] = useState<Array<any> | null>(
    null
  );

  const fetchData = async () => {
    try {
      console.log(`${process.env.SERVER_URL}/questions`);
      const response = await axios.get(`${process.env.SERVER_URL}/questions`);
      console.log(response);
      setQuestions(response.data.questions);
      setOriginalQuestions(response.data.questions);
      console.log(questions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onClickedAllQuestions = () => {
    setQuestions(originalQuestions);
  };

  const onClickedAnswered = () => {
    // @ts-ignore
    const filteredQuestions = questions.filter(
      (question) => question.answers.length > 0
    );
    setQuestions(filteredQuestions);
  };

  // const onClickedMostLiked = () => {
  //   // Sort questions based on the most gained_likes_number
  //   const sortedQuestions = [...originalQuestions].sort((a, b) => b.gained_likes_number - a.gained_likes_number);

  //   // Update the state with the sorted questions
  //   setQuestions(sortedQuestions);

  return (
    <>
      <PageTemplate>
        <div className={`${styles.text}`}>
          <NavBar
            onClickedAllQuestions={onClickedAllQuestions}
            onClickedAnswered={onClickedAnswered}
            onClickedMostLiked={onClickedAnswered}
          />
          <Questions questions={questions} />
        </div>
      </PageTemplate>
    </>
  );
};

export default Main;
