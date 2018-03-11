// require('dotenv/config')
// console.log(process.env.GITHUBACESSTOKEN)
const express = require('express')
const router = express.Router()
var github = require('octonode')

var client = github.client('ee3c4f0dd9e32d7721b852112944f054d8ee3ef0')

client.get('https://api.github.com/repos/1dv023/jl224dq-examination-3/issues', {},
 function (err, status, body, headers) {
   if (err) {
     console.log(err)
   }
   let context = {
     issues: body.map(function (issue) {
       return {
         url: issue.url
       }
     })
   }
   console.log(context) // json object
 })

module.exports = router
