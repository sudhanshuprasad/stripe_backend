import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import * as dotenv from "dotenv";
// dotenv.config({ path: '/.env' });

import StripeCheckout from 'react-stripe-checkout';

function App() {
  const [count, setCount] = useState(0);

  const [product, setProduct] = useState({
    name: "kala jamun",
    price: 10,
    productBY: "fal dukaan"
  });

  const makePayment = token => {
    const body = {}
    const header ={}
  }

  // console.log(import.meta.env.REACT_APP_STRIPE_KEY)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

        <div>
          <button className='pay_button' onClick={() => setCount((count) => count + 1)}>
            pay now {count}
          </button>
          {/* <StripeCheckout
          stripeKey={""}
          token={makePayment}
          name=''
          amount={product.price*100}
          ></StripeCheckout> */}
        </div>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
