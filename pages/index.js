import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import FoodItem from '@components/FoodItem'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>UGA Calorie Counter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my UGA Calorie Counter!" />
        <p className="description">
          <code>pages/index.js</code>
        </p>
        <FoodItem name="pasta" cal="300"/>
      </main>

      <Footer />
    </div>
  )
}
