/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Footer from '/layout/Footer'
import Header from '/layout/Header'
import '/styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clinic</title>
        <meta name='description' content='Doctor booking app' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className='min-h-[calc(100vh-270px)] box-border'>
        <div className='container p-20'>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default MyApp
