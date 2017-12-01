/**
 * Created by yangyang.xu on 2017/11/27.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListItem from "../component/ListItem";
import * as articlesListAct from "../actions/actions";

class List extends Component {
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
    const articles_list = this.props.red_articles_list;
    console.log(articles_list);
    return (
      <div>
        {articles_list.map((item, index) => (
           <ListItem key={index} value={item}/>
          )
        )}
      </div>
    );
  }
  //生命周期函数
  //在render方法之前执行
  componentWillMount() {

  }
  //在render方法之后执行
  componentDidMount() {
    //分发一个action
    this.props.act_articles_list();
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

function mapstate(state) {
  return{
    red_articles_list: state.red_articles_list,
  }
}

function bindaction(dispatch) {
  return bindActionCreators(articlesListAct, dispatch)
}

export default connect(mapstate, bindaction)(List)
