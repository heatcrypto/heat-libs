const ethLightWallet  = require('eth-lightwallet')
const bitcore         = require('bitcore-lib')
const bip39           = require('bip39')

/**
 * A note about what to export and more importantly what not!
 * This package is built with rollup which applies 'tree-shaking' which means 
 * it only includes the code actually referenced by other code.
 * 
 * Applying this tree-shaking excludes lots of code otherwise included in especially
 * the browser builds.
 * 
 * Since rollup cant see beyond this package and does not know what (heat-ui) would
 * be using of the exposed libraries we need export with care.
 * 
 * Exporting with care means the following:
 * 
 *    DO's    [doing this gives a 1 MB js file]
 * 
 *    exports.ethLightWallet = {
 *      txutils = ethLightWallet.txutils
 *    }
 * 
 *    DONT's  [doing this gives us a 2.5 MB js file]
 * 
 *    exports.ethLightWallet = ethLightWallet
 * 
 */

// exports.ethLightWallet = ethLightWallet
// exports.bitcore = bitcore
// exports.bip39 = bip39
exports.xx = ethLightWallet.txutils