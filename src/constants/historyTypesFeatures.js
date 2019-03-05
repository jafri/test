import { HISTORY_TYPES } from './networks'
console.log(HISTORY_TYPES)
let types = {
  native: {
    name: 'native',
    actionFilter: false,
    tokenFilter: false,
    dateFilter: false,
    total: 0
  },
  dfuse: {
    name: 'dfuse',
    actionFilter: true,
    tokenFilter: true,
    dateFilter: false,
    total: 2
  },
  hyperion: {
    name: 'hyperion',
    actionFilter: false,
    tokenFilter: false,
    dateFilter: false,
    total: 0
  },
  es: {
    name: 'es',
    actionFilter: false,
    tokenFilter: false,
    dateFilter: true,
    total: 1
  },
  mongo: {
    name: 'mongo',
    actionFilter: false,
    tokenFilter: false,
    dateFilter: false,
    total: -1
  }
}

for (const key of Object.keys(types)) {
  if (!HISTORY_TYPES.includes(key)) delete types[key]
}

export default types
