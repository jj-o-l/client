"use client";

import React, { useEffect, useState } from "react";
import DefaultHeader from "@/components/DefaultHeader";
import MenuBar from "@/components/MenuBar";
import ChallengeCard from "@/components/ChallengeCard";
import { useRouter } from "next/navigation";
import Plus from "@/ui/src/icons/Plus";
import { IChallenge } from "@/types/IChallenge";
import Link from "next/link";
import * as s from "./style.css";

function Home() {
  const [challenges, setChallenges] = useState<IChallenge[]>([]);
  const [username, setUsername] = useState<string>("OOO");
  const router = useRouter();

  const loadChallengesFromLocalStorage = () => {
    const storedChallenges = localStorage.getItem("challenges");
    if (storedChallenges) {
      return JSON.parse(storedChallenges) as IChallenge[];
    }
    return [];
  };

  useEffect(() => {
    const storedChallenges = loadChallengesFromLocalStorage();
    setChallenges(storedChallenges);

    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // 로컬 스토리지에 저장된 사용자 이름이 있으면 설정
    }
  }, []);

  return (
    <div className={s.container}>
      <DefaultHeader title="홈" />
      <div className={s.comment}>{username}님, 오늘도 도전하세요!</div>{" "}
      {/* 사용자 이름 표시 */}
      <div className={s.challenges}>
        {challenges.map((challenge) => (
          <Link key={challenge.id} href={`/challenge/detail/${challenge.id}`}>
            <ChallengeCard
              title={challenge.title}
              categories={challenge.categories}
              description={challenge.description}
            />
          </Link>
        ))}
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
