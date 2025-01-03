import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  paddingBottom: "100px",
});

export const layout = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px",
});

export const title = style({
  color: "#000",
  fontSize: "16px",
  fontWeight: 500,
  marginBottom: "8px",
});

export const textAreaContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const textArea = style({
  padding: "15px 16px",
  fontSize: "15px",
  borderRadius: "8px",
  border: "1px solid #f0f0f0",
  outline: "none",
  resize: "none",
  height: "120px",
  ":focus": {
    borderColor: "#FF6F61",
  },
  "::placeholder": {
    color: "#d9d9d9",
    fontSize: "15px",
    fontWeight: 500,
  },
});

export const categoryContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const categoryOptions = style({
  width: "100%",
  flexWrap: "wrap",
  display: "flex",
  gap: "10px",
});

export const categoryButton = style({
  padding: "10px 20px",
  borderRadius: "20px",
  border: "1px solid #ccc",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
});

export const selected = style({
  backgroundColor: "#FF6F61",
  color: "#fff",
});

export const unselected = style({
  backgroundColor: "#fff",
  color: "#000",
});

export const ruleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const rule = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 15px",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
  border: "1px solid #ccc",
});

export const removeButton = style({
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
});

export const addRuleButton = style({
  padding: "10px 15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  backgroundColor: "#fff",
  fontSize: "14px",
  cursor: "pointer",
});

export const deadlineContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const dateTime = style({
  display: "flex",
  gap: "10px",
});

export const inputBox = style({
  padding: "10px 15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  width: "100%",
});

export const difficultyContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const stars = style({
  display: "flex",
  gap: "5px",
});

export const starSelected = style({
  fontSize: "20px",
  color: "#FF6F61",
});

export const starUnselected = style({
  fontSize: "20px",
  color: "#ccc",
});
