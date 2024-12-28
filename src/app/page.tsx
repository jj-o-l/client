"use client";

import React from "react";
import DefaultHeader from "@/components/DefaultHeader";
import MenuBar from "@/components/MenuBar";
import ChallengeCard from "@/components/ChallengeCard";
import { useRouter } from "next/navigation";
import Plus from "@/ui/src/icons/Plus";
import * as s from "./style.css";

function Home() {
  const router = useRouter();
  return (
    <div className={s.container}>
      <DefaultHeader title="홈" />
      <div className={s.comment}>OOO님, 오늘도 도전하세요!</div>
      <div className={s.challenges}>
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
        <ChallengeCard />
      </div>
      <button
        type="button"
        className={s.createButton}
        onClick={() => {
          router.push("/challenge/create");
        }}
        onKeyDown={() => {
          router.push("/challenge/create");
        }}
      >
        <Plus />
      </button>
      <MenuBar selectState={1} />
    </div>
  );
}

export default Home;
