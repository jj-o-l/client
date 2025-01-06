"use client";

import React, { useState } from "react";
import StackHeader from "@/components/StackHeader";
import InputLayout from "@/components/InputLayout";
import axios from "axios";
import Button from "@/components/Button";
import * as s from "./style.css";
// import Upload from "@/ui/src/icons/Upload";

function Certify() {
  const [formData, setFormData] = useState({
    userId: 1,
    missionId: 101,
    title: "",
    rules: [] as { id: string; value: string }[],
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      title: e.target.value,
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

  const handleSubmit = () => {
    try {
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/challenge/create`, {
        userId: formData.userId,
        missionId: formData.missionId,
        title: formData.title,
        checkboxes: formData.rules,
      });
    } catch {
      alert("인증 실패");
    }
  };

  return (
    <>
      <StackHeader title="인증글 작성" />
      <div className={s.container}>
        <InputLayout
          title="제목"
          placeholder="제목을 입력해 주세요"
          name="title"
          value={formData.title}
          onChange={handleTitleChange}
        />

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
            규칙 추가
          </button>
        </div>
        {/* <div className={s.uploadButton}>
          <Upload />
          파일 업로드
        </div> */}
      </div>
      <Button
        title="인증하기"
        onClickMethod={handleSubmit}
        disabled={!formData.title}
      />
    </>
  );
}

export default Certify;
