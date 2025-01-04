import React from "react";
import * as s from "./style.css";

function Certification() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>수박 8초만에 먹었습니다!</h1>
      <p className={s.time}>1시간 전</p>
      <div className={s.content}>
        <img className={s.imageBox} src="1" alt="인증 사진 or 동영상" />
      </div>
      <div className={s.checkboxContainer}>
        <div className={s.checkboxItem}>
          <input type="checkbox" checked className={s.checkbox} readOnly />
          <span className={s.checkboxLabel}>씨앗까지 모조리 씹어주지</span>
        </div>
        <div className={s.checkboxItem}>
          <input type="checkbox" checked className={s.checkbox} readOnly />
          <span className={s.checkboxLabel}>씨앗까지 모조리 씹어주지</span>
        </div>
      </div>
      <div className={s.votes}>
        <div className={s.voteSuccess}>
          <p className={s.voteLabel}>성공</p>
          <p className={s.voteCount}>34표</p>
        </div>
        <div className={s.voteFailure}>
          <p className={s.voteLabel}>실패</p>
          <p className={s.voteCount}>5표</p>
        </div>
      </div>
      <p className={s.author}>추성우</p>
    </div>
  );
}

export default Certification;
