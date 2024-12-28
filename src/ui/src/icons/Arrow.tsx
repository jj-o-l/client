import React from "react";

interface ArrowProps {
  onClick: () => void;
}

function Arrow({ onClick }: ArrowProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M7 11.6876C7 12.0304 7.12733 12.3242 7.40157 12.5788L15.0215 20.0421C15.237 20.2576 15.5113 20.3751 15.8345 20.3751C16.4809 20.3751 17 19.8658 17 19.2096C17 18.8864 16.8629 18.6024 16.6474 18.3771L9.78159 11.6876L16.6474 4.99804C16.8629 4.77277 17 4.47894 17 4.16552C17 3.5093 16.4809 3 15.8345 3C15.5113 3 15.237 3.11753 15.0215 3.33301L7.40157 10.7865C7.12733 11.0509 7 11.3448 7 11.6876Z"
        fill="#1F1E23"
      />
    </svg>
  );
}

export default Arrow;
