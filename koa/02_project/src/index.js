import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import koaBody from 'koa-body'
import jsonUtil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'

import router from './routes'

const app = new Koa()

const isDevMode = process.env.NODE_ENV !== 'production'

// ohbiurxbsxydcafd  邮件授权码
// 邮件服务： 阿里云/亚马逊 SES/ sendcloud

/*
 * 使用 koa-compose 集成中间件
 * */
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({ pretty: false, param: 'pretty' }),
  helmet(),
])

if (!isDevMode) {
  app.use(compress())
}

app.use(middleware)
app.use(router())

app.listen(3000)
