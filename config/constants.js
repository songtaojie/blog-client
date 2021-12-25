/**
 *
 */
module.exports = {
  proxy: {
    '/api': ' http://localhost:5003'
  },
  prodProxy: {
    '/api': 'http://118.31.119.35/web'
  }
}