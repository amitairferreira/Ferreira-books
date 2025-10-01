import Link from 'next/link'

export default function Home() {
  const buttonClasses = "text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"
  return (
    <main className="flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Bem-vindo à Ferreira Books</h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">Use a busca para encontrar livros e adicioná-los ao seu carrinho de locação.</p>
      <div className="mt-8">
        <Link href="/books">
          <button className={`${buttonClasses} px-8 py-4 text-lg`}>
            Buscar Livros
          </button>
        </Link>
      </div>
    </main>
  )
}