import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 20px 100px",
  overflowY: "hidden",
  position: "relative",
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

export const createButton = style({
  display: "flex",
  position: "fixed",
  bottom: "110px",
  padding: "10px",
  background: "#FF6F61",
  borderRadius: "100%",
  right: "20px",
});
