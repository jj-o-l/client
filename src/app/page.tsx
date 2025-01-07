"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const fetchUserData = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/info`,
        { withCredentials: true },
      );
      setUsername(data.username || "ooo");
    } catch (error) {
      alert("Failed to fetch username");
    }
  };

  const fetchChallenges = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/info`,
        { withCredentials: true },
      );
      setChallenges(data.challenges || []);
    } catch (error) {
      alert("Failed to fetch challenges");
    }
  };

  useEffect(() => {
    fetchUserData();
    fetchChallenges();
  }, []);

  return (
    <div className={s.container}>
      <DefaultHeader title="홈" />
      <div className={s.comment}>{username}님, 오늘도 도전하세요!</div>{" "}
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
