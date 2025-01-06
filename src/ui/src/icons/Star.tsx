import React from "react";

function Star({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.84667 1L6.6925 6.28L1 6.70167L5.36333 10.3867L3.9975 15.9233L8.84667 12.9167M8.84667 1L11.0008 6.28L16.6933 6.70167L12.33 10.3867L13.6958 15.9233L8.84667 12.9167"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Star;
