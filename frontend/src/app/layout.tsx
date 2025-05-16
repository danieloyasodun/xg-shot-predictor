import "./globals.css";

export const metadata = {
  title: {
    default: "xG Dashboard",
    template: "%s | xG Dashboard", // This makes pages show like "Home | xG Dashboard"
  },
  description: "Interactive Expected Goals analysis tool for football analytics.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
