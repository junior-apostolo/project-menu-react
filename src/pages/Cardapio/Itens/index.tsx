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
  const { busca, filtro } = props

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i')

    return regex.test(title)
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id
  }

  useEffect(() => {
    const newList = itens.filter(item => testaBusca(item.title) && testaFiltro(item.category.id))
    setLista(newList)
  }, [busca, filtro])

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