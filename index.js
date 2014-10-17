'use strict';

var codes = {
  'white': 37,
  'grey': 90,
  'black': 30,
  'blue': 34,
  'cyan': 36,
  'green': 32,
  'magenta': 35,
  'red': 31,
  'yellow': 33
};

function Render(code) {
  return function(s) {
    var a = '\x1B[' + code.toString() + 'm' + s + '\x1B[39m';
    return a;
  }
};
var colors = {}
var keys = Object.keys(codes)
for (var i = keys.length - 1; i >= 0; i--) {
  var key = keys[i];
  colors[key] = new Render(codes[key])
};
module.exports = colors;
