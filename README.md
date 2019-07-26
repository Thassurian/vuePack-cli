# app

该包裹使用vue-cli创建，整合了vue-router、axios、element-ui以及二次封装过的组件，修改了router的index.js里文件加载方式；

·页面中请求使用 this.$axios.post(url,data).then(); 或者 this.$axios.get(url).then();
·使用消息弹窗或信息弹窗 this.$notice和 this.$message，都有success、error、warning三个函数方法，传入('消息','标题')参数，$message不用传标题;
·使用弹出层时,有封装好的components/template/popupMod.vue组件可以使用，传入参数：标题string，宽度string，取消文字string，确认文字string,是否显示按钮boonlean，有取消按钮回调@cancel、提交回调@confirm。弹窗内的内容可以自定义在弹窗标签中间，有插槽可以展示

> a vue collection package

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
