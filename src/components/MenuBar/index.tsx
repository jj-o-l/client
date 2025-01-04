"use client";

import Home from "@/ui/src/icons/Home";
import { useRouter } from "next/navigation";
import Ranking from "@/ui/src/icons/Ranking";
import Profile from "@/ui/src/icons/Profile";
import * as s from "./style.css";

interface MenuBarProps {
  selectState: number;
}

const icons = [
  { icon: Home, title: "홈", location: "/" },
  { icon: Ranking, title: "랭킹", location: "/ranking" },
  { icon: Profile, title: "프로필", location: "/profile" },
];

function MenuBar({ selectState }: MenuBarProps) {
  const router = useRouter();

  return (
    <div className={s.layout}>
      {icons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <button
            type="button"
            key={item.title}
            className={s.icon}
            onClick={() => {
              router.push(item.location);
            }}
            onKeyDown={() => {
              router.push(item.location);
            }}
          >
            <IconComponent
              fill={selectState === index + 1 ? "#FF6F61" : "#C5C5C5"}
            />
            <div
              className={selectState === index + 1 ? s.titleSelected : s.title}
            >
              {item.title}
            </div>
          </button>
        );
      })}
    </div>
  );
}

export default MenuBar;
