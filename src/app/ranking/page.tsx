import React from "react";
import DefaultHeader from "@/components/DefaultHeader";
import Rank from "@/components/Rank";
import MenuBar from "@/components/MenuBar";
import * as s from "./style.css";

function Ranking() {
  return (
    <div className={s.container}>
      <DefaultHeader title="랭킹" />
      <Rank rank={50} name="추성우" score={100} />
      <p className={s.explain}>
        다음 랭크까지 <span className={s.point}>54</span>점 남았습니다
      </p>
      <p className={s.top10}>TOP 10</p>
      <div className={s.rankList}>
        <Rank rank={1} name="추성우" score={100} />
        <Rank rank={2} name="추성우" score={100} />
        <Rank rank={3} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
        <Rank rank={34} name="추성우" score={100} />
      </div>
      <MenuBar selectState={2} />
    </div>
  );
}

export default Ranking;
