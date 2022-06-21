require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remind hub gesture inflict blue tourist'; 
let testAccounts = [
"0x360e2c380bd223ab304207774688a5583e38d858cd196b9e3b8c2fae2b095748",
"0x70fa5688e10fcdd3b488d7177a2dd7fda239a6af9033fe70b728cfa23e52a28a",
"0xae9dc1be71c19070998f19e7a062cfb758cb7ec8aad1d5b80a363cb923733b04",
"0xc64c92e4ce00e7a969bd88c84c6a6669c5fd058e36602c629306c9071a804e8a",
"0x1c4ca3efa38635b76c05eccba6e38275fb5a3ee0dec85de7d31fa1592697c6db",
"0x7cbcd21dbb388ce000c071d601e5b995205a4e7bd091382710cb7bca3dec194c",
"0x4873392d8fb8a82bcd1e185d0f17024b971a8fedde7ce4e21bc2989f0e395491",
"0x60b2c937f5c5c0d27026b6abd23fb08775b398da83094fbaee9a4646f3ba9d35",
"0xd0eca918af96a248a419ddabac08949ce0a64985266c09b3a79c71c3635c9e9a",
"0x070fb3df63146c9c6c8eb53f645ce5476e49c470d3a75bfcd822a878ed22b0fd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

