"use client";

import React, { useEffect, useState } from "react";
import StackHeader from "@/components/StackHeader";
import Star from "@/ui/src/icons/Star";
import Certification from "@/components/Certification";
import { IChallenge } from "@/types/IChallenge";
import { ICertification } from "@/types/ICertification";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import * as s from "./style.css";

function Detail() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params.id);

  const [challenge, setChallenge] = useState<IChallenge | null>(null);
  const [certifications, setCertifications] = useState<ICertification[] | null>(
    null,
  );

  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const response = await fetch(`/api/challenges/${id}`);
        const data = await response.json();
        setChallenge(data);
      } catch (error) {
        alert("실패");
      }
    };

    const fetchCertifications = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/mission/${id}`,
        );
        setCertifications(data);
      } catch (error) {
        alert("실패");
      }
    };

    if (id) {
      fetchChallenge();
      fetchCertifications();
    }
  }, [id]);

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
          <button
            type="button"
            className={s.challengeButton}
            onClick={() => {
              router.push(`/challenge/certify?missionId=${id}`);
            }}
            onKeyDown={() => {
              router.push(`/challenge/certify?missionId=${id}`);
            }}
          >
            도전하기
          </button>
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
            {certifications?.map((certification, index) => (
              <Certification
                key={index}
                id={certification.id}
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
