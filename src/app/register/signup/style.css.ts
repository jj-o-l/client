import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
});

export const layout = style({
  display: "flex",
  width: "100%",
  padding: "20px",
});

export const title = style({
  fontSize: "24px",
  color: "black",
  fontWeight: "bold",
});
