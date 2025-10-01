import './globals.css'
import { ReduxProvider } from '../store/provider'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Ferreira Books',
  description: 'Aplicação de locação de livros com Next + RTK Query',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="flex min-h-full flex-col bg-slate-50 font-sans text-slate-800">
        <ReduxProvider>
          <Header />
          <main className="flex-grow p-4 md:p-8">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}