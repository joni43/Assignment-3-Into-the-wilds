// Express modules
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')

// library for nodejs to access the github v3 api.
const github = require('octonode')

// Token stored in .env file
const dotenv = require('dotenv').config()
const client = github.client(dotenv)

var socket = require('socket.io')
// Secure the application with safety feature.
const crypto = require('crypto')
const compare = require('secure-compare')

const port = process.env.PORT || 8000
const app = express()
/*
-------------------------- Start APP 8000---------------------------------------
*/
let server = app.listen(process.env.PORT || 8000, function () {
  console.log('Connected! Well done...')
})
var io = socket(server)
io.on('connection', function (socket) {
  console.log('a user connected', socket.id)
})
// req all js file
const githubAPI = require('./routes/github')
// view engine
app.set('views', path.join(__dirname, 'views'))

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// static
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', githubAPI)

app.post('/home', (req, res, next) => {
  console.log('request: \n' + req)
  // Take the post data from GIthub
  let postGitHub = JSON.stringify(req.body)

   // Get the header
  let signature = req.headers['x-hub-signature']

  const hash = crypto.createHmac('sha1', 'Jontetomte12')
  hash.update(postGitHub)
  let hasedSecret = 'sha1' + hash.digest('hex')

  console.log('A', signature)
  console.log('B', hasedSecret)

  if (compare(signature, hasedSecret)) {
    console.log('Data came from GitHub')
  }
  res.sendStatus(200)
})

// io.on('connection', function (socket) {
//   // io.emit('connected', 'world')
//   // socket.emit('connected', 'world')
//   console.log('lets work!')
// })
