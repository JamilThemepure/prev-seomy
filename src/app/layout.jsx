
import "../styles/index.scss"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Digital Marketing & SEO Agency Next js Template</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  )
}
