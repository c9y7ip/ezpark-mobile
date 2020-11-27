import apiClient from './apiClient'

const key = 'pk_test_51Hl7wvGa61epl0Bxi66EXEbB8PWCpyCQh7Vgo2YbiKAVw5a6A3cyaJrnPPmrmFyAkKp8K4yiD5tkQFT07r4tJQQe00cctkEdDh'
const stripe = require('stripe-client')(key);

const createToken = async (payload) => {
    console.log('generating token')
    const expMonth = parseInt(payload.expireDate.slice(0, 2))
    const expYear = parseInt(payload.expireDate.slice(2, 4))
    const params = {
        card: {
            number: payload.cardNumber,
            exp_month: expMonth,
            exp_year: expYear,
            cvc: payload.cvv,
            name: payload.cardHolder
        }
    }
    console.log(params)
    var card = await stripe.createToken(params);
    console.log(card)
    return card
}

const createCustomer = (token) => {
    return apiClient.post(`/payment/create-customer`, {
        token: token,
    })
        .then(response => response.data)
        .catch(err => {
            console.log(err)
            throw Error(`Customer creation failed:  ${err}`)
        })
}

module.exports = {
    createToken: createToken,
    createCustomer: createCustomer
}