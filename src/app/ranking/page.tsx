import React from "react";
import DefaultHeader from "@/components/DefaultHeader";
import Rank from "@/components/Rank";
import MenuBar from "@/components/MenuBar";
import * as s from "./style.css";

// 랜덤 이름을 생성하는 함수
const getRandomName = () => {
  const names = [
    "추성우",
    "김지훈",
    "박서준",
    "이수민",
    "최민호",
    "장예은",
    "홍성호",
    "배수지",
    "정다빈",
    "오정우",
  ];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
};

const getScoreByRank = (rank: number) => {
  const maxScore = 100;
  const scoreDecreasePerRank = 5;
  const score = maxScore - (rank - 1) * scoreDecreasePerRank;
  return score > 0 ? score : 0;
};

function Ranking() {
  return (
    <div className={s.container}>
      <DefaultHeader title="랭킹" />
      <Rank rank={50} name={getRandomName()} score={getScoreByRank(50)} />
      <p className={s.explain}>
        다음 랭크까지 <span className={s.point}>54</span>점 남았습니다
      </p>
      <p className={s.top10}>TOP 10</p>
      <div className={s.rankList}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Rank
            key={index}
            rank={index + 1}
            name={getRandomName()}
            score={getScoreByRank(index + 1)}
          />
        ))}
      </div>
      <MenuBar selectState={2} />
    </div>
  );
}

export default Ranking;
