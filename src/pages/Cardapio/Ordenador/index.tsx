import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

export type OpcoesOrdenador = '' | 'porcao' | 'qtd_pessoas' | 'preco';
interface Props {
  order: OpcoesOrdenador,
  setOrder: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

export default function Order({ order, setOrder }: Props) {
  const [open, setOpen] = useState(false);
  const nameOrder = order && opcoes.find(item => item.value === order)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles['ordenador--ativo']]: order!== ''
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrder || 'Ordenar Por'}</span>
      {open ? (<MdKeyboardArrowUp size={20} />) : (<MdKeyboardArrowDown size={20} />)}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: open,
      })}>
        {opcoes.map((option) => (
          <div className={styles.ordenador__option} key={option.value} onClick={() => setOrder(option.value as OpcoesOrdenador)}>
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  );
}