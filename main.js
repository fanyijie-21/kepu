import Vue from 'vue'
import App from './App'
// 全局引入字体图标组件
import uniIcons from './components/uni-icons/uni-icons.vue'
Vue.component('uniIcons', uniIcons)

import share from 'utils/share.js'
Vue.mixin(share)

//引入插件
import uniPopup from './components/uni-popup/uni-popup.vue';
import shareBtn from './components/share-btn/share-btn.vue';
// 注册插件
components: {
	'uniPopup,'
	uniPopup,
	'shareBtn',
	shareBtn
}

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
