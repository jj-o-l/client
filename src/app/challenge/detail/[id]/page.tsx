"use client";

import React, { useEffect, useState } from "react";
import StackHeader from "@/components/StackHeader";
import * as s from "./style.css";
import Star from "@/ui/src/icons/Star";
import Certification from "@/components/Certification";
import { IChallenge } from "@/types/IChallenge";
import axios from "axios";
import { useParams } from "next/navigation";
import { ICertification } from "@/types/ICertification";

function Detail() {
  const params = useParams();
  const id = params.id;

  const [challenge, setChallenge] = useState<IChallenge>();
  const [certifications, setCertifications] = useState<ICertification[]>();

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/mission/${id}`,
        );
        setChallenge(response.data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    const fetchCertifications = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/challenges/${id}`,
        );
        setCertifications(response.data);
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    };

    fetchChallenges();
    fetchCertifications();
  }, []);

  return (
    <>
      <StackHeader title="도전 상세" />
      <div className={s.container}>
        <div className={s.top}>
          <p className={s.title}>{challenge?.title}</p>
          <div className={s.categories}>
            {challenge?.categories.map((category) => (
              <p key={category} className={s.greyText}>
                {category}
              </p>
            ))}
          </div>
        </div>
        <div className={s.infos}>
          <p className={s.greyText}>추성우</p>
        </div>
        <p className={s.desc}>{challenge?.description}</p>
        <div className={s.hr} />
        <div className={s.explainBox}>
          <div className={s.contentBox}>
            <p className={s.contentText}>규칙</p>
            <ul>
              {challenge?.rules.map((rule) => (
                <li key={rule} className={s.contentItem}>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>난이도</p>
            <div className={s.stars}>
              {Array.from({ length: 5 }, (_, index) => (
                <Star
                  key={index}
                  color={
                    index < (challenge?.level || 0) ? "#FF6F61" : "#B5B5B5"
                  }
                />
              ))}
            </div>
          </div>

          <div className={s.contentBox}>
            <p className={s.contentText}>마감일</p>
            <div className={s.contentItem}>{challenge?.deadline}</div>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>리워드</p>
            <div className={s.contentItem}>{challenge?.reward}</div>
          </div>
          <div className={s.contentBox}>
            <p className={s.contentText}>성공 인원</p>
            <div className={s.contentItem}>{challenge?.maxParticipants}명</div>
          </div>
          <p className={s.certificationText}>인증글</p>
          <div className={s.certificationList}>
            {certifications?.map((certification) => (
              <Certification
                key={certification.id}
                title={certification.title}
                checkboxes={certification.checkboxes}
                success={certification.success}
                failed={certification.failed}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
