'use client'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
)

export default function Header() {
  const count = useSelector((state: RootState) => state.cart.items.length)

  return (
    <header className="bg-slate-900 text-slate-200 shadow-md">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 p-4 md:flex-row md:gap-0">
        <div className="text-2xl font-bold">
          <Link href="/" className="text-slate-200 no-underline">
            Ferreira Books
          </Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/books" className="flex items-center gap-2 text-slate-200 no-underline">
            Buscar Livros
          </Link>
          <Link href="/cart" className="flex items-center gap-2 text-slate-200 no-underline">
            <CartIcon />
            <span className="hidden md:inline">Carrinho</span> ({count})
          </Link>
        </nav>
      </div>
    </header>
  )
}