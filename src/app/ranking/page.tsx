import React from "react";
import DefaultHeader from "@/components/DefaultHeader";
import * as s from "./style.css";

function Ranking() {
  return (
    <div className={s.container}>
      <DefaultHeader title="랭킹" />
    </div>
  );
}

export default Ranking;
