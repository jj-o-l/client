"use client";

import StackHeader from "@/components/StackHeader";
import React, { useState, useEffect } from "react";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
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

  const handleSubmit = async () => {
    const { id, password } = inputValues;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/login`,
        { userId: id, password },
        {
          withCredentials: true,
        },
      );

      if (response.data.success) {
        alert("로그인 성공!");
        router.push("/");
      } else {
        alert(
          response.data.message ||
            "로그인 실패: 아이디 또는 비밀번호를 확인해주세요.",
        );
      }
    } catch (error) {
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className={s.container}>
      <StackHeader title="로그인" />
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
            type="password"
          />
          <div
            className={s.noAccount}
            role="button"
            tabIndex={0}
            onClick={() => router.push("/auth/signup")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                router.push("/auth/signup");
              }
            }}
          >
            계정이 없으신가요?
          </div>
        </div>
      </div>
      <Button
        title="로그인"
        onClickMethod={handleSubmit}
        disabled={isDisabled}
      />
    </div>
  );
}

export default Signin;
