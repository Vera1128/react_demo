/**
 * Created by yangyang.xu on 2017/11/28.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import '../style/home.scss';

class Other extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static propTypes = {

  };
  static defaultProps = {
    testUrl: '<img src=\'http://cootek-dialer-download.oss-cn-hangzhou.aliyuncs.com/web/internal/activities/invite_friend/img/in_app/QQ.png\'/>'
  };
  render() {
    return (
      <div className="img-container">
        <img src={require('../image/caidan.jpeg')}/>
        {/*{this.props.testUrl}*/}
        <div dangerouslySetInnerHTML={{__html: this.props.testUrl}} />
      </div>
    );
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
    //使用is进行比较是否需要更新节点，节省性能
    const thisProps = this.props || {};
    const thisState = this.state || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length){
      return true;
    }

    for (const key in nextProps) {
      if (nextProps.hasOwnProperty(key) && !is(thisProps[key], nextProps[key])){
        return true;
      }
    }

    for (const key in nextState) {
      if (nextState.hasOwnProperty(key) && !is(thisState[key], nextState[key])){
        return true;
      }
    }
    return false;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default Other
