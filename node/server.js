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
const upload = multer({dest: './static/uploads/'});

app.use(views(__dirname + '/template', {
  map: {
    html: 'ejs'
  }
}))

app.use(bodyParser())
app.keys = ['abcd', 'efgh'];
app.use(session(app))

app.use(async(ctx, next) => {
  ctx.set({'Access-Control-Allow-Origin': "http://localhost:3000", 'Access-Control-Allow-Credentials': true, 'Access-Control-Allow-Headers': "Content-Type,Content-Length,Authorization,Accept,X-Requested-With,Cache-Control", 'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS', 'X-Powered-By': '3.2.1'})
  if (ctx.method === 'OPTIONS') {
    ctx.response.body = {
      code: 0
    }
  }
  await next()
})

const router = new Router

router.get('/api/banner', async(ctx, next) => {
  let res = await common.readFile('./data/banner.json')
  ctx.set('Cache-Control', 'max-age=300')
  ctx.body = res
})

router.get('/api/icon', async(ctx, next) => {
  let res = await common.readFile('./data/icon.json')
  ctx.set('Cache-Control', 'max-age=300')
  ctx.body = res
})

router.get('/api/community', async(ctx, next) => {
  let res = await common.readFile('./data/community.json')
  ctx.set('Cache-Control', 'max-age=300')
  ctx.body = res
})

router.get('/api/detail', async(ctx, next) => {
  let res = await common.readFile('./data/recommend.json')
  let {type, goodsId} = ctx.query
  let arr = JSON.parse(res)
  if (type) {
    arr = arr.filter(item => item.type === type)
  }
  if (goodsId) {
    arr = arr.filter(item => item.goodsId == goodsId)
  }
  ctx.set('Cache-Control', 'max-age=300')
  ctx.body = JSON.stringify(arr)
})

let str = ''
let num = ''
let count = 0
let timer = null
router.get('/api/num', async(ctx, next) => {})
router.get('/', async (ctx, next) => {
  let res = await common.readFile('./test.html')
  ctx.body = res
})
router.get('/api/center', async(ctx, next) => {
  if (!ctx.session['sess_id']) {
    ctx.body = {status: "failure"}
  } else {
    let res = await common.readFile('./data/user.json')
    let arr = JSON.parse(res)
    ctx.body = {status: "success", phone: arr[0].num}
  }
})

router.post('/api/num', async(ctx, next) => {
  // 验证码要匹配，时间匹配
  let {msg, num} = ctx.request.body
  
  if (!msg) {
    // 只填手机号点击发送验证码
    str = common.code()
    timer = setInterval(() => {
      count++
    }, 1000)
    ctx.body = {
      verificat: str,
      status: "failure"
    }
  } else {
    clearInterval(timer)
    if (str === msg) {
      // 验证码已经匹配
      if (count > 60) {
        count = 0
        ctx.body = {message: '验证码超时',status: "failure"}
      }else {
        count = 0
        ctx.body = {message: '验证码成功',status: "success"}
        ctx.session['sess_id'] = num
        let res = await common.readFile('./data/user.json')
        let arr = JSON.parse(res)
        arr.unshift({num})
        let data = JSON.stringify(arr)
        await common.writeFile('./data/user.json', data)
      }
    }else {
      // 验证码填写错误
      count = 0
      ctx.body = {message: '验证码错误',status: "failure"}
    }
  }

})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(static(pathLib.resolve(__dirname, './static')))

app.listen(8080, () => {
  console.log('port in 8080!');
})