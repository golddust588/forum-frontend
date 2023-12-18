import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import PageTemplate from "@/components/organisms/PageTemplate/PageTemplate";
import styles from "./styles.module.css";
import Button from "@/components/atoms/Button/Button";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onRegister = async () => {
    const body = {
      email: email,
      password: password,
      name: name,
    };

    const response = await axios.post(
      `${process.env.SERVER_URL}/users/register`,
      body
    );

    if (response.status === 200) {
      cookie.set("jwt_token", response.data.token);
      alert("Registration successful");
      router.push("/");
    }

    console.log("response", response);
  };

  return (
    <div>
      <PageTemplate>
        <div className={styles.form}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button text="Register" onClick={onRegister} type="POST" />
        </div>
      </PageTemplate>
    </div>
  );
};

export default Login;