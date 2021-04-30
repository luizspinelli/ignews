import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>29 de abril de 2021</time>
            <strong>Titulo do Post</strong>
            <p>Paragrafo do post onde vai mostrar algum conteúdo do post</p>
          </a>
          <a href="">
            <time>29 de abril de 2021</time>
            <strong>Titulo do Post</strong>
            <p>Paragrafo do post onde vai mostrar algum conteúdo do post</p>
          </a>
          <a href="">
            <time>29 de abril de 2021</time>
            <strong>Titulo do Post</strong>
            <p>Paragrafo do post onde vai mostrar algum conteúdo do post</p>
          </a>
          <a href="">
            <time>29 de abril de 2021</time>
            <strong>Titulo do Post</strong>
            <p>Paragrafo do post onde vai mostrar algum conteúdo do post</p>
          </a>
        </div>
      </main>
    </>
  )
};
