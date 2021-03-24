import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 0,
  //   risk: 5,
  //   lpSymbol: 'CLIMB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xD685bf66ec304D824680fdfD4bD12423cbBf6bc4',
  //   },
  //   tokenSymbol: 'CLIMB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4945BC280aAE4ce44f99Ce1e4cBE58421714F45d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'CLIMB-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xaced075e2c993f130020caffb3bc58c5061e5463',
  //   },
  //   tokenSymbol: 'CLIMB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4945BC280aAE4ce44f99Ce1e4cBE58421714F45d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'CLIMB-MNTN LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x63d53ee38296130c5e0fab878a4c986f5c778357',
  //   },
  //   tokenSymbol: 'CLIMB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4945BC280aAE4ce44f99Ce1e4cBE58421714F45d',
  //   },
  //   quoteTokenSymbol: QuoteToken.MNTN,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'MNTN-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x41201Ba22c15C44DA023161df9E82d88FBb96C74',
  //   },
  //   tokenSymbol: 'MNTN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xd671e710df199498097a3903ae0749a183130742',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 4,
  //   risk: 5,
  //   lpSymbol: 'MNTN-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x4f3ef9384cdc42808cb8e27dac88faab99a32a76',
  //   },
  //   tokenSymbol: 'MNTN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xd671e710df199498097a3903ae0749a183130742',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 0,
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 7,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'CLIMB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // CLIMB-BUSD LP
  //   },
  //   tokenSymbol: 'CLIMB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4945BC280aAE4ce44f99Ce1e4cBE58421714F45d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 8,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'MNTN',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // MNTN-BUSD LP
  //   },
  //   tokenSymbol: 'MNTN',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xd671e710df199498097a3903ae0749a183130742',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 3,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 3,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 15,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGG',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  //  {
  //   pid: 16,
  //   risk: 4,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // }
]

export default farms
