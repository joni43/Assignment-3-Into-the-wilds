// Express modules
const express = require('express')
const exphbs = require('express-handlebars')
var path = require('path')
var bodyParser = require('body-parser')

var githubhook = require('githubhook')
var github = require('octonode')
var dotenv = require('dotenv').config()
var path = require('path')
var crypto = require('crypto')
var compare = require('secure-compare')

const port = process.env.PORT || 8000
const app = express()
var client = github.client(dotenv)


// --------------------------- Start APP 2000---------------------------------------
// Set Port
let server = app.listen(process.env.PORT || 8000, function () {
  console.log('Connected! Well done...')
})
let io = require('socket.io')(server)

io.on('connection', function (socket) {
  console.log('a user connected')
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

// CSS file
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', function (req, res) {
  res.render('home')
})
app.use('/', githubAPI)

app.get('/', (req, res) => {
  res.send('Start page')
})
app.get('/github', (req, res, next) => {
  res.send('github')
})
app.post('/github', (req, res, next) => {
  console.log('request: \n' + req)
  // Take the post data from GIthub
  let postGitHub = JSON.stringify(req.body)

   // Get the header
  let signature = req.headers['x-hub-signature']

  let hmac = crypto.createHmac('sha1', 'jontetomte12')
  hmac.update(postGitHub)
  let hasedSecret = 'sha1' + hmac.digest('hex')

  console.log('A', signature)
  console.log('B', hasedSecret)

  if (compare(signature, hasedSecret)) {
    console.log('Data came from GitHub')
  }
  res.sendStatus(200)
})

io.on('connection', function (socket) {
  // io.emit('connected', 'world')
  // socket.emit('connected', 'world')
  console.log('lets work!')
})
