/**
 * Created by yangyang.xu on 2017/11/1.
 */
import React, { Component, PropTypes} from 'react';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox_select: {
        'Cappuccino': true,
        'CafeMocha': false,
        'CaffeLatte': false,
        'Machiatto': false
      }
    };
  }
  static PropTypes = {

  };
  static defaultProps = {

  };
  render() {
    const { checkbox_select } = this.state;
    return (
      <div>
        <p>请选择你最喜欢的咖啡:</p>
        <label>
          <input type="checkbox" value="Cappuccino" checked={checkbox_select['Cappuccino']} onChange={this.handleSelect}/>Cappuccino
        </label><br/>
        <label>
          <input type="checkbox" value="CafeMocha" checked={checkbox_select['CafeMocha']} onChange={this.handleSelect}/>CafeMocha
        </label><br/>
        <label>
          <input type="checkbox" value="CaffeLatte" checked={checkbox_select['CaffeLatte']} onChange={this.handleSelect}/>CaffeLatte
        </label><br/>
        <label>
          <input type="checkbox" value="Machiatto" checked={checkbox_select['Machiatto']} onChange={this.handleSelect}/>Cappuccino
        </label><br/>
      </div>
    );
  }
  handleSelect = (e) => {
    let new_checkbox_select = this.state.checkbox_select;
    new_checkbox_select[e.target.value] = e.target.checked;
    this.setState({
      checkbox_select: new_checkbox_select
    })
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

export default CheckBox
