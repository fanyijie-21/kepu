<template>
	<view class="Box">
		<view class="top">
			<view class="nav">
				<view class="nav-item "><view class="item" :class="{ active: isActive == 1 }" @click="chenked(1)">家居</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 2 }" @click="chenked(2)">科技</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 3 }" @click="chenked(3)">美妆</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 4 }" @click="chenked(4)">萌宠</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 5 }" @click="chenked(5)">游戏</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 6 }" @click="chenked(6)">生活</view></view>
				<view class="nav-item "><view class="item" :class="{ active: isActive == 7 }" @click="chenked(7)">兴趣</view></view>
			</view>
		</view>
		<!-- nav-item -->
		<view class="nav_item" v-if="isActive == 1"><FamilyLife></FamilyLife></view>
		<view class="nav_item" v-if="isActive == 2"><Technology></Technology></view>
		<view class="nav_item" v-if="isActive == 3"><Beauty></Beauty></view>
		<view class="nav_item" v-if="isActive == 4"><Animal></Animal></view>
		<view class="nav_item" v-if="isActive == 5"><Game></Game></view>
		<view class="nav_item" v-if="isActive == 6"><Life></Life></view>
		<view class="nav_item" v-if="isActive == 7"><Interset></Interset></view>
	</view>
</template>

<script>
import FamilyLife from '@/components/FamilyLife/FamilyLife.vue';
import Technology from '@/components/Technology/Technology.vue';
import Beauty from '@/components/Beauty/Beauty.vue';
import Animal from '@/components/Animal/Animal.vue';
import Game from '@/components/Game/Game.vue';
import Life from '@/components/Life/Life.vue';
import Interset from '@/components/Interset/Interset.vue';

export default {
	data() {
		return { isActive: 1 };
	},
	methods: {
		chenked(type) {
			this.isActive = type;
		}
	},
	components: {
		FamilyLife,
		Technology,
		Beauty,
		Animal,
		Game,
		Life,
		Interset
	}
};
</script>

<style lang="scss" scoped>
.Box {
	.top {
		.nav {
			background-color: #fff;
			display: flex;
			height: 44px;
			color: #353b48;
			font-size: 16px;
			overflow: scroll;
			.nav-item {
				// width: 80px;
				flex: 1;
				.item {
					width: 70px;
					text-align: center;
					line-height: 33px;
					height: 33px;
					margin-top: 10px;
				}
				.active {
					color: #2f3640;
					font-weight: 550;
					position: relative;
				}
				.active::after {
					content: '';
					position: absolute;
					top: 25px;
					width: 55rpx;
					height: 8rpx;
					background-color: #74b9ff;
					left: 0px;
					right: 0px;
					bottom: 0px;
					margin: auto;
				}
			}
		}
	}
}
</style>
