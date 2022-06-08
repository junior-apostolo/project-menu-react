import itens from 'data/cardapio.json';
import Item from './Item';
import styles from './Itens.module.scss';
import { useEffect, useState } from 'react';

interface Props {
  busca: string,
  filtro: number | null,
  order: string
}

export default function Itens(props: Props) {
  const [lista, setLista] = useState(itens);
  const { busca, filtro, order } = props;

  function testaBusca(title: string) {
    const regex = new RegExp(busca, 'i');
    return regex.test(title);
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordencaoCrescente(array: typeof itens, prop: 'size' | 'serving' | 'price'){
    return array.sort((a, b) => (a[prop] > b[prop] ? 1 : -1));
  }

  function ordenar(newList: typeof itens) {
    switch (order) {
    case 'porcao':
      return ordencaoCrescente(newList, 'size');
    case 'qtd_pessoas':
      return ordencaoCrescente(newList, 'serving');
    case 'preco':
      return ordencaoCrescente(newList, 'price');
    default:
      return newList;
    }
  }

  useEffect(() => {
    const newList = itens.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(newList));
  }, [busca, filtro, order]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}