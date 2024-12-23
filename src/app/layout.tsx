import "@/ui/styles/global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body style={{ display: "flex" }}>{children}</body>
    </html>
  );
}
