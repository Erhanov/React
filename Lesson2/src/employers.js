"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employersNames = void 0;
var employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
var employersNames = [];
exports.employersNames = employersNames;

for (var i = 0; i < employers.length; i++) {
  if (employers[i].length > 0 && employers[i].length != '') {
    employersNames.push(employers[i]);
  }
}

for (var _i = 0; _i < employersNames.length; _i++) {
  employersNames[_i] = employersNames[_i].toLowerCase().trim();
}