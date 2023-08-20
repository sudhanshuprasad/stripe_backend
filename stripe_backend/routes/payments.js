const express = require('express')
const router = express.Router()
const Stripe = require('stripe');
const stripe = Stripe('sk_test_4eC39HqLyjWDarjtT1zdp7dc');
const { v4: uuid } = require("uuid");

router.post("/", async (req, res) => {

    const { product, token } = req.body;


    console.log(product, token);
    // res.send({data:"random data"});
    const idempotencyKey = uuid()
    console.log(idempotencyKey)

    const stripe_customer = stripe.customers.create({
        email: token.email,
        source: token.id
    })
        .then(customer => {
            stripe.charges.create({
                amount: product.price * 100,
                Currency: "inr",
                customer: customer.id,
                receipt_email: token.email,
                description: `your product ${product.name} has been ordered`,
                shipping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country,
                    }
                }
            }, { idempotencyKey })
        })
        .then(result=>res.status(200).json(result))
        .catch(err=>console.log(err));

    return stripe_customer;
})

module.exports = router;