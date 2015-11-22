/* =========================================================================
 *
 * editor__error-marker.js
 *  show a tooltip for error markers
 *
 * ========================================================================= */
import React from 'react';
var ReactTooltip = require("react-tooltip")

var ErrorMarker = React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },
  setMessage(message) {
    this.setState({
      visible: true,
      message: message
    })
  },
  handleDestroy(){
    this.setState({
      destroy:true
    });
  },
  render() {
    if(this.state.destroy) {
      return null;
    }
    return (
      <div>
        <div data-for='ErrorMarker' data-tip={this.state.message} data-place='right' data-effect="solid">●</div>
        <ReactTooltip id='ErrorMarker'/>
      </div>
    )
    /*return (
        <div data-tip={this.state.message} data-place='right' data-effect="solid">●</div>
    )*/
  }
});

export default ErrorMarker
