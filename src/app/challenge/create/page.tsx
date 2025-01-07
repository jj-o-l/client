"use client";

import React, { useState } from "react";
import StackHeader from "@/components/StackHeader";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import { IChallenge } from "@/types/IChallenge";
import { useRouter } from "next/navigation";
import axios from "axios";
import * as s from "./style.css";

function Create() {
  const router = useRouter();
  const [formData, setFormData] = useState<IChallenge>({
    id: 0,
    userId: 0,
    title: "",
    description: "",
    categories: [],
    rules: [],
    deadline: "",
    level: 0,
    maxParticipants: 0,
    reward: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addRule = () => {
    setFormData((prev) => ({
      ...prev,
      rules: [...prev.rules, ""],
    }));
  };

  const updateRule = (index: number, value: string) => {
    const updatedRules = [...formData.rules];
    updatedRules[index] = value;
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }));
  };

  const removeRule = (index: number) => {
    const updatedRules = formData.rules.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }));
  };

  const setCategory = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));
  };

  const setDifficulty = (level: number) => {
    setFormData((prev) => ({
      ...prev,
      level,
    }));
  };

  const handleDeadlineChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "date" | "time",
  ) => {
    const { value } = e.target;
    setFormData((prev) => {
      const [currentDate, currentTime] = prev.deadline.split("T");
      return {
        ...prev,
        deadline:
          type === "date"
            ? `${value}T${currentTime || "00:00"}`
            : `${currentDate || ""}T${value}`,
      };
    });
  };

  const handleSubmit = async () => {
    const updatedData = { ...formData };
    updatedData.maxParticipants = parseInt(
      updatedData.maxParticipants.toString(),
      10,
    );
    const [date] = updatedData.deadline.split("T");
    updatedData.deadline = date;
    updatedData.rules = updatedData.rules.filter((rule) => rule.trim() !== "");

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/mission/create`,
        updatedData,
      );
      router.push("/");
    } catch (error) {
      alert("도전 생성 오류");
    }
  };

  const isFormValid =
    formData.title &&
    formData.categories.length &&
    formData.level > 0 &&
    formData.maxParticipants > 0;

  return (
    <div className={s.container}>
      <StackHeader title="도전 생성" />
      <div className={s.layout}>
        <InputLayout
          title="제목"
          placeholder="제목을 입력해 주세요"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <div className={s.textAreaContainer}>
          <p className={s.title}>설명</p>
          <textarea
            className={s.textArea}
            name="description"
            value={formData.description}
            placeholder="이번 도전에 대해 설명해주세요"
            onChange={handleInputChange}
          />
        </div>
        <div className={s.categoryContainer}>
          <p className={s.title}>카테고리</p>
          <div className={s.categoryOptions}>
            {["창의력", "체력", "협력", "학습", "도전", "자연", "감정"].map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  className={`${s.categoryButton} ${
                    formData.categories.includes(category)
                      ? s.selected
                      : s.unselected
                  }`}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </button>
              ),
            )}
          </div>
        </div>
        <div className={s.ruleContainer}>
          <p className={s.title}>규칙</p>
          {formData.rules.map((rule, index) => (
            <div key={index} className={s.rule}>
              <input
                type="text"
                className={s.inputBox}
                value={rule}
                placeholder="규칙"
                onChange={(e) => updateRule(index, e.target.value)}
              />
              <button
                type="button"
                className={s.removeButton}
                onClick={() => removeRule(index)}
              >
                ✕
              </button>
            </div>
          ))}

          <button type="button" className={s.addRuleButton} onClick={addRule}>
            추가
          </button>
        </div>
        <div className={s.deadlineContainer}>
          <p className={s.title}>마감일</p>
          <div className={s.dateTime}>
            <input
              className={s.inputBox}
              type="date"
              onChange={(e) => handleDeadlineChange(e, "date")}
            />
            <input
              className={s.inputBox}
              type="time"
              onChange={(e) => handleDeadlineChange(e, "time")}
            />
          </div>
        </div>
        <div className={s.difficultyContainer}>
          <p className={s.title}>난이도</p>
          <div className={s.stars}>
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                type="button"
                className={
                  level <= formData.level ? s.starSelected : s.starUnselected
                }
                onClick={() => setDifficulty(level)}
              >
                {level <= formData.level ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>
        <InputLayout
          title="최대 참가 인원"
          placeholder="최대 참가 인원을 입력해주세요"
          name="maxParticipants"
          value={formData.maxParticipants.toString()}
          onChange={handleInputChange}
        />
        <InputLayout
          title="리워드"
          placeholder="리워드를 입력해주세요"
          name="reward"
          value={formData.reward}
          onChange={handleInputChange}
        />
      </div>
      <Button
        title="도전 생성"
        onClickMethod={handleSubmit}
        disabled={!isFormValid}
      />
    </div>
  );
}

export default Create;
