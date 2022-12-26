type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en-us">
      <head />
      <body>{props.children}</body>
    </html>
  );
}
