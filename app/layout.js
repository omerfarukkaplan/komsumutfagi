export const metadata = {
  title: "KomşuMutfağı",
  description: "Mahalle bazlı yemek platformu"
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body style={{margin:0,fontFamily:"sans-serif"}}>
        {children}
      </body>
    </html>
  )
}
