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

function writeFile (url, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(url, data, 'utf-8', (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function code () {
  let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"
  let res = ""
  for (let i; res.length < 4; i ++) {
    let num = Math.round(Math.random() * 52)
    let cur = str[num]
    if (!res.includes(cur)) res += cur
  }
  return res
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
  rename,
  code,
  writeFile
}
