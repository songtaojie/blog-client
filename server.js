// server.js
const Koa = require('koa')
const path = require('path')
// const logger = require('./logger')
const server = new Koa()
const { createBundleRenderer } = require('vue-server-renderer')
const templateHtml = require('fs').readFileSync(path.resolve(__dirname, './index.template.html'), 'utf-8')

const distPath = './dist'

const renderer = createBundleRenderer(require(`${distPath}/vue-ssr-server-bundle.json`), {
  runInNewContext: false,
  template: templateHtml,
  clientManifest: require(`${distPath}/vue-ssr-client-manifest.json`)
})

server.use(function* (next) {
  const ctx = this
  const context = { url: ctx.req.url, pageTitle: 'default-title' }

  // cgi请求，前端资源请求不能转到这里来。这里可以通过nginx做
  if (/\.\w+$/.test(context.url)) {
    return yield next
  }

  // 注意这里也必须返回promise
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, function (err, html) {
      if (err) {
        console.log(`[error][ssr-error]: ${err.stack}`)
        // logger.error(`[error][ssr-error]: ${err.stack}`)
        return reject(err)
      }
      ctx.status = 200
      ctx.type = 'text/html; charset=utf-8'
      ctx.body = html
      resolve(html)
    })
  })
})

// 错误处理
server.on('error', function (err) {
  console.log(`[error][server-error]: ${err.stack}`)
  // logger.error(`[error][server-error]: ${err.stack}`)
})

const port = 8090

server.listen(port, () => {
  console.log(`[info]: server is deploy on port: ${port}`)
  // logger.info(`[info]: server is deploy on port: ${port}`)
})