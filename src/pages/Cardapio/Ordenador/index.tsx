import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'

export default function Order() {
  return (
    <button className={styles.ordenador}>
      <span>Ordenar Por</span>
      <div className={styles.ordenador__options}>
        {opcoes.map((option) => (
          <div className={styles.ordenador__option} key={option.value}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}