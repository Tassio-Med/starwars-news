import Head from "next/head"

import styles from './styles.module.scss';
import Link from "next/link";
import Image from "next/image";
import thumbImg from '../../../public/imagens/chicagobanner.jpg'

export default function Posts() {
  return (
    <>
      <Head>
        <title>
          Blog | Star Wars News
        </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/" legacyBehavior>
            <a>
              <Image 
                src={thumbImg}
                alt="Banner do evento em Chicago"
                width={720}
                height={410}
                quality={100}
              />
              <strong>Criando meu primeiro aplicativo</strong>
              <time>14 JULHO 2021</time>
              <p>Hoje vamos criar o controle de mostrar a senha no input, uma opção para os nossos formulários de cadastro e login. Mas chega de conversa e bora pro código junto comigo que o vídeo está show de bola!</p>
            </a>
          </Link>
        </div>
      </main>
    </>
  )
}
