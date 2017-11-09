/**
 * Created by yangyang.xu on 2017/11/2.
 */
import React, { Component, PropTypes} from 'react';

class SelectMulti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      area: [],
      value: 'hah'
    };
  }
  static PropTypes = {

  };
  static defaultProps = {

  };
  render() {
    const { area } = this.state;
    return (
      <div>
        <select multiple={true} value={area} onChange={this.handleSelect}>
          <option value="beijing">北京</option>
          <option value="shanghai">上海</option>
          <option value="hangzhou">杭州</option>
        </select>
        <form onSubmit={this.handleSubmit}>
          <input ref="name" type="text" defaultValue="hangzhou" />
          <button type="submit">Submit</button>
          {/*非受控组件，可使用defaultValue和defaultChecked来表示组件的默认状态，仅会被渲染一次，在后续的渲染中不起作用*/}
          <input defaultValue={this.state.value} onChange={e => {this.setState({value: e.target.value.toUpperCase()})}}/>
          {/*受控组件(有value 或者checked属性)，完成数据双向绑定*/}
          <input value={this.state.value} onChange={e => {this.setState({value: e.target.value.toUpperCase()})}}/>
        </form>
      </div>
    );
  }
  handleSelect = (e) => {
    const { options } = e.target;
    const area = Object.keys(options).filter(i => options[i].selected === true).map(i => options[i].value);
    this.setState({
      area: area
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.refs.name.value);
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

export default SelectMulti
