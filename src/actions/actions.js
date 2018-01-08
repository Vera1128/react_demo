/**
 * Created by yangyang.xu on 2017/11/28.
 */
import myLib from '../utils/myLib';

export function act_articles_list() {
  return (dispatch, getState) => {
    //使用node server.js开启本地服务器，用于接收请求
    myLib.ajax({
      // url: 'http://10.0.9.236:8877/artical_list',
      url: '/artical_list',
      type: 'get',
      dataType: 'json',
      success: function(res){
        dispatch(act_articles_list_succ(res.result));
      },
      fail: function(res){
      }
    })
  }
}

export function act_articles_list_succ(data) {
  return {
    type: "GET_ARTICLES_LIST_SUCCESS",
    data: data
  }
}