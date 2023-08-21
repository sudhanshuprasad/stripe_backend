import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import * as dotenv from "dotenv";
// dotenv.config({ path: '/.env' });

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


console.log(REACT_APP_STRIPE_KEY)

function App() {
  const [count, setCount] = useState(0);

  const [product, setProduct] = useState({
    name: "kala jamun",
    price: 10,
    productBY: "fal dukaan"
  });


  const makePayment = async (token, adresses) => {
    const res = await axios.post("http://127.0.0.1:8282/payments", {
      token
    });
    const { status } = res.data;
    if (status === "success") {
      toast("Success ! Check emails for details", {
        type: "success"
      });
    } else {
      toast("Something went wrong", {
        type: "failure"
      });
    }
  };

  // const makePayment = token => {
  //   const body = {
  //     token,
  //     product
  //   }
  //   const header = {
  //     "Content-Type": "applicaation/json"
  //   }

  //   return fetch('http://127.0.0.1:8282/payments', {
  //     method: "POST",
  //     headers,
  //     body: JSON.stringify(body)
  //   })
  //     .then(response => {
  //       console.log("response: ", response)
  //       const status = { response }
  //       console.log("status: ", status)
  //     }).catch(err => console.log(err))
  // }

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
          <button className='pay_button' onClick={() => setCount((count) => count + 1)}>pay now {count}</button>
          

          <StripeCheckout
        stripeKey={REACT_APP_STRIPE_KEY}
        token={makePayment}
        billingAddress
        shippingAddress
        amount={5 * 100}
        currency='INR'
        name="paisa de"
      />
          {/* <StripeCheckout
            stripeKey={""}
            token={makePayment}
            name=''
            amount={product.price * 100}
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
