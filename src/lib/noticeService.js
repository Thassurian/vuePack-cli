import { Notification } from 'element-ui';
import { Message } from 'element-ui';
var noticeFlag = false;
export default {
	notice:{
		success: function(txt,tit){
			Notification({
	          title: tit||'操作成功',
	          message: txt,
	          type: 'success',
	          customClass: 'noticeCenter'
	        });
		},
		error: function(txt,tit){
			if(noticeFlag) return;
			noticeFlag = true;
			Notification({
	          title: tit||'操作失败',
	          message: txt,
	          type: 'error',
	          customClass: 'noticeCenter'
	        });
	        setTimeout(function(){
	        	noticeFlag = false;
	        },1000)
		},
		warning: function(txt,tit){
			Notification({
	          title: tit||'警告',
	          message: txt,
	          type: 'warning',
	          customClass: 'noticeCenter'
	        });
		}
	},
	message:{
		success: function(txt){
			Message({
				message: txt,
	          	type: 'success'
			})
		},
		error: function(txt){
			Message({
				message: txt,
	          	type: 'error'
			})
		},
		warning: function(txt){
			Message({
				message: txt,
	          	type: 'warning'
			})
		}
	}
}
