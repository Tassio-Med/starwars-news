import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';

import Prismic from '@prismicio/client';
import Head from 'next/head';
import style from './styles.module.scss';


type Content = {
  title: string;
  description: string;
  banner: string;
  facebook: string;
  instagram: string;
  youtube: string;
  linkedin: string;
}

interface ContentProps{
  content: Content
}

export default function Sobre({ content }: ContentProps) {
  return (
    <div>Página Sobre</div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'about')
  ])

  const {
    title,
    description,
    banner,
    facebook,
    instagram,
    youtube,
    linkedin
  } = response.results[0].data;

  const content = {
    title: RichText.asText(title),
    description: RichText.asText(description),
    banner: banner.url,
    facebook: facebook.url,
    instagram: instagram.url,
    youtube: youtube.url,
    linkedin: linkedin.url
  };

  return {
    props: {
      content
    }
  }
}