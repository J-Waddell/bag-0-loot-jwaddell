'use strict'

const sqlite3 = require('sqlite3').verbose()

const DB = new sqlite3.Database('chiren.sqlite')
console.log(DB)