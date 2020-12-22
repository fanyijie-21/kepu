<template>
	<view class="Box">
		<!-- 视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video1" :key="item.id" @click="goVideoDetail(item)">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<view class="zan">
							<uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
							<text class="num1">{{ item.praise_num }}</text>
							<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
							<text class="num2">{{ item.play_num }}</text>
						</view>
						<!-- 转发 -->
						<view class="share" @click.stop="open">
							<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 文章部分 -->
		<view class="box2">
			<view class="box2_item" v-for="item in article1" :key="item.id" @click="goArticleDetail(item)">
				<view class="item-content">
					<view class="img"><image :src="item.info.cover_img" mode="widthFix"></image></view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author">{{ item.channel.name }}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<!-- 点击后的字体图标<uni-icons type="hand-thumbsup-filled" size="14" color="#7bed9f"> -->
								<view class="zan">
									<uni-icons class="dianzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
									<text class="num1">{{ item.praise_num }}</text>
									<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
									<text class="num2">{{ item.play_num }}</text>
								</view>
								<!-- 转发 -->
								<view class="share" @click.stop="open">
									<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
									<text>分享</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video2" :key="item.id" @click="goVideoDetail(item)">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<view class="zan">
							<uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
							<text class="num1">{{ item.praise_num }}</text>
							<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
							<text class="num2">{{ item.play_num }}</text>
						</view>
						<!-- 转发 -->
						<view class="share" @click.stop="open">
							<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 文章部分 -->
		<view class="box2">
			<view class="box2_item" v-for="item in article2" :key="item.id" @click="goArticleDetail(item)">
				<view class="item-content">
					<view class="img"><image :src="item.info.cover_img" mode="widthFix"></image></view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author">{{ item.channel.name }}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<view class="zan">
									<uni-icons class="dianzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
									<text class="num1">{{ item.praise_num }}</text>
									<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
									<text class="num2">{{ item.play_num }}</text>
								</view>
								<!-- 转发 -->
								<view class="share" @click.stop="open">
									<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
									<text>分享</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 视频部分 -->
		<view class="box">
			<view class="videos" v-for="item in video3" :key="item.id" @click="goVideoDetail(item)">
				<!-- 视频封面上的标题 -->
				<text class="videos_title">{{ item.title }}</text>
				<view class="imgbox">
					<!-- 视频封面 -->
					<image class="videos_img" :src="item.info.video_img" mode="widthFix"></image>
					<view class="videos_length">{{ item.video_length }}</view>
				</view>
				<!-- 来源 -->
				<view class="channel">
					<!-- 作者名 -->
					<view class="author">{{ item.channel.name }}</view>
					<view class="interact">
						<!-- 点赞按钮 -->
						<view class="zan">
							<uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
							<text class="num1">{{ item.praise_num }}</text>
							<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
							<text class="num2">{{ item.play_num }}</text>
						</view>
						<!-- 转发 -->
						<view class="share" @click.stop="open">
							<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
							<text>分享</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 文章部分 -->
		<view class="box2">
			<view class="box2_item" v-for="item in article3" :key="item.id" @click="goArticleDetail(item)">
				<view class="item-content">
					<view class="img"><image :src="item.info.cover_img" mode="widthFix"></image></view>
					<view class="right">
						<view class="title">{{ item.title }}</view>
						<!-- 来源 -->
						<view class="channel">
							<!-- 作者名 -->
							<view class="author">{{ item.channel.name }}</view>
							<view class="interact">
								<!-- 点赞按钮 -->
								<view class="zan">
									<uni-icons class="dianzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons>
									<text class="num1">{{ item.praise_num }}</text>
									<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
									<text class="num2">{{ item.play_num }}</text>
								</view>
								<!-- 分享到微信 -->
								<!-- @click.stop阻止父级的点击事件 -->
								<view class="share" @click.stop="open">
									<uni-icons type="redo" size="28rpx" color="#636e72"></uni-icons>
									<text>分享</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup ref="sharepopup" type="bottom"><share-btn :sharedataTemp="sharedata"></share-btn></uni-popup>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';

