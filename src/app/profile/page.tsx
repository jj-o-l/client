"use client";

import React, { useEffect, useState } from "react";
import DefaultHeader from "@/components/DefaultHeader";
import History from "@/ui/src/icons/History";
import Store from "@/ui/src/icons/Store";
import Money from "@/ui/src/icons/Money";
import MenuBar from "@/components/MenuBar";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

function Profile() {
  const [userName, setUserName] = useState<string>("");
  const router = useRouter();
  const loadUserNameFromLocalStorage = () => {
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    } else {
      setUserName("ooo");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userName");
    router.push("/onboarding");
  };

  useEffect(() => {
    loadUserNameFromLocalStorage();
  }, []);

  return (
    <div className={s.container}>
      <DefaultHeader title="프로필" />
      <div className={s.myInfo}>
        <div className={s.left}>
          <p className={s.name}>{userName}님</p>
          <p className={s.rank}>000점</p>
        </div>
        <div className={s.right}>
          <div className={s.historyBox}>
            <p className={s.success}>성공</p>
            <p className={s.countText}>0개</p>
          </div>
          <div className={s.historyBox}>
            <p className={s.failure}>실패</p>
            <p className={s.countText}>0개</p>
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
