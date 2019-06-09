"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = calcCash;
exports.rus = exports.eu = exports.cash = exports.sponsors = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;
var cash = sponsors.cash,
    eu = sponsors.eu,
    rus = sponsors.rus;
exports.rus = rus;
exports.eu = eu;
exports.cash = cash;

function calcCash() {
  var own = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var total = own;

  for (var _len = arguments.length, everyCash = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    everyCash[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < everyCash[0].length; i++) {
    total += +everyCash[0][i];
  }

  return total;
}