#!/usr/bin/env node
'use strict'

const axios = require('axios')
/* Urls */
const API_BASE_URL = '<your api url here>'
const API_ADDRESS_URL = `${API_BASE_URL}/addresses/`
const API_TRANSACTIONS_URL = `${API_BASE_URL}/transations/`

console.log(`${API_ADDRESS_URL}, ${API_TRANSACTIONS_URL}`)

// Make a request for a user with a given ID
axios.get(`${API_ADDRESS_URL + 1}`)
  .then(function (response) {
    // handle success
    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .then(function () {
    // always executed
  })
