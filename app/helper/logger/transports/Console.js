'use strict'

/* eslint-disable no-console */
const { transports } = require('winston')
const { LEVEL, MESSAGE } = require('triple-beam')

class Console extends transports.Console {
  log (info, callback) {
    setImmediate(() => this.emit('logged', info))

    // Remark: what if there is no raw...?
    if (this.stderrLevels[info[LEVEL]]) {
      console.error(info[MESSAGE])

      if (callback) {
        callback() // eslint-disable-line callback-return
      }
      return
    } else if (this.consoleWarnLevels[info[LEVEL]]) {
      console.warn(info[MESSAGE])

      if (callback) {
        callback() // eslint-disable-line callback-return
      }
      return
    }

    console.log(info[MESSAGE])

    if (callback) {
      callback() // eslint-disable-line callback-return
    }
  }
}

module.exports = Console
