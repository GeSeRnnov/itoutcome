import Head from 'next/head'
import  '../styles/Home.module.scss'
import styles from '../styles/Home.module.scss'
import MainLayout from '../layouts/MainLayout';
import ThumbsUp from 'bootstrap-icons/icons/hand-thumbs-up.svg'
import Alarm from 'bootstrap-icons/icons/alarm.svg'
import Shield from 'bootstrap-icons/icons/shield.svg'


// const styles = {}
export default function Home() {
  return (<>
    <MainLayout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className={styles.greeting}>
            <h1 className={styles.title}>
              Разработка IT решений и поддержка для вашего бизнеса
            </h1>
          </div>
          <div className="bm-5"></div>

          <div className="container-fluid padding">
            <div className="row welcome text-center">
              <div className="col-12">
                <div className="display-4 py-3 my-2 font-sm">
                  Автоматизируйте свои задачи.
                </div>
              <hr className={styles.welcomeHr} />
              </div>
              
              <div className="col-12">
                <div className="bm-1"></div>
                <p className="lead my-3">
                  Предлагаем свои аутсорсинговые услуги в сфере ИТ. Мы - небольшая команда разработчиков с многолетним опытом работы, готовая выполнить ваши заказы. У нас широкая специализация и Вы можете заказать у нас разработку различных решений, от интернет сайта до системы управления предприятием.
                </p>
              </div>
            </div>   
          </div>

          <div className="bm-3"></div>

          <div className="container-fluid padding my-5">
            <div className="row text-center padding">
              
              <div className="col-xs-12 px-2 col-md-4 align-items-center">
                <ThumbsUp className='mx-2 purple-text darken-4 icon'/>
                <h3 className="my-3">
                  Качество
                </h3>
                <p>
                  Мы всегда ориентированы на разработку качественного продукта и дорожим мнением своих заказчиков.
                </p>
              </div>
              
              <div className="col-xs-12 px-2 col-md-4 align-items-center">
                <Alarm className='mx-2 purple-text darken-4 icon'/>
                <h3 className="my-3">
                  Скорость
                </h3>
                <p>
                  Небольшая команда позволяет маневрировать и быстро справляться с поставленными задачами.
                </p>
              </div>
              
              <div className="col-sm-12 px-2 col-md-4 align-items-center">
                <Shield className='mx-2 purple-text darken-4 icon'/>
                <h3 className="my-3">
                  Надежность
                </h3>
                <p>
                  Мы имеем многолетний опыт в разных сферах разработки и можем предложить клиенту надежный продукт.
                </p>
              </div>
            </div>

            <div className="bm-3"></div>
              
            <div className="row ">
              <div className="col-sm-12 px-2 py-3">
                <p>
                  Работая с нами Вы получаете массу преимуществ.
                </p>
                <ul className="list-ul">
                  <li>Вам не нужно заботиться о подборе персонала и организовывать процесс разработки, мы сделаем это за Вас.</li>
                  <li>У нас демократичные цены</li>
                  <li>Используем последние разработки.</li>
                  <li>Стремимся к высокому качеству и количеству выполненного, а не "просиживаем" на работе.</li>
                </ul>
              </div>
            </div>

            <div className="bm-3"></div>

          </div>

        </main>
      </div>
    </MainLayout>
    <style>{`
      .lead{
        text-align: justify;
        text-indent: 1em;
      }
      .icon{
        font-size: 3em; 
      }
      .list-ul li{
          list-style-type: square !important;
          line-height: 2em;
          margin-left: 2em;
      }
    `}</style>
  </>)
}

//
// <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Powered by{' '}
//             <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//           </a>
