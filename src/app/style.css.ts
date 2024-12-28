import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 20px 100px",
  overflowY: "hidden",
});

export const comment = style({
  fontSize: "16px",
  color: "black",
  fontWeight: "600",
});

export const challenges = style({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px",
  overflowY: "auto",
});
