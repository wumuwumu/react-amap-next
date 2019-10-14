import React, { Component } from "react";
import PropTypes from "prop-types";
import { getLocation } from "./api";
const debug = () => {};
export default class Geolocation extends Component {
  static propTypes = {
    __map__: PropTypes.object,
    options: PropTypes.object,
    events: PropTypes.object
  };

  constructor(props) {
    super(props);
    this._entity = null;
  }

  componentDidMount() {
    let { __map__, options, events, children } = this.props;
    let opts = { ...(options || {}), map: __map__ };
    let evts = events || {};

    this._entity = getLocation(opts, evts);
  }

  componentDidUpdate(prevProps) {
    let { __map__, options, events } = this.props;
    let opts = { ...(options || {}), map: __map__ };
    let evts = events || {};
    if (!this._entity) {
      this._entity = getLocation(opts, evts);
      return;
    }
  }

  render() {
    return null;
  }
}
