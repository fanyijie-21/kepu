<template>
	<view class="Box">
		<view class="video">
			<video
				class="play"
				:src="detail.info && detail.info.video_url"
				enable-play-gesture="true"
				enable-danmu="true"
				page-gesture="true"
				direction="-90"
				objectFit="contain"
				:poster="detail.info && detail.info.video_img"
				autoplay="true"
			></video>
		</view>
		<view class="article">
			<view class="title">{{ detail.title }}</view>
			<view class="channel">
				<image class="channel_img" :src="detail.channel && detail.channel.channel_img" mode="widthFix"></image>
				<view class="text">
					<text class="channel_name">{{ detail.channel && detail.channel.name }}</text>
					<text class="data">2019-11-15</text>
				</view>
			</view>
			<view class="content">{{ detail.info && detail.info.video_note }}</view>
			<view class="bottom">
				<view class="interact">
					<!-- 点赞按钮 -->
					<view class="zan">
						<!-- <uni-icons class="diannzan" type="hand-thumbsup" size="28rpx" color="#a4b0be"></uni-icons> -->
						<text class="dianzan iconfont icon-dianzan" @click="addone()" :style="flag ? 'color:yellow' : ''"></text>
						<text class="num1">{{ detail.praise_num }}</text>
						<uni-icons class="watch" type="eye" size="28rpx" color="#a4b0be"></uni-icons>
						<text class="num2">{{ detail.play_num }}</text>
					</view>
					<!-- 转发 -->
					<view class="share" @click="open">
						<uni-icons type="redo" size="30rpx" color="#636e72"></uni-icons>
						<text>分享</text>
					</view>
				</view>
			</view>
		</view>
		<view class="gray"></view>
		<!-- 猜你喜欢部分 -->
		<view class="Box2">
			<view class="banner">猜你喜欢</view>
			<!-- 视频部分 -->
			<view class="box">
				<view class="videos" v-for="item in video1" :key="item.id" @click="goVideoDetail(item)">
					<!-- 视频封面上的标题 -->
					<text class="videos_title">{{ item.title }}</text>
					<view class="imgbox">
						<!-- 视频封面 -->
						<image class="videos_img" :src="item.video_img" mode="widthFix"></image>
						<view class="videos_length">{{ item.video_length }}</view>
					</view>
					<!-- 来源 -->
					<view class="channel">
						<!-- 作者名 -->
						<view class="author">{{ item.author_name }}</view>
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
						<view class="img"><image :src="item.c_img" mode="widthFix"></image></view>
						<view class="right">
							<view class="title">{{ item.title }}</view>
							<!-- 来源 -->
							<view class="channel">
								<!-- 作者名 -->
								<view class="author">{{ item.author_name }}</view>
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
		</view>
		<!-- 弹出层 -->
		<uni-popup ref="sharepopup" type="bottom"><share-btn :sharedataTemp="sharedata"></share-btn></uni-popup>
	</view>
</template>

<script>
import { myRequestGet } from '@/utils/request.js';

export default {
	data() {
		return {
			sharedata: '',
			detail: {},
			id: '',
			flag: false,
			video1: [],
			article1: []
		};
	},
	onLoad(options) {
		this.id = options.id;
		this.getVideoDetail();
		this.getVideos1();
		this.getArticle1();
	},
	methods: {
		// 点赞+1方法
		one() {
			this.flag = !this.flag;
		},
		addone(i) {
			if (this.flag == false) {
				this.detail.praise_num = parseInt(this.detail.praise_num) + 1;
				this.flag = true;
			} else {
				this.detail.praise_num = this.detail.praise_num - 1;
				this.flag = false;
			}
		},
		// 分享弹出层
		open: function() {
			this.$refs.sharepopup.open();
		},
		async getVideoDetail() {
			const res = await myRequestGet('/api/v1/fatiao/index/detail?id=	' + this.id);
			this.detail = res;
		},
		async getVideos1() {
			let result = await myRequestGet('/api/v1/fatiao/index/more-detail', {
				channel_id: 28,
				articleLimit: 8,
				videoLimit: 1,
				clearcache: 'redis',
				limit: 1
			});
			// console.log(result);
			this.video1 = result.list;
		},
		async getArticle1() {
			let result = await myRequestGet('/api/v1/fatiao/article/more-article', {
				channel_id: 28,
				articleLimit: 8,
				videoLimit: 1,
				clearcache: 'redis',
				limit: 8
			});
			// console.log(result);
			this.article1 = result.list;
		},
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
		}
	}
};
</script>

<style lang="scss" scoped>
page {
	background-color: #ecf0f1;
	.Box {
		width: 100%;
		// height: auto;
		margin: 0;
		padding: 0;
		border-top: 2rpx solid #ecf0f1;
		background-color: #fff;
		.video {
			width: 100%;
			height: auto;
			.play {
				width: 100%;
			}
		}
		.article {
			margin-left: 25rpx;
			margin-right: 25rpx;
			margin-top: 30rpx;
			width: auto;

			.title {
				font-size: 40rpx;
				font-weight: 750;
				color: #3d3d3d;
			}
			.channel {
				height: 40rpx;
				margin-top: 24rpx;
				position: relative;
				.channel_img {
					display: inline-block;
					width: 40rpx;
					height: 40rpx;
					border-radius: 50%;
				}
				.text {
					display: inline-block;
					position: absolute;
					top: -5rpx;
					.channel_name {
						display: inline-block;
						font-size: 22rpx;
						margin-left: 20rpx;
					}
					.data {
						font-size: 22rpx;
						margin-left: 20rpx;
						color: #b2bec3;
					}
				}
			}
			.content {
				color: #636e72;
				margin-top: 25rpx;
				line-height: 1.8em;
				text-indent: 2em;
			}
			.bottom {
				margin-top: 35rpx;
				border-top: 1px solid #ecf0f1;
				padding-top: 22rpx;
				padding-bottom: 22rpx;
				.interact {
					.zan {
						display: inline-block;
						color: #a4b0be;
						font-size: 26rpx;
						.num1 {
							margin-left: 10rpx;
							margin-right: 15rpx;
							font-weight: 400;
						}
						.num2 {
							margin-left: 12rpx;
							margin-right: 12rpx;
						}
					}
					.share {
						float: right;
						margin-left: 10rpx;
						font-size: 28rpx;
						font-weight: bold;
						color: #747d8c;
					}
				}
			}
		}
		.gray {
			height: 12rpx;
			width: 100%;
			background-color: #dfe6e9;
		}
		.Box2 {
			margin-left: 25rpx;
			margin-right: 25rpx;
			width: auto;
			.banner {
				padding-top: 18rpx;
				padding-bottom: 18rpx;
				font-weight: 600;
				font-size: 24rpx;
				border-bottom: 2rpx solid #ecf0f1;
			}
			.box {
				width: auto;
				margin-top: 20rpx;
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
				.box2_item {
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
	}
}
</style>
