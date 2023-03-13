import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
   <>
    <Head>
      <title>Apaixonado por tecnologia - Sujeito Programador</title>
    </Head>
    <main className={styles.container}>
      <div className={styles.containerHeader}>
        <section className={styles.ctaText}>
          <h1>Bem-vindo ao mundo de StarWars!</h1>
          <span>Uma plataforma com cursos que vão do zero até o profissional na pratica, direto ao ponto aplicando o que usamos no mercado de trabalho. 👊</span>
          <a>
            <button>
              COMEÇAR AGORA!
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
          <h2>Aprenda criar aplicativos para Android e iOS</h2>
          <span>Você vai descobrir o jeito mais moderno de desenvolver apps nativos para iOS e Android, construindo aplicativos do zero até aplicativos.</span>
        </section>

        <img src="/imagens/stormtrooper.png" alt="Conteúdos desenvolvimento de apps" />
      </div>

      <hr className={styles.divisor} />

      <div className={styles.sectionContent}>
        <img src="/imagens/darthvader.png " alt="Conteúdos desenvolvimento de aplicacoes web" />

        <section>
          <h2>Aprenda criar sistemas web</h2>
          <span>Criar sistemas web, sites usando as tecnologias mais modernas e requisitadas pelo mercado.</span>
        </section>
      </div>

    </main>
   </>
  )
}