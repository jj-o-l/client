"use client";

import React, { useState } from "react";
import StackHeader from "@/components/StackHeader";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import * as s from "./style.css";

interface FormData {
  title: string;
  description: string;
  category: string;
  rules: { id: string; value: string }[];
  deadlineDate: string;
  deadlineTime: string;
  difficulty: number;
  successCount: string;
  reward: string;
}

function Create() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    category: "",
    rules: [],
    deadlineDate: "",
    deadlineTime: "",
    difficulty: 0,
    successCount: "",
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
      rules: [...prev.rules, { id: `${Date.now()}`, value: "" }],
    }));
  };

  const updateRule = (id: string, value: string) => {
    const updatedRules = formData.rules.map((rule) =>
      rule.id === id ? { ...rule, value } : rule,
    );
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }));
  };

  const removeRule = (id: string) => {
    const updatedRules = formData.rules.filter((rule) => rule.id !== id);
    setFormData((prev) => ({
      ...prev,
      rules: updatedRules,
    }));
  };

  const setCategory = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      category,
    }));
  };

  const setDifficulty = (level: number) => {
    setFormData((prev) => ({
      ...prev,
      difficulty: level,
    }));
  };

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
                    formData.category === category ? s.selected : s.unselected
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
          {formData.rules.map((rule) => (
            <div key={rule.id} className={s.rule}>
              <input
                type="text"
                className={s.inputBox}
                value={rule.value}
                placeholder="규칙"
                onChange={(e) => updateRule(rule.id, e.target.value)}
              />
              <button
                type="button"
                className={s.removeButton}
                onClick={() => removeRule(rule.id)}
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
              name="deadlineDate"
              value={formData.deadlineDate}
              onChange={handleInputChange}
            />
            <input
              className={s.inputBox}
              type="time"
              name="deadlineTime"
              value={formData.deadlineTime}
              onChange={handleInputChange}
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
                  level <= formData.difficulty
                    ? s.starSelected
                    : s.starUnselected
                }
                onClick={() => setDifficulty(level)}
              >
                {level <= formData.difficulty ? "★" : "☆"}
              </button>
            ))}
          </div>
        </div>
        <InputLayout
          title="성공 인원"
          placeholder="성공 인원 수를 입력해주세요"
          name="successCount"
          value={formData.successCount}
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
        onClickMethod={() => {
          return 0;
        }}
        disabled={
          !formData.title || !formData.category || formData.difficulty === 0
        }
      />
    </div>
  );
}

export default Create;
