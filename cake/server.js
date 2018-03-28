const Koa = require('koa');
const static = require('koa-static');
const Router = require('koa-router');
const pathLib = require('path')
const multer = require('koa-multer')
const views = require('koa-views')
const render = require('koa-views-render')
const fs = require('fs');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser')
const common = require('./libs/common')
const app = new Koa();
const upload = multer({ dest: './static/uploads/' });

app.use(views(__dirname + '/template', {
  map: {
    html: 'ejs'
  }
}))

app.use(bodyParser())
app.keys = ['abcd','efgh'];
app.use(session(app))

app.use(async (ctx, next) => {
  ctx.set({
    'Access-Control-Allow-Origin': "http://localhost:3000",
    'Access-Control-Allow-Credentials': true,    
    'Access-Control-Allow-Headers': "Content-Type,Content-Length,Authorization,Accept,X-Requested-With",
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'X-Powered-By': '3.2.1'
  })
  if (ctx.method === 'OPTIONS') {
    ctx.response.body = {code: 0}
  }
  await next()
})

const router = new Router

router.get('/api/banner', async (ctx, next) => {
  let res = await common.readFile('./data/banner.json')
  ctx.body = res
})

router.get('/api/icon', async (ctx, next) => {
  let res = await common.readFile('./data/icon.json')
  ctx.body = res
})

router.get('/api/detail', async (ctx, next) => {
  let res = await common.readFile('./data/recommend.json')
  let {type, goodsId} = ctx.query
  let arr = JSON.parse(res)
  if (type) {
    arr = arr.filter(item => item.type === type)
  }
  if (goodsId) {
    arr = arr.filter(item => item.goodsId == goodsId)
  }
  ctx.body = JSON.stringify(arr)
})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(static(pathLib.resolve(__dirname, './static')))

app.listen(8080, () => {
  console.log('port in 8080!');
})