import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

export default function ProductList({ produtosExtras }) {
  // Onde eu guardo os produtos que vem da API
  const [produtos, setProdutos] = useState([])
  const [carregando, setCarregando] = useState(true)

  // Quando abre a tela, busca na Fake Store
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((resposta) => {
        setProdutos(resposta.data)
        setCarregando(false)
      })
      .catch((erro) => {
        console.log('Deu erro ao buscar:', erro)
        setCarregando(false)
      })
  }, [])

  if (carregando) {
    return <p style={{ textAlign: 'center' }}>Carregando produtos...</p>
  }

  // Junto os da API + os que o usuario cadastrou no form
  const todos = [...produtosExtras, ...produtos]

   return (
    <div className="grid lista-produtos">
      {todos.map((item) => (
        <div key={item.id} className="col-12 sm:col-6 lg:col-3 p-2">
          <ProductCard produto={item} />
        </div>
      ))}
    </div>
  )
}