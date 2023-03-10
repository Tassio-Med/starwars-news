import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        <title>Create Next App</title>
        <h1>Projeto</h1>
      </Head>
    </div>
  )
}
