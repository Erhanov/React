"use strict";

var _employers = require("./employers");

var _sponsors = require("./sponsors");

var _business = require("./business");

var money = (0, _sponsors.calcCash)(10000, _sponsors.cash);
var business = new _business.MakeBusiness('Jack', 'Sam', money, _employers.employersNames);
business.total();