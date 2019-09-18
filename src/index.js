const bitcore             = require('bitcore-lib')
const lightwallet         = require('eth-lightwallet');
const bip39               = require('bip39')
const SolidityCoder       = require('web3/lib/solidity/coder')
const Web3                = require('web3')
const HookedWeb3Provider  = require('hooked-web3-provider')
const nxtCrypto           = require('nxt-crypto')
const IotaCore            = require('@iota/core')
const IotaSigning         = require('@iota/signing')
const IotaConverter       = require('@iota/converter')
const hdkey               = require('hdkey')
const wif                 = require('wif')
const ecc                 = require('eosjs-ecc')
const safeBuffer          = require('safe-buffer')
const eosjs               = require('eosjs')
const JsSignatureProvider = require('eosjs/dist/eosjs-jssig'); // expect changes. Better remove when eos finalizes the eosjs.
const bnb                 = require('./binance-coin-js-sdk/lib/index')
const bitgoUtxo           = require('bitgo-utxo-lib')

module.exports = {
  bitcore: bitcore,
  bip39: bip39,
  lightwallet: lightwallet,
  __SolidityCoder: SolidityCoder,
  Web3: Web3,
  HookedWeb3Provider: HookedWeb3Provider,
  nxtCrypto: nxtCrypto,
  IotaCore: IotaCore,
  IotaSigning: IotaSigning,
  IotaConverter: IotaConverter,
  hdkey,
  wif,
  ecc,
  safeBuffer,
  eosjs,
  JsSignatureProvider,
  bnb,
  bitgoUtxo
}