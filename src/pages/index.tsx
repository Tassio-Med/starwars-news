import { GetStaticProps } from 'next';
import { getPrismiscClient } from '../services/prismic';
import { RichText } from 'prismic-dom';

import Prismic from '@prismicio/client';

import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Image from 'next/image';

import techsImage from '../../public/imagens/logo.png';

type Content = {
  title: string,
  titleContent: string,
  linkAction: string,
  mobileTitle: string,
  mobileContent: string,
  mobileBanner: string,
  webTitle: string,
  webContent: string,
  webBanner: string,
}

interface ContentProps {
  content: Content;
}

export default function Home({ content }: ContentProps) {
  console.log(content);

  return (
   <>
    <Head>
      <title>Home | StarWars News </title>
    </Head>
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>{content.title}</h1>
          <span>{content.titleContent}</span>
          <a href={content.linkAction}>
            <button>
              COMEÇAR TOUR
            </button>
          </a>
        </section>

        <img 
            src="/imagens/death_star.png" 
            alt="Estrela da Morte Star Wars em 3D" 
        />
      </div>

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <section>
          <h2>{content.mobileTitle}</h2>
          <span>{content.mobileContent}</span>
        </section>

        <img src={content.mobileBanner} alt="Conteúdos desenvolvimento de apps" />
      </div>

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <img src={content.webBanner} alt="Conteúdos desenvolvimento de aplicacoes web" />

        <section>
          <h2>{content.webTitle}</h2>
          <span>{content.webContent}</span>
        </section>
      </div>
       
      <div className={styles.nextLevelContent}>
        <Image quality={100} src={techsImage} alt="Tecnologias" />
        <h2>Pellentesque commodo <span className={styles.alunos}>15 elit</span> at imperdiet dui accumsan sit amet.</h2>
        <span>In aliquam sem fringilla ut morbi tincidunt. </span>
        <a href={content.linkAction}>
          <button>ACESSAR</button>
        </a>
      </div>

    </main>
   </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismiscClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'home')
  ])
  // console.log(response.results[0].data);

  const {
    title, sub_title, link_action,
    mobile, mobile_content, mobile_banner,
    title_web, web_content, web_banner
  } = response.results[0].data;

  const content = {
    title:  RichText.asText(title),
    titleContent:  RichText.asText(sub_title),
    linkAction: link_action.url,
    mobileTitle:  RichText.asText(mobile),
    mobileContent:  RichText.asText(mobile_content),
    mobileBanner: mobile_banner.url,
    webTitle:  RichText.asText(title_web),
    webContent:  RichText.asText(web_content),
    webBanner:  web_banner.url,
  };


  return {
    props: {
      content
    },
    revalidate: 60 * 2 
  }
}