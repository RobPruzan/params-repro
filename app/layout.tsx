import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
      // style={{
      //   height: "100vh",
      // }}
      >
        <Link href="/">Projects</Link>
        <Link href="/blog">Blog</Link>
        <main>{children}</main>
      </body>
    </html>
  );
}
