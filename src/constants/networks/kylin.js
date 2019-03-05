const defaultEndpoints = [
  'https://kylin.eos.dfuse.io'
]
  
const actionsEndpoints = [
  'https://kylin.eos.dfuse.io'
]
  
const transactionsEndpoints = [
  'https://kylin.eos.dfuse.io'
]
  
const PROVIDER_ENDPOINTS = [{
  chainId: '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191',
  port: 443,
  protocol: 'https',
  host: 'kylin.eos.dfuse.io',
  httpEndpoint: 'https://kylin.eos.dfuse.io',
  blockchain: 'eos'
}]
  
const apiServerEndpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3020'
  : 'https://www.kylinapi.bloks.io'
  
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'
const CORE_TOKEN_CONTRACT = 'eosio.token'
const CORE_SYMBOL = 'EOS'
const CHAIN = 'kylin' // Should be like jungle, kylin
const MONGO_URL = ''
const HISTORY_TYPES = ['dfuse']
const TOKEN_API = ''
const CHAIN_ID = '5fff1dae8dc8e2fc4d5b23b2c7665c97f9e9d8edf2b6485a86ba311c25639191'
const DOMAIN_TITLE = 'Kylin Bloks.io'
const CHAIN_START_DATE = new Date('Jul 10, 2018')
  
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
