module.exports = {
  lintOnSave: 'error',
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/sass/_variable.scss";'
      }
    }
  },
  devServer: {
    // public:'127.0.0.1:8080'
    open: process.env.NODE_ENV === 'development',
    host: '127.0.0.1',
    port: 8090
    // proxy: {
    //   'api/*': {
    //     target: 'http://localhost:5003/',
    //     changeOrigin: true,
    //     ws: true,
    //     pathRewrite: {}
    //   }
    // }
  }
}
