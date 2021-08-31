const fs = require('fs')

const cors = require('cors')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
module.exports = {
  devServer: {
    before(app, serve) {
      app.use(cors())
      app.use(bodyParser.json())
      app.use(bodyParser.urlencoded({extended: false}))
      
      // 请求首页商品
      // app.get('/api/goods/home', (req, res) => {
      //   fs.readFile('./db/goods.json', 'utf-8', (err, data) => {
      //     if(!err) res.json(JSON.parse(data))
      //   })
      // })

      
      // 请求商品详情数据
      // app.get('/api/goods/productDet', (req, res) => {
      //   const productId = req.query.productId
      //   console.log(productId)
      //   fs.readFile('./db/goodsDetail.json', 'utf-8', (err, data) => {
      //     if(!err) {
      //       let {result} = JSON.parse(data)
      //       // 查找与前端传进来的id相同的，返回对应的数据给前端
      //       let newData = result.find(item => item.productId == productId)
      //       res.json(newData)
      //     }
      //   })
      // })

// 模拟一个登陆的接口
app.post('/api/login', (req, res) => {
  console.log(req.body)
  let username = req.body.username
  let phone = req.body.phone

  res.json({

      token: jwt.sign({ 'username': username }, 'abcd', {
          // 过期时间
          expiresIn: "3000s"
      }),
      username,
      state: 1,
      file: 'https://imgsa.baidu.com/forum/w%3D580/sign=0b9079760d3b5bb5bed720f606d1d523/b11d19d8bc3eb135105ecf66a81ea8d3fc1f446c.jpg',
      code: 200,
      address: null,
      balance: null,
      description: null,
      email: null,
      message: null,
      phone,
      points: null,
      sex: null,
      id: 62
  })
})

// 登录持久化验证接口 访问这个接口的时候 一定要访问token（前端页面每切换一次，就访问一下这个接口，问一下我有没有登录/登陆过期）
// 先访问登录接口，得到token，在访问这个，看是否成功
// app.post('/api/validate', function (req, res) {
//   let token = req.headers.authorization;
//   console.log(token);

//   // 验证token合法性 对token进行解码
//   jwt.verify(token, 'abcd', function (err, decode) {
//       if (err) {
//           res.json({
//               msg: '当前用户未登录'
//           })
//       } else {
//           // 证明用户已经登录
//           res.json({
//               token: jwt.sign({ username: decode.username }, 'abcd', {
//                   // 过期时间
//                   expiresIn: "3000s"
//               }),
//               username: decode.username,
//               msg: '已登录',
//               address: null,
//               balance: null,
//               description: null,
//               email: null,
//               file: 'https://imgsa.baidu.com/forum/w%3D580/sign=0b9079760d3b5bb5bed720f606d1d523/b11d19d8bc3eb135105ecf66a81ea8d3fc1f446c.jpg',
//               id: 62,
//               message: null,
//               phone: null,
//               points: null,
//               sex: null,
//               state: 1,
//           })
//       }
//   })
// })

    }
  }
} 