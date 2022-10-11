module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/p/0',
        permanent: true
      }
    ]
  }
}
