import axios from 'axios';
import notice from './noticeService.js';

function apiAxios(_method, _url, _data) {
	var _promise = new Promise(function(resolve, reject){
		axios({
			method: _method,
			url: _url,
			data: _data
		}).then(function(res){
			resolve(res);
		}).catch(function (err) {
			notice.notice.error("服务器错误,请稍后再试！")
		  	console.log(err)
		})
	});
    return _promise; 
}

export default {
	get: function(_url, _data) {
		return apiAxios('GET', _url, _data)
	},
	post: function(_url, _data) {
		return apiAxios('POST', _url, _data)
	}
}