'use strict'

var isoString = require('regex-iso-date')

module.exports = function isDateLike (value) {
  return value instanceof Date || isoString().test(value)
}
