import React from "react";
import * as s from "./style.css";
import DefaultHeader from "@/components/DefaultHeader";
import MenuBar from "@/components/MenuBar";

function Home() {
  return (
    <div className={s.container}>
      <DefaultHeader title="홈" />
      <div className={s.comment}>OOO님, 오늘도 도전하세요!</div>
      <MenuBar selectState={1} />
    </div>
  );
}

export default Home;
