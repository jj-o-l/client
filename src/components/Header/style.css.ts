import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  padding: "20px",
  display: "flex",
  alignItems: "center",
});

export const title = style({
  fontSize: "18px",
  fontWeight: 600,
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
});
