"use client";

import StackHeader from "@/components/StackHeader";
import React, { useState, useEffect } from "react";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

function Signup() {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({
    name: "",
    id: "",
    password: "",
    passwordCheck: "",
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
    const { name, id, password, passwordCheck } = inputValues;
    const isFormValid =
      name && id && password && passwordCheck && password === passwordCheck;
    setIsDisabled(!isFormValid);
  }, [inputValues]);

  return (
    <div className={s.container}>
      <StackHeader title="회원가입" />
      <div className={s.layout}>
        <p className={s.title}>도전할 준비 되셨나요?</p>
        <div className={s.inputs}>
          <InputLayout
            title="이름"
            placeholder="이름을 입력해 주세요"
            name="name"
            value={inputValues.name}
            onChange={handleChange}
          />
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
          <InputLayout
            title="비밀번호 확인"
            placeholder="비밀번호를 확인해 주세요"
            name="passwordCheck"
            value={inputValues.passwordCheck}
            onChange={handleChange}
          />
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

export default Signup;
