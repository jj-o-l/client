import React, { useState, useEffect } from "react";
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
  checkboxes = [],
  success,
  failed,
}: CertificationProps) {
  const [vote, setVote] = useState<boolean | null>(null);

  useEffect(() => {
    const savedVote = localStorage.getItem(`vote_${id}`);
    if (savedVote) {
      setVote(savedVote === "true");
    }
  }, [id]);

  const handleVote = async (voteValue: boolean) => {
    if (vote === null) {
      setVote(voteValue);
      localStorage.setItem(`vote_${id}`, voteValue.toString());

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/vote`,
          {
            id,
            vote: voteValue,
          },
        );

        if (response.status === 200) {
          alert("투표 성공");
        } else {
          alert("서버에서 응답을 받지 못했습니다.");
        }
      } catch (error) {
        alert("투표 요청 중 오류가 발생했습니다");
      }
    }
  };

  return (
    <div className={s.container}>
      <h1 className={s.title}>{title}</h1>
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
    </div>
  );
}

export default Certification;
