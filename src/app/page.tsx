"use client";

import React, { useEffect, useState } from "react";
import DefaultHeader from "@/components/DefaultHeader";
import MenuBar from "@/components/MenuBar";
import ChallengeCard from "@/components/ChallengeCard";
import { useRouter } from "next/navigation";
import Plus from "@/ui/src/icons/Plus";
import * as s from "./style.css";
import axios from "axios";
import { IChallenge } from "@/types/IChallenge";
import Link from "next/link";

function Home() {
  const [challenges, setChallenges] = useState<IChallenge[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/missions`,
        );
        setChallenges(response.data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchChallenges();
  }, []);

  return (
    <div className={s.container}>
      <DefaultHeader title="홈" />
      <div className={s.comment}>OOO님, 오늘도 도전하세요!</div>
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
