const Koa = require('koa')

const app = new Koa()

const middleware1 = function (ctx, next) {
  console.log('middleware1')
  next()
  console.log('middleware1 ending')
}

const middleware2 = function (ctx, next) {
  console.log('middleware2')
  next()
  console.log('middleware2 ending')
}
const middleware3 = function (ctx, next) {
  console.log('middleware3')
  next()
  console.log('middleware3 ending')
}

app.use(middleware1)
app.use(middleware2)
app.use(middleware3)

app.listen(3000)
