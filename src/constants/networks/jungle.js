const defaultEndpoints = [
  'https://api.jungle.alohaeos.com',
  'https://jungle2.cryptolions.io'
]

const actionsEndpoints = [
  'https://junglehistory.cryptolions.io'
]

const transactionsEndpoints = [
  'https://junglehistory.cryptolions.io'
]

const PROVIDER_ENDPOINTS = [{
  chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
  port: 443,
  protocol: 'https',
  host: 'api.jungle.alohaeos.com',
  httpEndpoint: 'https://api.jungle.alohaeos.com',
  blockchain: 'eos'
}, {
  chainId: 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
  port: 443,
  protocol: 'https',
  host: 'jungle2.cryptolions.io',
  httpEndpoint: 'https://jungle2.cryptolions.io',
  blockchain: 'eos'
}]

const apiServerEndpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3010'
  : 'https://www.jungleapi.bloks.io'
  
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_TOKEN_CONTRACT = 'eosio.token'
const CORE_SYMBOL = 'EOS'
const CHAIN = 'jungle' // Should be like jungle, kylin
const MONGO_URL = 'https://junglehistory.cryptolions.io:4433'
const HISTORY_TYPES = ['dfuse', 'mongo']
const TOKEN_API = 'https://lightapi.eosgeneva.io/api/account/jungle'
const CHAIN_ID = 'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
const DOMAIN_TITLE = 'Jungle Bloks.io'
const CHAIN_START_DATE = new Date('Nov 23, 2018')

const NATIVE_ACTIONS_PER_PAGE = 100
const DFUSE_ACTIONS_PER_PAGE = 25

export default {
  defaultEndpoints,
  actionsEndpoints,
  transactionsEndpoints,
  apiServerEndpoint,
  IMAGE_PROXY,
  PROVIDER_ENDPOINTS,
  CORE_SYMBOL,
  CORE_TOKEN_CONTRACT,
  CHAIN,
  HISTORY_TYPES,
  TOKEN_API,
  MONGO_URL,
  CHAIN_ID,
  DOMAIN_TITLE,
  CHAIN_START_DATE,

  NATIVE_ACTIONS_PER_PAGE,
  DFUSE_ACTIONS_PER_PAGE
}
