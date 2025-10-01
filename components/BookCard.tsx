'use client'
import Link from 'next/link'
import { addToCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

export default function BookCard({ book }: { book: any }) {
  const dispatch = useDispatch()
  const key = book.key || book.cover_edition_key || book.edition_key?.[0] || book.id
  const title = book.title
  const author = book.author_name?.join(', ') || book.authors?.map((a: any) => a.name).join(', ')
  const coverId = book.cover_i || book.covers?.[0]
  const cover = coverId ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg` : '/favicon.ico'

  const buttonClasses = "w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"

  return (
    <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-md">
      <img
        src={cover}
        alt={title}
        className="mb-4 h-52 w-full rounded object-contain"
      />
      <div className="flex-grow">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-6 text-sm text-gray-500">{author}</p>
      </div>
      <div className="mt-auto flex flex-col gap-2 md:flex-row">
        <Link href={`/books${key.replace('/works', '')}`} className="flex-1">
          <button className={buttonClasses}>Ver Detalhes</button>
        </Link>
        <button
          onClick={() => dispatch(addToCart({ key, title, author, cover, days: 7 }))}
          className={`${buttonClasses} flex-1`}
        >
          Adicionar
        </button>
      </div>
    </div>
  )
}