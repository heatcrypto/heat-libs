const bitcore         = require('bitcore-lib')
const bip39           = require('bip39')
const lightwallet     = require('eth-lightwallet')
const SolidityCoder   = require('web3/lib/solidity/coder')
const Web3            = require('web3')
const explorers       = require('bitcore-explorers')
const HookedWeb3Provider = require('hooked-web3-provider')

module.exports = {
  bitcore: bitcore,
  bip39: bip39,
  lightwallet: lightwallet,
  __SolidityCoder: SolidityCoder,
  Web3: Web3,
  explorers: explorers,
  HookedWeb3Provider: HookedWeb3Provider
}