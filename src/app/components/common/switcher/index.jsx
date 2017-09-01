import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'
import style from './style.scss';
import * as actions from '@src/actions/index.js';

export default class Switcher extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: this.props.enabled
    }
  }
  
  componentWillReceiveProps(props) {
    this.setState({
      status: props.enabled
    });
  }

  toggleSwitcher = () => {
    actions.setNotificationsPermission(this.state.status)
  }

  setTriggerClass = () => {
    return this.state.status ? style.switcherContainerOn : style.switcherContainerOff
  }

  setTriggerClassDisabled = () => {
    if (this.props.permission === 'denied') {
      return style.switcherDisabled
    }
  }

  getSwitcherText = () => {
    return this.state.status ? 'On' : "Off"
  }

  getSwitcherTextClass = () => {
    return this.state.status ? style.switcherTextOn : style.switcherTextOff
  }
 
  render() {
    const switcherClass = classnames(style.switcherContainer, this.setTriggerClass(), this.setTriggerClassDisabled())
    const switcherTextClass = classnames(style.switcherText, this.getSwitcherTextClass())
    return (
      <div 
        className={switcherClass}
        onClick={this.toggleSwitcher}
      >
        <div className={style.switcherTrigger} />
        <div className={switcherTextClass}>
          {this.getSwitcherText()}
        </div>
      </div>
    )
  }
}

Switcher.propTypes = {
  enabled: PropTypes.bool,
  permission: PropTypes.string
};