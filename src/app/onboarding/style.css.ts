import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  padding: "0 20px",
});

export const title = style({
  fontSize: "28px",
  fontWeight: "bold",
  marginTop: "40px",
  alignSelf: "flex-start",
});

export const nameSpan = style({
  color: "#FF6F61",
});

export const logoImg = style({
  width: "320px",
  height: "320px",
  marginTop: "80px",
});
