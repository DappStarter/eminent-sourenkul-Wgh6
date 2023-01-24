require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth soap upgrade include clock onion tube'; 
let testAccounts = [
"0x58ae65a0fa1869513ec5b40fb49265b8540c89b0b597c0bb7f9c09a478b18f0e",
"0x7cd5b76d3034dc73324ccd4ceda5300c9d80c74d4d92c2f9285f2b0693ac95a3",
"0x96287936195ec4cd0e61530c93ad97c183e6ec1d68cd4b388a0f1cebbec97842",
"0xadc5bd291189564a0d548091cd744f69398776415083539f2b56329702625c29",
"0x2bdb411e2d4e8f43c10d58b1e73d1a458f34d158da1c7a436b8b4da41d119795",
"0x2160590c3fdfdd1cc4de0bd4362c99082f631aaaea99df2d80a3c5b821464c8c",
"0xf5b706ec22325fcb76f33a94737141c207a8a7d79e39a7ed84173046f6f3c135",
"0x7a163b93d3232811dc2e6fb3a27198e219c3ed2d07947858379ddf71c82541ff",
"0xd7aa2f13bb859808802d09b8c2fbc6736db5a0145517a924805c1d2627436985",
"0x255397d930504219b0b1dcdc5cae7dd81719da0d8595af7e5a5295daa12ee23c"
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

