import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Search from './Buscador'
import { useState } from 'react'
import Filters from './Filtros'
import Order from './Ordenador'
import Itens from './Itens'

export default function Main() {
  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState<number | null>(null)
  const [order, setOrder] = useState("")

  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>
          A casa do codigo é massa
        </div>
      </header>
      <section className={styles.cardapio}>
        <h3 className={styles.cardapio__titulo}>Cardápio</h3>
        <Search busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filters filtro={filtro} setFiltro={setFiltro} />
          <Order order={order} setOrder={setOrder} />
        </div>
        <Itens />
      </section>
    </main>
  )
}