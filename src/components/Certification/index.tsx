import React, { useState } from "react";
import axios from "axios";
import * as s from "./style.css";

interface CertificationProps {
  id: number;
  title: string;
  checkboxes: string[];
  success: number;
  failed: number;
}

function Certification({
  id,
  title,
  checkboxes,
  success,
  failed,
}: CertificationProps) {
  const [vote, setVote] = useState<boolean | null>(null);

  const handleVote = (voteValue: boolean) => {
    if (vote === null) {
      setVote(voteValue);
      try {
        axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/vote`, {
          id,
          vote: voteValue,
        });
      } catch {
        alert("투표 실패");
      }
    }
  };

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
        <div
          tabIndex={0}
          role="button"
          className={`${s.voteSuccess} ${vote === true ? s.selected : ""}`}
          onClick={() => handleVote(true)}
          onKeyDown={() => handleVote(true)}
        >
          <p className={s.voteLabel}>성공</p>
          <p className={s.voteCount}>{success}표</p>
        </div>
        <div
          tabIndex={0}
          role="button"
          className={`${s.voteFailure} ${vote === false ? s.selected : ""}`}
          onClick={() => handleVote(false)}
          onKeyDown={() => handleVote(false)}
        >
          <p className={s.voteLabel}>실패</p>
          <p className={s.voteCount}>{failed}표</p>
        </div>
      </div>
      {/* <p className={s.author}>추성우</p> */}
    </div>
  );
}

export default Certification;
