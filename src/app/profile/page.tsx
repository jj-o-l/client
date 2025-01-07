"use client";

import React, { useEffect, useState } from "react";
import DefaultHeader from "@/components/DefaultHeader";
import History from "@/ui/src/icons/History";
import Store from "@/ui/src/icons/Store";
import Money from "@/ui/src/icons/Money";
import MenuBar from "@/components/MenuBar";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as s from "./style.css";

function Profile() {
  const [userName, setUserName] = useState<string>("");
  const [userRank, setUserRank] = useState<number>(0);
  const [userHistory, setUserHistory] = useState<{
    success: number;
    failed: number;
  }>({
    success: 0,
    failed: 0,
  });

  const router = useRouter();

  const loadUserInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/info`,
      );
      const { data } = response;
      setUserName(data.username || "ooo");
      setUserRank(data.score || 0);
      setUserHistory(data.history || { success: 0, failed: 0 });
    } catch (error) {
      alert("서버에서 사용자 정보를 불러오는 중 오류가 발생했습니다");
      setUserName("ooo");
      setUserRank(0);
      setUserHistory({ success: 0, failed: 0 });
    }
  };

  const handleLogout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/logout`);
    router.push("/onboarding");
  };

  useEffect(() => {
    loadUserInfo();
  }, []);

  return (
    <div className={s.container}>
      <DefaultHeader title="프로필" />
      <div className={s.myInfo}>
        <div className={s.left}>
          <p className={s.name}>{userName}님</p>
          <p className={s.rank}>{userRank}점</p>
        </div>
        <div className={s.right}>
          <div className={s.historyBox}>
            <p className={s.success}>성공</p>
            <p className={s.countText}>{userHistory.success}개</p>
          </div>
          <div className={s.historyBox}>
            <p className={s.failure}>실패</p>
            <p className={s.countText}>{userHistory.failed}개</p>
          </div>
        </div>
      </div>
      <div className={s.menuList}>
        <div className={s.menu}>
          <History />
          도전 기록
        </div>
        <div className={s.menu}>
          <Store />
          상점 이동
        </div>
        <div className={s.menu}>
          <Money />
          출금 요청
        </div>
        <div
          tabIndex={0}
          role="button"
          className={s.menu}
          onClick={handleLogout}
          onKeyDown={handleLogout}
        >
          로그아웃
        </div>
      </div>
      <MenuBar selectState={3} />
    </div>
  );
}

export default Profile;
