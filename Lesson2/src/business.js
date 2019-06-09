"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeBusiness = void 0;

var _sponsors = require("./sponsors");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MakeBusiness =
/*#__PURE__*/
function () {
  function MakeBusiness(owner) {
    var director = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Victor';
    var cash = arguments.length > 2 ? arguments[2] : undefined;
    var emp = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, MakeBusiness);

    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
  }

  _createClass(MakeBusiness, [{
    key: "total",
    value: function total() {
      var sumSponsors = _sponsors.eu.concat(_sponsors.rus, 'unexpected sponsor');

      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, " . And our employers: ").concat(this.emp));
      console.log('And we have a sponsors: ');
      console.log.apply(null, sumSponsors);
      console.log("Note. Be careful with ".concat(_sponsors.eu[0], ". It's a huge risk."));
    }
  }]);

  return MakeBusiness;
}();

exports.MakeBusiness = MakeBusiness;