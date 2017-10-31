/**
 * Created by yangyang.xu on 2017/10/31.
 */
import React, { Component, PropTypes} from 'react';
import '../style/QrCode.scss';

class QrCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
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
        <img className="Qr-image" src={require('../image/egg.png')} style={{display: this.state.active ? 'block' : 'none'}}/>
      </div>
    );
  }
  handleBtnClick = () => {
    this.setState({
      active: true
    })
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
    return true;
  }
  componentWillUpdate(nextProps, nextState) {

  }
  componentDidUpdate(prevProps, prevState) {

  }
}

export default QrCode
