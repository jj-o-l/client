import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "10px 20px",
});

export const myInfo = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  marginTop: "20px",
  backgroundColor: "#f3f3f3",
  padding: "15px 20px",
  height: "100px",
  borderRadius: "10px",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const name = style({
  fontSize: "16px",
  fontWeight: "bold",
});

export const rank = style({
  fontSize: "28px",
  fontWeight: "bold",
});

export const right = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const historyBox = style({
  display: "flex",
  gap: "8px",
});

export const success = style({
  fontSize: "16px",
  color: "#75DD9B",
});

export const failure = style({
  fontSize: "16px",
  color: "#FD4E51",
});

export const countText = style({
  fontSize: "16px",
});

export const menuList = style({
  marginTop: "30px",
});

export const menu = style({
  padding: "12px 0",
  fontSize: "16px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
