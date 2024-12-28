"use client";

import Header from "@/components/Header";
import React, { useState, useEffect } from "react";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

function Signin() {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    id: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    const { id, password } = inputValues;
    const isFormValid = id && password;
    setIsDisabled(!isFormValid);
  }, [inputValues]);

  return (
    <div className={s.container}>
      <Header title="로그인" />
      <div className={s.layout}>
        <p className={s.title}>다시 도전 해보세요</p>
        <div className={s.inputs}>
          <InputLayout
            title="아이디"
            placeholder="아이디를 입력해 주세요"
            name="id"
            value={inputValues.id}
            onChange={handleChange}
          />
          <InputLayout
            title="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            name="password"
            value={inputValues.password}
            onChange={handleChange}
          />
          <p
            className={s.noAccount}
            onClick={() => {
              router.push("/auth/signup");
            }}
          >
            계정이 없으신가요?
          </p>
        </div>
      </div>
      <Button
        title="회원가입"
        onClickMethod={() => {
          router.push("/auth/login");
        }}
        disabled={isDisabled}
      />
    </div>
  );
}

export default Signin;
