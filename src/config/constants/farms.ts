import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SALT',
    lpAddresses: {
      97: '0xf62e8d3EcA464C9Fa9D46f169211eF4a41E41fE8',
      56: '0x6596f770786915556C47E301cC8290aa14288d99', // SALT-BUSD
    },
    tokenSymbol: 'SALT',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8',
      56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 2,
    lpSymbol: 'SALT-BUSD',
    lpAddresses: {
      97: '0xf62e8d3EcA464C9Fa9D46f169211eF4a41E41fE8',
      56: '0x6596f770786915556C47E301cC8290aa14288d99',
    },
    tokenSymbol: 'SALT',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8',
      56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    risk: 2,
    lpSymbol: 'SALT-BNB',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
      56: '0x6284B49544c8900B4612f8450DCE8D484E5c2631',
    },
    tokenSymbol: 'SALT',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8',
      56: '0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'BNB-BUSD',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // FIXME:
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'DAI-BUSD',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3', // https://bscscan.com/address/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 1,
    lpSymbol: 'ETH-BETH',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
      56: '0x99d865Ed50D2C32c1493896810FA386c1Ce81D91', // https://bscscan.com/address/0x99d865Ed50D2C32c1493896810FA386c1Ce81D91
    },
    tokenSymbol: 'BETH',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
      56: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b', // https://bscscan.com/address/0x2170ed0880ac9a755fd29b2688956bd959f933f8
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'CAKE-BUSD',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // https://bscscan.com/address/0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // https://bscscan.com/address/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'CAKE-BNB',
    lpAddresses: {
      97: '0xDcE45b2dc62239DD09D6ED97Eefb9276C634602c', // FIXME:
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6', // https://bscscan.com/address/0xa527a61703d82139f8a06bc30097cc9caa2df5a6
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82', // https://bscscan.com/address/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x6596f770786915556C47E301cC8290aa14288d99',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // https://bscscan.com/address/0xe9e7cea3dedca5984780bafc599bd69add087d56
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x89dcddca577f3658a451775d58ea99da532263c8', // FIXME:
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c', // https://bscscan.com/address/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
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
    pid: 11,
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
]

export default farms
