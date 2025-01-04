import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  padding: "10px 20px 90px",
  display: "flex",
  flexDirection: "column",
});

export const explain = style({
  fontSize: "15px",
  marginTop: "10px",
  fontWeight: "500",
});

export const point = style({
  color: "#FF6F61",
});

export const top10 = style({
  color: "#FF6F61",
  fontSize: "20px",
  fontWeight: "700",
  marginTop: "15px",
});

export const rankList = style({
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
