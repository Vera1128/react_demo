/**
 * Created by yangyang.xu on 2017/10/31.
 */
import React, { Component, PropTypes} from 'react';
import '../style/QrCode.scss';
import classNames from 'classnames';

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      inputValue: '',
      textareaValue: ''
    };
  }
  static PropTypes = {

  };
  static defaultProps = {

  };
  render() {
    return (
      <div>
        <div className="btn-style" onClick={this.handleBtnClick}>出现图片</div>
        <div className={classNames({'img-container': true, 'img-show': this.state.active, 'img-hidden': !this.state.active})} onClick={this.handleImgClick}>
          <img className="Qr-image" src={require('../image/egg.png')}/>
        </div>
        <div>
          <p>
            单行输入框：
            <input className="input-style" type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          </p>
          <p>
            多行输入框：
            <textarea className="input-style" type="text" value={this.state.textareaValue} onChange={this.handleTextareaChange}/>
          </p>
        </div>
      </div>
    );
  }
  handleBtnClick = () => {
    this.setState({
      active: true
    })
  }
  handleImgClick = (e) => {
    //防止事件冒泡
    e.nativeEvent.stopImmediatePropagation();
    console.log('stopPropagation');
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value.replace(/\s/g, "")
    })
  }
  handleTextareaChange = (e) => {
    this.setState({
      textareaValue: trim(e.target.value)
    })
  }
  //生命周期函数
  //在render方法之前执行
  componentWillMount() {

  }
  //在render方法之后执行
  componentDidMount() {
    document.addEventListener('click', e => {
      if (e.target && e.target.matches('div.btn-style')) {
        return;
      }
      this.setState({
        active: false
      })
    });
  }
  //组件卸载前，常在其中执行一些清理方法，如事件回收或清除定时器
  componentWillUnmount() {
    document.removeEventListener('click');
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

export default QrCode
