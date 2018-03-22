
require('dotenv').config()
require('../routes/github')

const express = require('express')
const router = express.Router()
const github = require('octonode')
const client = github.client(process.env.GITHUB_TOKEN)
let contexOfIssue

router.get('/', (req, res) => {
  res.render('github')
})


router.get('/issues', (req, res) => {
  client.get('https://api.github.com/repos/1dv023/jl224dq-examination-3/issues', {},
    function (err, status, body, headers) {
      if (err) {
        console.log(err)
      }
      contexOfIssue = {
        issues: body.map(function (issue) {
          return {
            id: issue.id,
            title: issue.title,
            text: issue.body,
            comments: issue.comments,
            Url: issue.url,
            created_at: issue.created_at,
            updated_at: issue.updated_at
          }
        })
      }
      res.render('issues', contexOfIssue)
    })
})

module.exports = router

