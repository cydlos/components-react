import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/typewriter.jpeg'
import Head from './Head'

export const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft` }>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Typewriter" />
      <div>
        <h1>Contato</h1>
        <ul>
          <li>e-mail: blabla@gmail.com</li>
          <li>phone number: 9999-9999</li>
          <li>address: Blabla St. 498</li>
        </ul>
      </div>
    </section>
  )
}

export default Contato
