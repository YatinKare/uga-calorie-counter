import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import FoodItem from '@components/FoodItem'
//import Button from 'react';

export default function Home() {
  async function handler() {
    const response = await fetch("https://uga.api.nutrislice.com/menu/api/weeks/school/dining-hall-3/menu-type/lunch/2024/02/24/", {
      "credentials": "omit",
      "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:123.0) Gecko/20100101 Firefox/123.0",
          "Accept": "application/json, text/plain, */*",
          "Accept-Language": "en-US,en;q=0.5",
          "x-nutrislice-origin": "uga.nutrislice.com",
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-site"
      },
      "referrer": "https://uga.nutrislice.com/",
      "method": "GET",
      "mode": "cors"
  });
    const food = await response.json();
    console.log(food);
  }
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
        <button onClick={handler} title='Test' >Test</button> 
        <div id='daily-log-preview'>

          <FoodItem name="pasta" cal="300"/>
          <FoodItem name="pasta" cal="300"/>
          <FoodItem name="pasta" cal="300"/>
          <FoodItem name="pasta" cal="300"/>
        </div>
      </main>

      <Footer />
    </div>
  )
}
