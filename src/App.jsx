import { useState } from 'react'
import ProductList from './components/ProductList'
import AddProductForm from './components/AddProductForm'
import './App.css'

export default function App() {
  // Aqui fica os produtos que eu adiciono no form
  const [meusProdutos, setMeusProdutos] = useState([])

  function adicionarProduto(novo) {
    // Coloca o novo no começo da lista
    setMeusProdutos([novo, ...meusProdutos])
  }

  return (
    <div className="p-4">
      <h1 className="titulo-loja">Minha Lojinha</h1>
      <p className="subtitulo">Produtos da Fake Store API</p>

      <AddProductForm onAdicionar={adicionarProduto} />

      <ProductList produtosExtras={meusProdutos} />
    </div>
  )
}