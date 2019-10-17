var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createCircle, updateCircle } from './api';
var __com__ = 'Circle';
//const debug = console.log;
var debug = function debug() {};

export var Circle = function (_Component) {
  _inherits(Circle, _Component);

  function Circle() {
    _classCallCheck(this, Circle);

    var _this = _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).call(this));

    _this.refElement = null;
    _this._entity = null;
    return _this;
  }

  _createClass(Circle, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          __map__ = _props.__map__,
          options = _props.options,
          events = _props.events,
          children = _props.children;

      var opts = _extends({}, options || {}, { map: __map__ });
      this._entity = createCircle(opts, events);
      if (this._entity) {
        if (this.props.refer) this.props.refer(this._entity);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props,
          __map__ = _props2.__map__,
          options = _props2.options,
          events = _props2.events,
          children = _props2.children;

      var opts = _extends({}, options || {}, { map: __map__ });
      if (!this._entity) {
        this._entity = createCircle(opts, events);
        if (this._entity) {
          if (this.props.refer) this.props.refer(this._entity);
        }
        return;
      }

      // need check props changes, then update.
      var oldOpts = _extends({}, prevProps.options || {}, {
        map: prevProps.__map__
      });
      updateCircle(this._entity, opts, events, oldOpts, prevProps.events);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this._entity) {
        this._entity.setMap(null);
        this._entity = null;
        if (this.props.refer) this.props.refer(this._entity);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Circle;
}(Component);

Circle.propTypes = {
  __map__: PropTypes.object,
  options: PropTypes.object,
  events: PropTypes.object
};
export default Circle;