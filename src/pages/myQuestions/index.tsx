import styles from "./index.module.css";
import { useEffect, useState } from "react";
import PageTemplate from "@/components/organisms/PageTemplate/PageTemplate";
import cookie from "js-cookie";
import axios from "axios";
import Questions from "@/components/organisms/Questions/Questions";
import NavBar from "@/components/molecules/NavBarMainPageFilter/NavBar";

const Main = () => {
  const [questions, setQuestions] = useState<Array<any> | null>(null);

  const fetchData = async () => {
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };
      const response = await axios.get(
        `${process.env.SERVER_URL}/questions/users/${cookie.get("user_id")}`,
        {
          headers,
        }
      );
      console.log(response);
      setQuestions(response.data.questions);
      console.log(questions);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <PageTemplate>
        <div className={`${styles.text}`}>
          <NavBar />
          <Questions questions={questions} />
        </div>
      </PageTemplate>
    </>
  );
};

export default Main;
