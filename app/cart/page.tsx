'use client'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { removeFromCart, updateDays, clearCart } from '../../store/cartSlice'
import Link from 'next/link'

export default function CartPage() {
  const items = useSelector((s: RootState) => s.cart.items)
  const dispatch = useDispatch()

  const totalDays = items.reduce((acc, i) => acc + i.days, 0)
  const buttonClasses = "w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors"


  return (
    <div className="container mx-auto max-w-3xl">
      <h2 className="mb-8 text-3xl font-bold text-slate-900">Seu Carrinho de Locação</h2>

      {items.length === 0 && (
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="mb-4 text-gray-500">Seu carrinho está vazio.</p>
          <Link href="/books">
            <button className={buttonClasses}>Buscar Livros</button>
          </Link>
        </div>
      )}

      {items.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4 md:col-span-2">
            {items.map((it) => (
              <div key={it.key} className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <img
                  src={it.cover || '/favicon.ico'}
                  alt={it.title}
                  className="h-24 w-16 rounded object-cover"
                />
                <div className="flex-grow">
                  <strong className="text-lg text-slate-900">{it.title}</strong>
                  <div className="text-sm text-gray-500">{it.author}</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min={1}
                      value={it.days}
                      onChange={(e) => dispatch(updateDays({ key: it.key, days: Number(e.target.value) }))}
                      className="w-16 rounded border-gray-300 text-center"
                    />
                    <span>dias</span>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(it.key))}
                    className="bg-transparent p-1 text-sm text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:col-span-1 h-fit">
            <h3 className="mb-4 text-xl font-semibold text-slate-900">Resumo</h3>
            <div className="mb-4 flex justify-between">
              <span>Total de itens:</span>
              <span>{items.length}</span>
            </div>
            <div className="mb-6 flex justify-between text-lg font-bold">
              <span>Soma de dias:</span>
              <span>{totalDays}</span>
            </div>
            <button
              onClick={() => {
                alert('Simulação: locação finalizada!')
                dispatch(clearCart())
              }}
              className={`${buttonClasses} w-full p-4`}
            >
              Finalizar Locação
            </button>
          </div>
        </div>
      )}
    </div>
  )
}