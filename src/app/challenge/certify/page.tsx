"use client";

import React, { useState, useEffect, Suspense } from "react";
import StackHeader from "@/components/StackHeader";
import InputLayout from "@/components/InputLayout";
import Button from "@/components/Button";
import { useSearchParams, useRouter } from "next/navigation";
import * as s from "./style.css";

function CertifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const missionId = searchParams.get("missionId");

  const [formData, setFormData] = useState({
    userId: 1,
    missionId: missionId ? Number(missionId) : null,
    title: "",
    rules: [] as { id: string; value: string }[],
  });

  useEffect(() => {
    if (missionId) {
      setFormData((prev) => ({
        ...prev,
        missionId: Number(missionId),
      }));
    }
  }, [missionId]);

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
    if (missionId) {
      const certificationData = {
        userId: formData.userId,
        missionId: formData.missionId,
        title: formData.title,
        rules: formData.rules,
      };

      const storedCertifications = localStorage.getItem("certifications");
      const certifications = storedCertifications
        ? JSON.parse(storedCertifications)
        : [];
      certifications.push(certificationData);
      localStorage.setItem("certifications", JSON.stringify(certifications));

      alert("인증을 성공하였습니다.");
      router.back();
    } else {
      alert("도전글이 선택되지 않았습니다.");
    }
  };

  return (
    <div>
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
          <p className={s.title}>체크리스트</p>
          {formData.rules.map((rule) => (
            <div key={rule.id} className={s.rule}>
              <input
                type="text"
                className={s.inputBox}
                value={rule.value}
                placeholder="체크리스트"
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
            체크리스트 추가
          </button>
        </div>
      </div>
      <Button
        title="인증하기"
        onClickMethod={handleSubmit}
        disabled={!formData.title}
      />
    </div>
  );
}

function Certify() {
  return (
    <Suspense>
      <CertifyPage />
    </Suspense>
  );
}

export default Certify;
