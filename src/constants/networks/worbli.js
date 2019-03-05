
const defaultEndpoints = [
  'https://api.worbli.io',
  'https://api.worbli-mainnet.eoscalgary.io'
]
  
const actionsEndpoints = [
  'https://api.worbli.io',
  'https://api.worbli-mainnet.eoscalgary.io'
]
  
const transactionsEndpoints = [
  'https://api.worbli.io',
  'https://api.worbli-mainnet.eoscalgary.io'
]
  
const PROVIDER_ENDPOINTS = [{
  chainId: '73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f',
  port: 443,
  protocol: 'https',
  host: 'api.worbli.io',
  httpEndpoint: 'https://api.worbli.io',
  blockchain: 'eos'
}]
  
const apiServerEndpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000'
  : 'https://www.worbliapi.bloks.io'

const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_TOKEN_CONTRACT = 'eosio.token'
const CORE_SYMBOL = 'EOS'
const CHAIN = 'worbli' // Should be like jungle, kylin
const MONGO_URL = ''
const HISTORY_TYPES = ['native']
const TOKEN_API = ''
const CHAIN_ID = '73647cde120091e0a4b85bced2f3cfdb3041e266cbbe95cee59b73235a1b3b6f'
const DOMAIN_TITLE = 'Worbli Bloks.io'
const CHAIN_START_DATE = new Date('Oct 24, 2018')

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
