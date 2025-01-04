"use client";

import React, { useState } from "react";
import * as s from "./style.css";
import StackHeader from "@/components/StackHeader";
import InputLayout from "@/components/InputLayout";
import Upload from "@/ui/src/icons/Upload";

const Certify = () => {
  const [formData, setFormData] = useState({
    title: "",
    rules: [] as { id: string; value: string }[],
    files: [] as File[],
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
        <div className={s.uploadButton}>
          <Upload />
          파일 업로드
        </div>
        <div className={s.uploadedFiles}>
          <img src="1" alt="1" />
        </div>
      </div>
    </>
  );
};

export default Certify;
