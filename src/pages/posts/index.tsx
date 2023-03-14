import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import Prismic from '@prismicio/client';

import Head from "next/head"

import styles from './styles.module.scss';
import Link from "next/link";
import Image from "next/image";
import thumbImg from '../../../public/imagens/chicagobanner.jpg'

import { FiChevronLeft, FiChevronsLeft, FiChevronRight, FiChevronsRight} from 'react-icons/fi';

type Post = {
  slug: string;
  title: string; 
  description: string; 
  cover: string; 
  updatedAt: string
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
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

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#FFF" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronRight size={25} color="#FFF" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#FFF" />
              </button>
            </div>
            
         </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('documente.type', 'post')
  ], {
    orderings: '[document.last_publication_date desc]',
    fetch: ['post.title', 'post.description', 'post.cover'],
    pageSize: 3
  })

  // console.log(JSON.stringify(response, null, 2))

  const posts = response.results.map( post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description: post.data.descritption.find(content => content.type === 'paragraph')?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 60 * 30
  }
}

