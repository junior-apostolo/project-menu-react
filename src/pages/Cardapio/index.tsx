import styles from './Cardapio.module.scss';
import Search from './Buscador';
import { useState } from 'react';
import Filters from './Filtros';
import Order, { OpcoesOrdenador } from './Ordenador';
import Itens from './Itens';
import stylesTema from 'styles/Tema.module.scss';


export default function Main() {
  const [busca, setBusca] = useState('');
  const [filtro, setFiltro] = useState<number | null>(null);
  const [order, setOrder] = useState<OpcoesOrdenador>('');

  return (
    <section className={styles.cardapio}>
      <h3 className={stylesTema.titulo}>Cardápio</h3>
      <Search busca={busca} setBusca={setBusca} />
      <div className={styles.cardapio__filtros}>
        <Filters filtro={filtro} setFiltro={setFiltro} />
        <Order order={order} setOrder={setOrder} />
      </div>
      <Itens busca={busca} filtro={filtro} order={order} />
    </section>
  );
}