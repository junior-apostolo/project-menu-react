import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import Search from './Buscador'
import { useState } from 'react'

export default function Main() {
  const [busca, setBusca] = useState("")
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
      </section>
    </main>
  )
}