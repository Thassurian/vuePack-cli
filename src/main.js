// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import axios from './lib/apiService';    //封装过的axios请求，用来统一处理请求
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
import notice from './lib/noticeService.js';    //封装过的弹窗消息组件
Vue.prototype.$notice = notice.notice;
Vue.prototype.$message = notice.message;
Vue.prototype.setStorage = (key,obj)=>{
	window.localStorage.setItem(key, window.JSON.stringify(obj))
};
Vue.prototype.getStorage = (key)=>{
	return window.JSON.parse(window.localStorage.getItem(key))
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
