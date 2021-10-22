const Koa = require('koa')
const Router = require('@koa/router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()

router.prefix('/api')

router.get('/', ctx => {
  ctx.body = 'Hello koa'
})

router.get('/api', ctx => {
  ctx.body = 'Hello Api'
})

router.post('/post', async ctx => {
  const { body } = ctx.request
  ctx.body = { ...body }
})

app.use(koaBody())
app.use(cors())

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)
