import React from 'react'
import styles from './Produtos.module.css'

const Produtos = () => {

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then(response => response.json())
      .then(json => console.log(json))
  }, []);
  return (
    <div className={styles.produto}>
      <h1>Produtos</h1>
    </div>
  )
}

export default Produtos
