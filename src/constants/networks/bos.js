const defaultEndpoints = [
  'https://api.bossweden.org'
]

const transactionsEndpoints = [
  'https://api.bossweden.org'
]

const actionsEndpoints = [
  'https://api.bossweden.org'
]

const PROVIDER_ENDPOINTS = [ {
  chainId: 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86',
  port: 443,
  protocol: 'https',
  host: 'api.bossweden.org',
  httpEndpoint: 'https://api.bossweden.org',
  blockchain: 'eos'
}]

const apiServerEndpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3040'
  : 'https://www.bosapi.bloks.io'

const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_TOKEN_CONTRACT = 'eosio.token'
const CORE_SYMBOL = 'BOS'
const CHAIN = 'bos' // Should be like jungle, kylin
const MONGO_URL = ''
const HISTORY_TYPES = ['native']
const TOKEN_API = ''
const CHAIN_ID = 'd5a3d18fbb3c084e3b1f3fa98c21014b5f3db536cc15d08f9f6479517c6a3d86'
const DOMAIN_TITLE = 'BOS Bloks.io'
const CHAIN_START_DATE = new Date('Dec 31, 2018')

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
