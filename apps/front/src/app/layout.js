import "./globals.css"

export const metadata = {
  title: "Hackathon 2024",
  description: "Starting kit"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
