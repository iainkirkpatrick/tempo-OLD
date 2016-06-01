const nodeEnv = process.env.NODE_ENV

const development = {
  proxy: {
    port: 2323
  },
  render: {
    url: {
      pathname: '/',
      port: 2323
    },
    port: 6000
  },
  static: {
    url: {
      pathname: '/static/',
      port: 2323
    },
    port: 6001
  },
  api: {
    url: {
      pathname: '/api/',
      port: 2323
    },
    port: 6002
  },
}

module.exports = development
