export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-us">
      <head />
      <body>{children}</body>
    </html>
  )
}
