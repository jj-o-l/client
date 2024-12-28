"use client";

import React from "react";
import logo from "@/ui/src/assets/logo.png";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

function Onboarding() {
  const router = useRouter();
  return (
    <div className={s.container}>
      <p className={s.title}>
        당신의 두려움을 없애줄 <br />
        최고의 플랫폼, <span className={s.nameSpan}>쫄?</span>
      </p>
      <Image className={s.logoImg} src={logo} alt="로고 이미지" />
      <Button
        title="시작하기"
        onClickMethod={() => {
          router.push("/register/signup");
        }}
        disabled={false}
      />
    </div>
  );
}

export default Onboarding;
