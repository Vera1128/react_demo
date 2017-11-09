/**
 * Created by yangyang.xu on 2017/11/7.
 */
import React, { Component } from 'react';
import classNames from 'classnames';
import ListItem from './ListItem';
import PropTypes from 'prop-types';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list.map(entry => ({
        text: entry.text,
        checked: entry.checked
      }))
    };
  }
  static propTypes = {

  };
  static defaultProps = {
    list: [],
    handleItemChange: () => {}
  };
  //父组件定义ChildContext，从这一层开始的子组件都可以拿到定义的context
  static childContextTypes = {
    color: PropTypes.string
  };
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((entry, index) => (
              <ListItem key={`list-${index}`} value={entry.text} checked={entry.checked} onChange={() => this.onItemChange(entry)}/>
            ))
          }
        </ul>
      </div>
    );
  }
  onItemChange = (entry) => {
    const { list } = this.state;
    this.setState({
      list: list.map((prevEntry) => ({
        text: prevEntry.text,
        checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked
      }))
    });
    this.props.handleItemChange(entry);
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

export default List