const defaultEndpoints = [
  'https://eos.eoscafeblock.com',
  'https://eos.greymass.com',
  'https://api.eosrio.io'
]

const actionsEndpoints = [
  'https://eos.greymass.com',
  'https://api.eossweden.se',
  'https://api.eostribe.io',
  'https://api.eosrio.io'
]

const transactionsEndpoints = [
  'https://api.eossweden.se',
  'https://eos.greymass.com',
  'https://api.eosrio.io'
]

const PROVIDER_ENDPOINTS = [{
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  port: 443,
  protocol: 'https',
  host: 'eos.greymass.com',
  httpEndpoint: 'https://eos.greymass.com',
  blockchain: 'eos'
}, {
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  port: 443,
  protocol: 'https',
  host: 'api.eosrio.io',
  httpEndpoint: 'https://api.eosrio.io',
  blockchain: 'eos'
}, {
  chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
  port: 443,
  protocol: 'https',
  host: 'mainnet.eoscalgary.io',
  httpEndpoint: 'https://mainnet.eoscalgary.io',
  blockchain: 'eos'
}]

const apiServerEndpoint = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3030'
  : 'https://www.api.bloks.io'
  
const IMAGE_PROXY = 'https://www.api.bloks.io/image-proxy'

const CORE_TOKEN_CONTRACT = 'eosio.token'
const CORE_SYMBOL = 'EOS'
const CHAIN = 'eos' // Should be like jungle, kylin
const MONGO_URL = 'https://history.cryptolions.io'
const HYPERION_URL = 'https://br.eosrio.io'
const HISTORY_TYPES = ['native', 'dfuse', 'es', 'hyperion']
const TOKEN_API = 'https://api.light.xeos.me/api/account/eos'
const CHAIN_ID = 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
const DOMAIN_TITLE = 'Bloks.io'
const CHAIN_START_DATE = new Date('June 08, 2018')

const NATIVE_ACTIONS_PER_PAGE = 100
const DFUSE_ACTIONS_PER_PAGE = 25

module.exports = {
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
  DFUSE_ACTIONS_PER_PAGE,
  HYPERION_URL
}
