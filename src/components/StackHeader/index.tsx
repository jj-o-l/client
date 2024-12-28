"use client";

import Arrow from "@/ui/src/icons/Arrow";
import React from "react";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

interface StackHeaderProps {
  title: string;
}

function StackHeader({ title }: StackHeaderProps) {
  const router = useRouter();
  return (
    <div className={s.container}>
      <Arrow
        onClick={() => {
          router.back();
        }}
      />
      <p className={s.title}>{title}</p>
    </div>
  );
}

export default StackHeader;
