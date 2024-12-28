import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  color: "white",
  position: "fixed",
  bottom: 0,
  zIndex: 100,
  height: "90px",
  fontSize: "18px",
  paddingTop: "18px",
});
