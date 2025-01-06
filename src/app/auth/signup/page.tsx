"use client";

import StackHeader from "@/components/StackHeader";
import React, { useState, useEffect } from "react";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import * as s from "./style.css";
import axios from "axios";

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

  const handleSubmit = () => {
    try {
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/member`, {
        userId: inputValues.id,
        username: inputValues.name,
        password: inputValues.password,
      });
      alert("회원가입 성공!");
      router.push("/auth/signin");
    } catch {
      alert("회원가입 실패");
    }
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
            type="password"
          />
          <InputLayout
            title="비밀번호 확인"
            placeholder="비밀번호를 확인해 주세요"
            name="passwordCheck"
            value={inputValues.passwordCheck}
            onChange={handleChange}
            type="password"
          />
        </div>
      </div>
      <Button
        title="회원가입"
        onClickMethod={handleSubmit}
        disabled={isDisabled}
      />
    </div>
  );
}

export default Signup;
