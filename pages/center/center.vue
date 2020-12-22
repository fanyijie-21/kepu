<template>
	<view class="center">
		<view class="logo" @click="goDetail">
			<image class="logo-img" :src="userinfo.avatarUrl || avatarUrl"></image>
			<view class="logo-title">
				<text class="uer-name" @click="goDetail()">Hi，{{ userinfo.nickName || '您未登录' }}</text>
				<text class="go-login navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="none">
				<text class="list-icon">&#xe60f;</text>
				<text class="list-text">帐号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="none">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text">消息通知</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="shoucang">
				<text class="list-icon">&#xe639;</text>
				<text class="list-text">我的收藏</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goFeedback">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">用户反馈</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="privacy">
				<text class="list-icon">&#xe65f;</text>
				<text class="list-text">服务条款及隐私</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item border-bottom" @click="about">
				<text class="list-icon">&#xe614;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			avatarUrl: '../../static/uni-center/logo.png',
			userinfo: {}
		};
	},
	onShow() {
		// #ifdef MP-WEIXIN
		const userinfo = uni.getStorageSync('userinfo');
		this.userinfo = JSON.parse(userinfo);
		console.log(this.userinfo);
		// #endif
	},
	methods: {
		goDetail() {
			uni.navigateTo({
				url: '/pages/QuShe-login/QuShe-login'
			});
		},
		none() {
			uni.navigateTo({
				url: '../sorry/sorry'
			});
		},
		goFeedback() {
			uni.navigateTo({
				url: '../feedback/feedback'
			});
		},
		shoucang() {
			uni.navigateTo({
				url: '../shoucang/shoucang'
			});
		},
		privacy() {
			uni.navigateTo({
				url: '../privacy/privacy'
			});
		},
		about() {
			uni.navigateTo({
				url: '../about/about'
			});
		}
	}
};
</script>

<style scoped>
@font-face {
	font-family: texticons;
	font-weight: normal;
	font-style: normal;
	src: url('https://at.alicdn.com/t/font_984210_5cs13ndgqsn.ttf') format('truetype');
}

page,
view {
	display: flex;
}

page {
	background-color: #f8f8f8;
}

.center {
	flex-direction: column;
}

.logo {
	width: 750upx;
	height: 240upx;
	padding: 20upx;
	box-sizing: border-box;
	background-color: #74b9ff;
	flex-direction: row;
	align-items: center;
}

.logo-hover {
	opacity: 0.8;
}

.logo-img {
	width: 150upx;
	height: 150upx;
	border-radius: 150upx;
}

.logo-title {
	height: 150upx;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	margin-left: 20upx;
}

.uer-name {
	height: 60upx;
	line-height: 60upx;
	font-size: 38upx;
	color: #ffffff;
}

.go-login.navigat-arrow {
	font-size: 38upx;
	color: #ffffff;
}

.login-title {
	height: 150upx;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
	margin-left: 20upx;
}

.center-list {
	background-color: #ffffff;
	margin-top: 20upx;
	width: 750upx;
	flex-direction: column;
}

.center-list-item {
	height: 90upx;
	width: 750upx;
	box-sizing: border-box;
	flex-direction: row;
	padding: 0upx 20upx;
}

.border-bottom {
	border-bottom-width: 1upx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}

.list-icon {
	width: 40upx;
	height: 90upx;
	line-height: 90upx;
	font-size: 30upx;
	color: #74b9ff;
	text-align: center;
	font-family: texticons;
	margin-right: 20upx;
}

.list-text {
	height: 90upx;
	line-height: 90upx;
	font-size: 30upx;
	color: #555;
	flex: 1;
	text-align: left;
}

.navigat-arrow {
	height: 90upx;
	width: 40upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #555;
	text-align: right;
	font-family: texticons;
}
</style>
