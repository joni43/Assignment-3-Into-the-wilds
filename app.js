// Express modules
const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

// library for nodejs to access the github v3 api.
const github = require('octonode')
const socket = require('socket.io')
// password stored in .env file
const password = github.client(process.env.GITHUB_PASSWORD)

// Secure the application with safety feature.
const crypto = require('crypto')
const compare = require('secure-compare')
var http = require('http')
const port = process.env.PORT || 8000
/*
-------------------------- Start APP 8000---------------------------------------
*/
let server = http.createServer(app).listen(port, function () {
  console.log('Connected to https://localhost:' + port)
})

var io = socket(server)

io.on('connection', function (socket) {
  console.log('a user connected', socket.id)
  socket.emit('try', 'hej på dig'
)
})
io.on('connection', function (socket) {
  socket.emit('bye, goodbye world!')
})
// req all js file
const githubAPI = require('./routes/github')
// view engine
app.set('views', path.join(__dirname, 'views'))

// static
app.use(express.static(path.join(__dirname, 'public')))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
// BodyParser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', githubAPI)

app.post('/issues', function (req, res) {
  let issueEvent = req.headers['x-github-event']
  var issueContext = {
    id: req.body.issue.id,
    title: req.body.issue.title,
    Body: req.body.issue.body,
    comments: req.body.issue.comments,
    Url: req.body.issue.url,
    created_at: req.body.issue.created_at,
    updated_at: req.body.issue.updated_at
  }
  if (issueEvent === 'issues') {
    io.emit('issue', issueContext)
  } else if (issueEvent === 'issue_comment') {
    io.emit('issue comment', issueContext)
  }

  let postGitHub = JSON.stringify(req.body)
   // Get the header
  let signature = req.headers['x-hub-signature']
  console.log(signature)
  const hash = crypto.createHmac('sha1', 'GITHUB_PASSWORD')
  hash.update(postGitHub)
  let hashedSecret = 'sha1' + hash.digest('hex')
  if (compare(signature, hashedSecret)) {
    console.log('Data came from GitHub')
  }
  res.sendStatus(200)
})
