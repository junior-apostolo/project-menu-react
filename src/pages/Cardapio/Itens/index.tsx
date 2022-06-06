import itens from './itens.json'
import Item from './Item'
import styles from './Itens.module.scss'
import { useEffect, useState } from 'react'

interface Props {
  busca: string,
  filtro: number | null,
  order: string
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(itens)
  const { busca, filtro, order } = props

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i')

    return regex.test(title)
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id
  }

  function ordenar(newList: typeof itens){
    switch(order){
      case 'porcao':
        return newList.sort((a, b) => a.size > b.size ? 1 : -1)
      case 'qtd_pessoas':
        return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
      case 'preco':
        return newList.sort((a, b) => a.price > b.price ? 1 : -1)
    }
    return newList
  }

  useEffect(() => {
    const newList = itens.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
    setLista(ordenar(newList))
  }, [busca, filtro, order])

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}