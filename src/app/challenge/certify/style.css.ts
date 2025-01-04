import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 20px",
});

export const ruleContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginTop: "20px",
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

export const title = style({
  color: "#000",
  fontSize: "16px",
  fontWeight: 500,
  marginBottom: "8px",
});

export const inputBox = style({
  padding: "10px 15px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  fontSize: "14px",
  width: "100%",
});

export const uploadButton = style({
  marginTop: "20px",
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  padding: "10px 15px",
  border: "1px solid #ccc",
  fontSize: "14px",
  gap: "4px",
  borderRadius: "8px",
});

export const uploadedFiles = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
