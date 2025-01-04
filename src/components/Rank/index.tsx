import React from "react";
import * as s from "./style.css";

interface RankProps {
  rank: number;
  name: string;
  score: number;
}

function Rank({ rank, name, score }: RankProps) {
  return (
    <div className={s.myRank}>
      <p className={s.rankingText}>{rank}</p>
      <p className={s.nameText}>{name}</p>
      <p className={s.scoreText}>{score}점</p>
    </div>
  );
}

export default Rank;
