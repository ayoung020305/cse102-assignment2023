import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className={styles.title}>
                  <span class="white"> MAFIA </span> <span class="red">42</span>
        </h1>

        <p className={styles.description}>
          [ 9th ANNIVERSARY ]
        </p>

        <div className={styles.grid}>
          <Link href="/posts/first-post" className={styles.card}>
            <h3>UPDATE &rarr;</h3>
                      <p>Find out recent updates of the game.</p>
          </Link>

                  <a href="https://cafe.naver.com/mafia42/2336325" className={styles.card}>
            <h3>EVENT &rarr;</h3>
            <p>Find out instructions for the event game.</p>
          </a>

          <a
                      href="https://mafia42.com/#/gameInfo/rank/rankpoint"
            className={styles.card}
          >
            <h3>RANK &rarr;</h3>
            <p>Who will recieve the royal crown of season 9?</p>
          </a>

          <a
                      href="https://cafe.naver.com/mafia42"
            className={styles.card}
          >
            <h3>NOTICE &rarr;</h3>
            <p>
              Check-out recent notices of the game.
            </p>
          </a>
        </div>
      </main>

          <footer>
        <a
                  href="https://mafia42.com/"
          target="_blank"
          rel="noopener noreferrer"
              >
                  <img src="https://mafia42.com/images/team-42-logo.png" alt="TEAM42" className={styles.logo} />

        </a>
          </footer>

          <bottom>
              <a href="https://www.team42.co.kr/">
                      home page</a> | privacy policy
              <p>2022 TEAM42 All Rights Reserved</p>
          </bottom>

          <style jsx>{` 
        h1 span{
            display: block;
}
        h1 span.white{
            color: white;
}
        h1 span.red {
            color: red;
}

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
            color: white;
           background-image:url('https://pbs.twimg.com/media/Fo_iV-qaEAgQHZd?format=jpg&name=large');
            background-repeat: no-repeat;
            background-size:800px;
  

        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: black;
            color: white;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        bottom{
            color: grey;
          
}
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          background-color: black;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
