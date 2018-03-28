const crypto = require('crypto')
const mysql = require('mysql');
const fs = require('fs')
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '07690928wxq',
  database: 'cake'
})
function database (sql) {
  return new Promise((resolve, reject) => {
    db.query(sql, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function md5 (str) {
  let obj = crypto.createHash('md5')
  obj.update(str)
  return obj.digest('hex')
}

function readFile (url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf-8', (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function rename (oldPath, newPath) {
  return new Promise((resolve, reject) => {
    fs.rename(oldPath, newPath, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

const SECRET = 'dsicpqfkxcvDAFSkdsjfJFKDSfkdsFDJSF'

module.exports = {
  database,
  md5,
  SECRET,
  readFile,
  rename
}
