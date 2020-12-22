<template>
	<view class="Box">
		<view class="title">服务协议和隐私政策</view>
		<view class="message">
			尊敬的用户，欢迎您注册成为本应用用户，在注册前请您仔细阅读
			<text>《用户协议》</text>及<text>《隐私政策》</text>，
			了解我们对您使用我们APP制定的规则，您个人信息的处理以及申请权限的目的和使用范围。</br>
			<view class="content">经您确认后，本用户协议和隐私权政策即在您和本应用之间产生法律效力。请您务必在注册之前认真阅读全部服务协议内容，如有任何疑问，可向本应用客服咨询。</view>
		</view>
		<view class="button">
			<button type="default" @click="sub1">我知道了</button>
			<button type="default" @click="sub2">暂不使用</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			sub1(){
				uni.showToast({
					title: '同意协议',
				    icon: 'success',
				    duration: 1000
				});
				setTimeout(() => {
				    uni.switchTab({
				        url: "../my/my",
					});
				}, 600);
			},
			sub2(){
				uni.showToast({
					title: '暂不同意',
				    icon: 'none',
				    duration: 1000
				});
				setTimeout(() => {
				    uni.switchTab({
				        url: "../my/my",
					});
				}, 600);
			},
		}
	}
</script>

<style lang="scss">
page{background-color: #f1f1f1;}
.Box{
	margin: 50rpx auto;
	.title{
		width: 100%;
		height: 100rpx;
		font-size: 60rpx;
		font-weight: 700;
		text-align: center;
	}
	.message{
		margin-top: 20rpx;
		padding: 20rpx;
		font-size: 40rpx;
		line-height: 1.5em;
		text-indent: 2em;
		text{
			color: #0652DD;
		}
		.content{
			text-indent: 2em;
		}
	}
	.button{
		padding: 20rpx;
		display: flex;
		button{
			color:#2980b9;
		}
	}
}
</style>
