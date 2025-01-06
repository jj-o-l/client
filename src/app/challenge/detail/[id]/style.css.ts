import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "0 20px 40px",
  width: "100%",
  height: "100%",
});

export const top = style({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});

export const title = style({
  color: "#FF6F61",
  fontSize: "20px",
  fontWeight: "bold",
});

export const categories = style({
  display: "flex",
  gap: "4px",
});

export const greyText = style({
  fontSize: "12px",
  color: "#888888",
});

export const infos = style({
  marginTop: "8px",
});

export const desc = style({
  marginTop: "8px",
  fontSize: "14px",
});

export const hr = style({
  marginTop: "12px",
  width: "100%",
  height: "1px",
  background: "#d3d3d3",
});

export const explainBox = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "12px",
});

export const challengeButton = style({
  padding: "8px 12px",
  position: "absolute",
  background: "#FF6F61",
  borderRadius: "4px",
  color: "white",
  fontSize: "16px",
  top: "5px",
  right: "20px",
});

export const contentItem = style({
  fontSize: "14px",
});

export const contentBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const contentText = style({
  fontSize: "14px",
  fontWeight: "bold",
});

export const stars = style({
  display: "flex",
  gap: "4px",
});

export const certificationText = style({
  fontSize: "18px",
  fontWeight: "bold",
});

export const certificationList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
