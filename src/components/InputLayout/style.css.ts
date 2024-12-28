import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const title = style({
  color: "#000",
  fontSize: "16px",
  fontWeight: 500,
});

export const inputBox = style({
  padding: "15px 16px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "1px solid #f0f0f0",
  outline: "none",

  ":focus": {
    borderColor: "#FF6F61",
  },

  "::placeholder": {
    color: "#d9d9d9",
    fontSize: "15px",
    fontWeight: 500,
  },
  caretColor: "#FF6F61",
});
