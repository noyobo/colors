var colors = require('../')

var expect = require('chai').expect;
var async = require('async')


describe('colors test', function() {
  describe('testing', function() {
    var colorsArr = null;
    var colorsExpect = ['\u001b[37m37\u001b[39m',
      '\u001b[90m90\u001b[39m',
      '\u001b[30m90\u001b[39m',
      '\u001b[34m90\u001b[39m',
      '\u001b[36m90\u001b[39m',
      '\u001b[32m90\u001b[39m',
      '\u001b[35m90\u001b[39m',
      '\u001b[31m90\u001b[39m',
      '\u001b[33m90\u001b[39m'
    ]
    before(function(done) {
      async.parallel([
        function(cb) {
          var a = colors.white(37);
          cb(null, a)
        },
        function(cb) {
          var a = colors.grey(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.black(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.blue(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.cyan(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.green(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.magenta(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.red(90)
          cb(null, a)
        },
        function(cb) {
          var a = colors.yellow(90)
          cb(null, a)
        }

      ], function(err, results) {
        colorsArr = results;
        done()
      })
    });
    it('colors', function() {
      expect(colorsArr).to.deep.equals(colorsExpect)
    });
  });
});
