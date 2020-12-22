<template>
	<view class="Box">
		<view class="uni-textarea"><textarea placeholder-style="color:#b2bec3" placeholder="请输入反馈内容,帮助我们更好地改进	" /></view>
		<view class="picture" @click="upload">
			<uni-icons type="camera" size="50" color="#a4b0be"></uni-icons>
			<view class="tianjia">添加图片</view>
		</view>
		<view class="button"><button type="primary" @click="sub">提交</button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		upload() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['albuum'],
				success: function(res) {
					uni.getImageInfo({
						src: res.tempFilePaths[0],
						success: function(image) {
							console.log(image);
						}
					});

					uni.previewImage({
						urls: res.tempFilePaths,
						longPressActions: {
							itemList: ['首页', '收藏', '系统'],
							success: function(data) {
								console.log(data);
							}
						}
					});
				},
				fail: function(err) {
					console.log(err);
				}
			});
		},
		sub() {
			uni.showToast({
				title: '上传成功',
				icon: 'success',
				duration: 1000
			});
			setTimeout(() => {
				uni.switchTab({
					url: '../center/center'
				});
			}, 600);
		}
	}
};
</script>

<style lang="scss">
page {
	background-color: #ecf0f1;
}
.Box {
	.uni-textarea {
		// margin-top: 20rpx;
		padding: 40rpx 0 0 70rpx;
		background-color: #ffffff;
		height: 450rpx;
	}
	.picture {
		background-color: #fff;
		margin: 60rpx 0 0 60rpx;
		width: 200rpx;
		height: 160rpx;
		border: 1px dashed #e5e5e5;
		padding: 20rpx 0 0 0;
		text-align: center;
		.tianjia {
			font-size: 30rpx;
			color: #a4b0be;
		}
	}
	.button {
		margin-top: 60rpx;
		padding: 60rpx;
	}
}
</style>
