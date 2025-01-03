"use client";

import React from "react";
import * as s from "./style.css";

interface InputLayoutProps {
  title: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function InputLayout({
  title,
  placeholder,
  name,
  value,
  onChange,
  type,
}: InputLayoutProps) {
  return (
    <div className={s.container}>
      <label className={s.title} htmlFor={name}>
        {title}
      </label>
      <input
        className={s.inputBox}
        id={name}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

InputLayout.defaultProps = {
  type: "text",
};

export default InputLayout;
