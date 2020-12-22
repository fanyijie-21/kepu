<template>
	<view class="Box">
		<view class="content">本平台所有资源由以下资源库授权使用:</view>
		<view class="image">
			<image src="../../static/logo.png" mode="widthFix"></image>
		</view>
		<view class="rank">以上排名不分先后</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
page{background-color: #f1f1f1;}
.Box{
	margin: 40rpx auto;
	.content{
		text-align: center;
		font-size: 40rpx;
	}
	.image{
		margin: 40rpx 0 0 60rpx;
		image{
			width: 200rpx;
		}
	}
	.rank{
		margin-top: 80rpx;
		font-size: 30rpx;
		text-align: center;
		color: #7f8fa6;
	}
}
</style>
