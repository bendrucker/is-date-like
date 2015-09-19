'use strict'

var test = require('tape')
var isDateLike = require('./')

test(function (t) {
  t.ok(isDateLike(new Date()))
  t.ok(isDateLike(new Date().toISOString()))
  t.notOk(isDateLike('08/28/1993'))
  t.end()
})
