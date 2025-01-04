import { style } from "@vanilla-extract/css";

export const rankBase = style({
  width: "100%",
  padding: "15px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "8px",
  fontSize: "16px",
});

export const firstRank = style({
  backgroundColor: "gold",
  border: "1px solid gold",
});

export const secondRank = style({
  backgroundColor: "#f8f8f8",
  border: "1px solid silver",
});

export const thirdRank = style({
  backgroundColor: "#f8f8f8",
  border: "1px solid #CD7F32",
});

export const defaultRank = style({
  backgroundColor: "#fff",
  border: "1px solid black",
});

export const left = style({
  display: "flex",
  gap: "10px",
  alignItems: "center",
});

export const rankingText = style({
  color: "black",
  fontSize: "17px",
  fontWeight: "bold",
});

export const nameText = style({
  color: "black",
  fontSize: "14px",
  fontWeight: "500",
});

export const scoreText = style({
  color: "black",
  fontSize: "14px",
});
