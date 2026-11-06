import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputNumber } from 'primereact/inputnumber'
import { Button } from 'primereact/button'
import './AddProductForm.css'

// Esse form manda o produto novo lá pro App.jsx
export default function AddProductForm({ onAdicionar }) {
  const [titulo, setTitulo] = useState('')
  const [preco, setPreco] = useState(0)
  const [categoria, setCategoria] = useState('')

  function salvar() {
    if (!titulo) {
      alert('Digite um nome pro produto')
      return
    }

    const novo = {
      id: Date.now(),
      title: titulo,
      price: preco,
      category: categoria || 'novo',
      description: 'Produto adicionado pelo usuário',
      image: 'https://via.placeholder.com/200'
    }

    onAdicionar(novo)
    setTitulo('')
    setPreco(0)
    setCategoria('')
  }

  return (
    <div className="form-box">
      <h3>Adicionar novo produto</h3>

      {/* No celular fica um embaixo do outro, no PC fica lado a lado */}
      <div className="grid form-grid">
        <div className="col-12">
          <label>Nome do produto</label>
          <InputText value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Ex: Camiseta" className="w-full" />
        </div>

        <div className="col-12 md:col-6">
          <label>Preço</label>
          <InputNumber value={preco} onValueChange={(e) => setPreco(e.value)} className="w-full" inputClassName="w-full" />
        </div>

        <div className="col-12 md:col-6">
          <label>Categoria</label>
          <InputText value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="Ex: Roupa" className="w-full" />
        </div>

        <div className="col-12">
          <Button label="Adicionar produto" icon="pi pi-plus" onClick={salvar} className="w-full" />
        </div>
      </div>
    </div>
  )
}