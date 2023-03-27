import Footer from '@/ui/footer'
import Header from '@/ui/header'
import LeftMenu from '@/ui/left-menu'
import RightMenu from '@/ui/right-menu'
import '../styles/globals.scss'

export const metadata = {
  title: 'BN House',
  description: 'Melhor academia de Irecê-BA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='app-container'>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:wght@300;400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Header/>
        {children}
        <Footer />
        <LeftMenu />
        <RightMenu />
      </body>
    </html>
  )
}
