export const metadata = {
  title: "Portfolio Page",
  description: "Frontend for a developer portfolio page."
}

export default function RootLayout( { children } ) {
  return (
    <html lang="en">
      <body>{ children }</body>
    </html>
  )
}
