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
  cursor: "pointer",
});

export const voteFailure = style({
  textAlign: "center",
  color: "#dc3545",
  cursor: "pointer",
});

// 선택된 상태에 적용될 스타일
export const selected = style({
  backgroundColor: "#007bff", // 선택된 항목의 배경색
  color: "white", // 선택된 항목의 글자색
  borderRadius: "4px", // 선택된 항목에 라운딩 처리
  padding: "5px 10px", // 여백 추가
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
