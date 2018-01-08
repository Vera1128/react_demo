/**
 * Created by yangyang.xu on 2017/11/7.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { HashRouter, Route, hashHistory, Link, Switch } from 'react-router-dom';
import history from '../public/history';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes = {

  };
  static defaultProps = {

  };
  render() {
    return (
      <div>
        <div onClick={this.clickHandle}>
          {this.props.value.title} <br/>
          {this.props.value.content} <br/>
          <img src={this.props.value.img_url}/>
          {/*<img src={require(`${this.props.value.img_url}`)}/>*/}
          {/*<img src={require('../image/egg.png')}/>*/}
        </div>
      </div>
    );
  }
  clickHandle = () => {
    // react router4点击实现路由跳转
    history.push('/detail');
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
