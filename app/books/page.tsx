'use client'
import { useState } from 'react'
import { useSearchBooksQuery } from '../../store/api'
import BookCard from '../../components/BookCard'

export default function BooksPage() {
  const [q, setQ] = useState('harry potter')
  const { data, error, isLoading } = useSearchBooksQuery({ q })

  return (
    <div>
      <h2>Buscar Livros</h2>
      <div style={{ marginBottom: 12 }}>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Pesquisar título, autor..." />
      </div>

      {isLoading && <div>Carregando...</div>}
      {error && <div>Erro ao buscar</div>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 12 }}>
        {data?.docs?.map((book: any) => (
          <BookCard key={book.key || book.cover_edition_key} book={book} />
        ))}
      </div>
    </div>
  )
}