'use client'
import { useParams } from 'next/navigation'
import { useGetWorkQuery } from '../../../store/api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store/cartSlice'

export default function BookDetail() {
  const params = useParams()
  const idParam = params.id || ''
  const id = (Array.isArray(idParam) ? idParam[0] : idParam).replace(/^\//, '')
  const workId = id.startsWith('works/') ? id.replace('works/', '') : id
  const { data, error, isLoading } = useGetWorkQuery(workId)
  const dispatch = useDispatch()

  if (isLoading) return <div>Carregando detalhes...</div>
  if (error || !data) return <div>Detalhes não encontrados</div>

  const title = data.title
  const author = data.authors?.map((a:any)=>a.name).join(', ')
  const cover = data.covers?.[0] ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg` : null

  return (
    <div>
      <h2>{title}</h2>
      <div>{author}</div>
      {cover && <img src={cover} alt={title} style={{ maxWidth: 220 }} />}

      <p>{data.description?.value || data.description || 'Sem descrição.'}</p>

      <div>
        <button onClick={() => dispatch(addToCart({ key: `/works/${workId}`, title, author, cover, days: 7 }))}>
          Alugar por 7 dias (Adicionar ao carrinho)
        </button>
      </div>
    </div>
  )
}