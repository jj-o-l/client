import React from "react";
import * as s from "./style.css";

function ChallengeCard() {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <p className={s.title}>수박 빨리 먹기</p>
        <p className={s.time}>1시간 전</p>
      </div>
      <p className={s.category}>도전 & 극복</p>
      <p className={s.description}>
        요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
      </p>
      <div className={s.footer}>
        <p className={s.author}>추성우</p>
      </div>
    </div>
  );
}

export default ChallengeCard;
