import { style } from "@vanilla-extract/css";

export const layout = style({
  width: "100vw",
  height: "90px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "fixed",
  zIndex: 10,
  bottom: 0,
  right: 0,
  padding: "0 45px 20px",
  backgroundColor: "#fff",
});

export const icon = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const title = style({
  textAlign: "center",
  fontSize: "15px",
  fontWeight: 400,
  color: "#C5C5C5",
});

export const titleSelected = style({
  textAlign: "center",
  fontSize: "15px",
  fontWeight: 400,
  color: "#FF6F61",
});
