// Componente só pra mostrar um produto, ele recebe tudo por props
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import './ProductCard.css'

export default function ProductCard({ produto }) {

  // Rodapé agora com preço em cima e botão embaixo, não fica grudado
  const rodape = (
    <div className="card-rodape">
      <span className="preco">R$ {produto.price}</span>
      <Button label="Comprar" icon="pi pi-shopping-cart" size="small" className="w-full" />
    </div>
  )

  // Título e categoria eu monto aqui pra controlar o tamanho
  const cabecalho = (
    <div>
      <h3 className="titulo-produto">{produto.title}</h3>
      <span className="categoria">{produto.category}</span>
    </div>
  )

  return (
    <Card header={cabecalho} footer={rodape} className="card-produto">
      <div className="area-foto">
        <img src={produto.image} alt={produto.title} className="foto-produto" />
      </div>
      <p className="descricao">{produto.description}</p>
    </Card>
  )
}