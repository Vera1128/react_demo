/**
 * Created by yangyang.xu on 2017/10/30.
 */
import React, { Component, PropTypes} from 'react';
import QrCode from './component/QrCode';
import CheckBox from './component/CheckBox';
import SelectMulti from './component/SelectMulti';
import List from './component/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static PropTypes = {

  };
  static defaultProps = {

  };
  render() {
    return (
      <div>
        <input type="text" ref={(ref) => this.myTextInput = ref} />
        <input type="button" value="Focus the text input" onClick={() => this.handleClick('haha')}/>
        <QrCode/>
        <CheckBox/>
        <SelectMulti/>
        <List list={[{text:1}, {text:2}, {text:3}, {text:4}]} handleItemChange={this.handleItemChange}/>
      </div>
    );
  }
  handleClick = (str) => {
    if (this.myTextInput !== null) {
      this.myTextInput.focus();
      console.log(str);
    }
  }
  handleItemChange = (item) => {
    console.log(item);
    // console.log('yangyangyang');
  }
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

  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}
export default App
