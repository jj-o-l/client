import React from "react";
import * as s from "./style.css";

interface ButtonProps {
  title: string;
  onClickMethod: () => void;
  disabled: boolean;
}

function Button({ title, onClickMethod, disabled }: ButtonProps) {
  return (
    <button
      type="button"
      tabIndex={0}
      className={s.container}
      onClick={onClickMethod}
      disabled={!disabled}
      style={{ background: disabled ? "#BCBCBC" : "#FF6F61" }}
    >
      {title}
    </button>
  );
}

export default Button;
