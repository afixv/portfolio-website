import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title key="pagetitle">Afix Vega</title>
      <meta name='description' content='Afix Vega - Welcome to My Portfolio' key='metadescription' />
      <link rel='icon' href='/afixicon.svg' />
    </Head>
    <main>
      <h1>Welcome to My Personal Website</h1>
    </main>
    </>
  )
}
