import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "auto",
  background: "#F9F9F9",
  borderRadius: "10px",
  padding: "15px 20px",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const top = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  color: "#FF6F61",
  fontSize: "19px",
  fontWeight: "bold",
});

export const category = style({
  fontSize: "14px",
  color: "#666",
});

export const description = style({
  fontSize: "16px",
  color: "#333",
  lineHeight: "1.6",
});

export const footer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "10px",
});

export const author = style({
  fontSize: "12px",
  color: "#999",
});

export const time = style({
  fontSize: "13px",
  color: "#757575",
});