export default {
	data() {
		return {
			sharedata: '',
			video1: [],
			article1: [],
			video2: [],
			article2: [],
			video3: [],
			article3: []
		};
	},
	created() {
		this.getVideos1();
		this.getArticle1();
		this.getVideos2();
		this.getArticle2();
		this.getVideos3();
		this.getArticle3();
	},
	methods: {
		// 点击进入文章详情页
		goArticleDetail(item) {
			uni.navigateTo({
				url: `/pages/ArticleDetail-FamilyLife/ArticleDetail-FamilyLife?id=${item.id}`
			});
		},
		// 点击进入视频详情页
		goVideoDetail(item) {
			uni.navigateTo({
				url: `/pages/VideoDetail-FamilyLife/VideoDetail-FamilyLife?id=${item.id}`
			});
		},
		async getVideos1() {
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 28,
				p: 1,
				order: 1,
				limit: 1,
				channel_id: 28
			});
			this.video1 = result;
		},
		async getArticle1() {
			let result = await myRequestGet('/api/v1/fatiao/article/list', {
				id: 28,
				p: 1,
				order: 1,
				limit: 6,
				channel_id: 28
			});
			this.article1 = result;
		},
		async getVideos2() {
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 28,
				p: 2,
				order: 1,
				limit: 1,
				channel_id: 28
			});
			this.video2 = result;
		},
		async getArticle2() {
			let result = await myRequestGet('/api/v1/fatiao/article/list', {
				id: 28,
				p: 2,
				order: 1,
				limit: 6,
				channel_id: 28
			});
			this.article2 = result;
		},
		async getVideos3() {
			let result = await myRequestGet('/api/v1/fatiao/index/list', {
				id: 28,
				p: 3,
				order: 1,
				limit: 1,
				channel_id: 28
			});
			this.video3 = result;
		},
		async getArticle3() {
			let result = await myRequestGet('/api/v1/fatiao/article/list', {
				id: 28,
				p: 3,
				order: 1,
				limit: 6,
				channel_id: 28
			});
			this.article3 = result;
		},
		open: function() {
			this.$refs.sharepopup.open();
		}
	}
};
</script>

<style lang="scss" scoped>
.Box {
	font-size: 30rpx;
	font-weight: 550;
	color: #353b48;
	width: 100%;
	height: auto;
	margin-top: 20rpx;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
	box-shadow: 0 -2rpx 6rpx 8rpx #f4f4f5;
	padding-top: 12rpx;
	background-color: #fff;
	.box {
		// 颜色为了看位置
		// background-color: #eee;
		width: auto;
		margin-top: 20rpx;
		margin-left: 24rpx;
		margin-right: 24rpx;
		.videos {
			padding: 0;
			.imgbox {
				position: relative;
				margin-top: 16rpx;
				width: 100%;
				position: relative;
				.videos_img {
					border-radius: 10rpx;
					width: 100%;
				}
				.videos_length {
					font-size: 18rpx;
					font-weight: 400;
					width: 70rpx;
					background-color: rgba($color: #2d3436, $alpha: 0.6);
					text-align: center;
					color: #ffffff;
					border-radius: 14rpx;
					position: absolute;
					right: 8rpx;
					bottom: 18rpx;
				}
			}
			.channel {
				height: 60rpx;
				line-height: 60rpx;
				padding-bottom: 14rpx;
				border-bottom: 2rpx solid #ecf0f1;
				.author {
					float: left;
					font-size: 24rpx;
					font-weight: bolder;
					position: relative;
				}
				.author::after {
					content: '';
					background-color: #74b9ff;
					width: 97rpx;
					height: 8rpx;
					position: absolute;
					left: 0rpx;
					top: 44rpx;
				}
				.interact {
					float: right;
					.zan {
						display: inline-block;
						color: #a4b0be;
						font-size: 28rpx;
						.num1 {
							margin-left: 8rpx;
							margin-right: 8rpx;
							font-weight: 400;
						}
						.num2 {
							margin-left: 8rpx;
							font-weight: 400;
						}
					}
					.share {
						display: inline-block;
						margin-left: 10rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #747d8c;
					}
				}
			}
		}
	}
	.box2 {
		width: auto;
		margin-left: 24rpx;
		margin-right: 24rpx;
		.box2_item {
			// background-color: pink;
			height: auto;
			padding-top: 24rpx;
			padding-bottom: 24rpx;
			position: relative;
			border-bottom: 2rpx solid #ecf0f1;
			.item-content {
				height: 100%;
				.img {
					display: inline-block;
					width: 32.76%;
					image {
						width: 100%;
						border-radius: 12rpx;
					}
				}
				.right {
					display: inline-block;
					width: 65.52%;
					height: 135.32rpx;
					position: relative;
					margin-left: 10rpx;
					.title {
						position: absolute;
						top: 4rpx;
						left: 0;
						width: 100%;
					}
					.channel {
						position: absolute;
						bottom: 4rpx;
						left: 0;
						width: 100%;
						.author {
							display: inline-block;
							float: left;
							font-size: 24rpx;
							font-weight: bolder;
							position: relative;
						}
						.author::after {
							content: '';
							background-color: #74b9ff;
							width: 97rpx;
							height: 4rpx;
							position: absolute;
							left: 0px;
							top: 30rpx;
						}
						.interact {
							// margin-left: 198rpx;
							float: right;
							margin-top: -6rpx;
							.zan {
								display: inline-block;
								color: #a4b0be;
								font-size: 28rpx;
								.num1 {
									margin-left: 6rpx;
									margin-right: 8rpx;
									font-weight: 400;
								}
								.num2 {
									margin-left: 6rpx;
									font-weight: 400;
								}
							}
							.share {
								display: inline-block;
								margin-left: 10rpx;
								font-size: 14px;
								font-weight: bold;
								color: #747d8c;
							}
						}
					}
				}
			}
		}
	}
}
</style>
