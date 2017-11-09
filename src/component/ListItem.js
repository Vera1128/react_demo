/**
 * Created by yangyang.xu on 2017/11/7.
 */
// js组件模板
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static PropTypes = {

  };
  static defaultProps = {
    text: '',
    checked: false,
  };
  static contextTypes = {
    color: PropTypes.string
  };
  render() {
    return (
      <div>
        <li style={{background: this.context.color}}>
          <input type="checkbox" checked={this.props.checked} onChange={this.props.onChange}/>
          <span>
            {this.props.value}
          </span>
        </li>
      </div>
    );
  }
  handleBtnClick = () => {
  }
  //生命周期函数
  //在render方法之前执行
  componentWillMount() {

  }
  //在render方法之后执行
  componentDidMount() {

  }
  //组件卸载前，常在其中执行一些清理方法，如事件回收或清除定时器
  componentWillUnmount() {
  }
  componentWillReceiveProps(nextProps) {

  }
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default ListItem
