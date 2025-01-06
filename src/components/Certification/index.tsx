import React from "react";
import * as s from "./style.css";

interface CertificationProps {
  title: string;
  checkboxes: string[];
  success: number;
  failed: number;
}

function Certification({
  title,
  checkboxes,
  success,
  failed,
}: CertificationProps) {
  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
      {/* <p className={s.time}>1시간 전</p> */}
      {/* <div className={s.content}>
        <img className={s.imageBox} src="1" alt="인증 사진 or 동영상" />
      </div> */}
      <div className={s.checkboxContainer}>
        {checkboxes.map((checkbox) => (
          <div key={checkbox} className={s.checkboxItem}>
            <input type="checkbox" checked className={s.checkbox} readOnly />
            <span className={s.checkboxLabel}>{checkbox}</span>
          </div>
        ))}
      </div>
      <div className={s.votes}>
        <div className={s.voteSuccess}>
          <p className={s.voteLabel}>성공</p>
          <p className={s.voteCount}>{success}표</p>
        </div>
        <div className={s.voteFailure}>
          <p className={s.voteLabel}>실패</p>
          <p className={s.voteCount}>{failed}표</p>
        </div>
      </div>
      {/* <p className={s.author}>추성우</p> */}
    </div>
  );
}

export default Certification;
