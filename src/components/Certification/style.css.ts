import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

export const title = style({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const time = style({
  fontSize: "12px",
  color: "#aaa",
  textAlign: "right",
});

export const content = style({
  display: "flex",
  gap: "10px",
  margin: "20px 0",
});

export const imageBox = style({
  width: "100%",
  height: "max-content",
});

export const checkboxContainer = style({
  margin: "20px 0",
});

export const checkboxItem = style({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
});

export const checkbox = style({
  width: "16px",
  height: "16px",
  cursor: "not-allowed",
});

export const checkboxLabel = style({
  fontSize: "14px",
  color: "#333",
});

export const votes = style({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "20px",
});

export const voteSuccess = style({
  textAlign: "center",
  color: "#28a745",
});

export const voteFailure = style({
  textAlign: "center",
  color: "#dc3545",
});

export const voteLabel = style({
  fontSize: "14px",
  fontWeight: "bold",
});

export const voteCount = style({
  fontSize: "16px",
  fontWeight: "bold",
  marginTop: "5px",
});

export const author = style({
  fontSize: "12px",
  color: "#aaa",
  textAlign: "center",
  marginTop: "20px",
});
