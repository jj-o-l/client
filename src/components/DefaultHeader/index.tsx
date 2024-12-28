import React from "react";
import * as s from "./style.css";

interface DefaultHeaderProps {
  title: string;
}

function DefaultHeader({ title }: DefaultHeaderProps) {
  return (
    <header className={s.container}>
      <p className={s.title}>{title}</p>
    </header>
  );
}

export default DefaultHeader;
