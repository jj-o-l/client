import React from "react";
import * as s from "./style.css";

interface RankProps {
  rank: number;
  name: string;
  score: number;
}

function Rank({ rank, name, score }: RankProps) {
  const getRankStyle = () => {
    if (rank === 1) {
      return `${s.rankBase} ${s.firstRank}`;
    }
    if (rank === 2) {
      return `${s.rankBase} ${s.secondRank}`;
    }
    if (rank === 3) {
      return `${s.rankBase} ${s.thirdRank}`;
    }
    return `${s.rankBase} ${s.defaultRank}`;
  };

  return (
    <div className={getRankStyle()}>
      <div className={s.left}>
        <p className={s.rankingText}>{rank}</p>
        <p className={s.nameText}>{name}</p>
      </div>
      <p className={s.scoreText}>{score}점</p>
    </div>
  );
}

export default Rank;
