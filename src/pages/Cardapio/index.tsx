import styles from './Cardapio.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'

export default function Main() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  )
}