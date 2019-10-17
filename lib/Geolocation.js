var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLocation } from "./api";
var debug = function debug() {};

var Geolocation = function (_Component) {
  _inherits(Geolocation, _Component);

  function Geolocation(props) {
    _classCallCheck(this, Geolocation);

    var _this = _possibleConstructorReturn(this, (Geolocation.__proto__ || Object.getPrototypeOf(Geolocation)).call(this, props));

    _this._entity = null;
    return _this;
  }

  _createClass(Geolocation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          __map__ = _props.__map__,
          options = _props.options,
          events = _props.events,
          children = _props.children;

      var opts = _extends({}, options || {}, { map: __map__ });
      var evts = events || {};

      this._entity = getLocation(opts, evts);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          __map__ = _props2.__map__,
          options = _props2.options,
          events = _props2.events;

      var opts = _extends({}, options || {}, { map: __map__ });
      var evts = events || {};
      if (!this._entity) {
        this._entity = getLocation(opts, evts);
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Geolocation;
}(Component);

Geolocation.propTypes = {
  __map__: PropTypes.object,
  options: PropTypes.object,
  events: PropTypes.object
};
export default Geolocation;