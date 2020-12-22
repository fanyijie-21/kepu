<template>
	<view>
		<view class="v1">
			<text>请填写用户名：</text><input type="text" />
			<text>请填写密码：</text><input password="Boolean"  maxlength="8"/>
		</view>
		<view class="v2">
			<button @click="account_loginFc()">注册</button>
			<button @click="goDetail()" class="b1">去登陆</button>
		</view>
		<!-- <view class="flex_row_c_c fontColorADADAD width100 box-sizing-border-box"
		:style="{'margin-top':windowHeight*.02+'px', 'font-size': windowHeight*.021+'px', 'padding': windowHeight*.01+'px ' + windowWidth*.1+'px'}">
			<view class="flex_row_e_c FlexPoint5">
				手机号:
			</view>
			<view class="flex_row_none_c Flex1Point5 width100"
			:style="{'margin-left': windowWidth*.03+'px'}">
				<view class="flex_row_none_c width100" :class="account_accountNum_focus?'input_view_item_active':'input_view_item'">
					<input type="text" value="" v-model="account_accountNum" @focus="account_accountNum_focus_changeFc" @blur="account_accountNum_blur_changeFc"
					  :style="{'margin-left':windowWidth*.03+'px', 'height':windowHeight*.05+'px', 'font-size':windowHeight*.026+'px'}" />
					<view v-if="account_accountNum" class="Flex1" @tap="clear_account_accountNum" :style="{'padding':windowHeight*.01+'px'}">
						<uni-icon type="clear" color="#adadad" :pxSize="windowHeight*.026" />
					</view>
				</view>
			</view>
		</view>
		<view class="flex_row_c_c fontColorADADAD width100 box-sizing-border-box"
		:style="{'margin-top':windowHeight*.03+'px', 'font-size':windowHeight*.021+'px', 'padding':windowHeight*.01+'px ' + windowWidth*.1+'px'}">
			<view class="flex_row_e_c FlexPoint5">
				密码:
			</view>
			<view class="flex_row_none_c Flex1Point5 width100" :style="{'margin-left':windowWidth*.03+'px'}">
				<view class="flex_row_none_c width100" :class="account_password_focus?'input_view_item_active':'input_view_item'">
					<input type="text" value="" :password="passwordShow" v-model="account_password" @focus="account_password_focus_changeFc"
					 @blur="account_password_blur_changeFc" :style="{'margin-left':windowWidth*.03+'px', 'height':windowHeight*.05+'px', 'font-size':windowHeight*.026+'px'}"/>
					<view v-if="account_password" class="Flex1" :style="{'padding':windowHeight*.01+'px'}" @tap="show_password">
						<uni-icon type="eye" :color="passwordShow?'#adadad':'#33CC33'" :pxSize="windowHeight*.026" />
					</view>
					<view v-if="account_password" class="Flex1" :style="{'padding':windowHeight*.01+'px'}" @tap="clear_account_password">
						<uni-icon type="clear" color="#adadad" :pxSize="windowHeight*.026" />
					</view>
				</view>
			</view>
		</view>
	</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goDetail() {
				uni.navigateTo({
					url: '/pages/QuShe-login/QuShe-login'
				})
			},
			account_loginFc() {
				//账号密码登录方法
				if(!this.account_accountNum || !this.account_password) {
					uni.showToast({
						title:'注册成功'
					})
					return;
				}
			},
		}
	}
</script>

<style>
	input{
		border: 1px solid #000000;
		width: 90%;
		margin: 50rpx auto;
		height: 50rpx;
	}
	button{
		margin-top: 100rpx;
		width: 80%;
	}
	text{
		margin-left: 50rpx;
	}
	.b1{
		background-color: rgb(51,204,51);
	}
</style>
