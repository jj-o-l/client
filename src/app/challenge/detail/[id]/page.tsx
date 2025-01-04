import React from "react";
import StackHeader from "@/components/StackHeader";
import * as s from "./style.css";
import Star from "@/ui/src/icons/Star";
import Certification from "@/components/Certification";

function Detail() {
  return (
    <>
      <StackHeader title="도전 상세" />
      <div className={s.container}>
        <div className={s.top}>
          <p className={s.title}>수박 빨리 먹기</p>
          <p className={s.greyText}>도전 & 극복</p>
        </div>
        <div className={s.infos}>
          <p className={s.greyText}>추성우 · 1시간 전</p>
        </div>
        <p className={s.desc}>
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
          요즘 유행하는 수박 빨리 먹기입니다. 10초 만에 한 조각을 클리어하셈
        </p>
        <div className={s.hr} />
        <div className={s.explainBox}>
          <div className={s.contentBox}>
            <p className={s.contentText}>규칙</p>
            <ul>
              <li className={s.contentItem}>체크리스트입니다.</li>
              <li className={s.contentItem}>체크리스트입니다.</li>
            </ul>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>난이도</p>
            <div className={s.stars}>
              <Star color="#FF6F61" />
              <Star color="#FF6F61" />
              <Star color="#FF6F61" />
              <Star color="#B5B5B5" />
              <Star color="#B5B5B5" />
            </div>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>마감일</p>
            <div className={s.contentItem}>2024.12.14 오전 1시 40분</div>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>리워드</p>
            <div className={s.contentItem}>500코인</div>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>성공 인원</p>
            <div className={s.contentItem}>5명</div>
          </div>
          <p className={s.certificationText}>인증글</p>
          <div className={s.certificationList}>
            <Certification />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
