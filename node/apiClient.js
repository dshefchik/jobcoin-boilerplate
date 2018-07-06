#!/usr/bin/env node
'use strict'

const axios = require('axios')

/* Urls */
const API_BASE_URL = 'http://localhost:8000/api'
const API_ADDRESS_URL = `${API_BASE_URL}/addresses/`
const API_TRANSACTIONS_URL = `${API_BASE_URL}/transactions/`
const client = axios.create({
  baseURL: API_BASE_URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

console.log(`${API_ADDRESS_URL}, ${API_TRANSACTIONS_URL}`)

// Make a request for a user with a given ID
client.get()
  .then(function (response) {
    // handle success
    console.log(response.status, response.data)
  })
  .catch(function (error) {
    // handle error
    console.error(error.response.status, error.response.statusText, error.response.data, error.response.headers)
  })
  .then(function () {
    // always executed
  })
// Make a request for a user with a given ID
client.post('/addresses/pools', {addresses: [1, 2, 3, 4, 5]})
  .then(function (response) {
    // handle success
    console.log(response.status, response.data)
  })
  .catch(function (error) {
    // handle error
    console.error(error.response.status, error.response.statusText, error.response.data, error.response.headers)
  })
  .then(function () {
    // always executed
  })
