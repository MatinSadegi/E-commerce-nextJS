import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Amazoon</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout/>
    </div>
  )
}
