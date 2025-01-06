import React from "react";
import * as s from "./style.css";

interface CardProps {
  title: string;
  categories: string[];
  description: string;
}

function ChallengeCard({ title, categories, description }: CardProps) {
  return (
    <div className={s.container}>
      <div className={s.top}>
        <p className={s.title}>{title}</p>
        {/* <p className={s.time}>1시간 전</p> */}
      </div>
      <div className={s.categories}>
        {categories.map((category) => (
          <p key={category} className={s.category}>
            {category}
          </p>
        ))}
      </div>
      <p className={s.description}>{description}</p>
      <div className={s.footer}>
        <p className={s.author}>추성우</p>
      </div>
    </div>
  );
}

export default ChallengeCard;
