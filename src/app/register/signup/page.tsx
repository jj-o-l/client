import Header from "@/components/Header";
import React from "react";
import * as s from "./style.css";

function Signup() {
  return (
    <div className={s.container}>
      <Header title="회원가입" />
      <div className={s.layout}>
        <p className={s.title}>도전할 준비 되셨나요?</p>
      </div>
    </div>
  );
}

export default Signup;
