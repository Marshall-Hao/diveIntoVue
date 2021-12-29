<!--
 * @Author: your name
 * @Date: 2020-04-30 15:52:38
 * @LastEditTime: 2021-12-30 03:21:24
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/App.vue
-->
<template>
	<div>
		<div class="m-top" :style="{ backgroundColor: theme.primary }">
			<router-link
				class="m-link"
				:style="{
					backgroundColor:
						$route.name === nav.path ? theme.highlight : theme.primary,
				}"
				v-for="nav in navs"
				:key="nav.path"
				:to="nav.path"
				>{{ nav.name }}</router-link
			>
		</div>
		<div class="m-content">
			<!-- <keep-alive max="2">
				<router-view></router-view>
			</keep-alive> -->
			<u-live max="2">
				<router-view></router-view>
			</u-live>
		</div>

		<div class="m-side">
			Theme Switch:
			<button @click="themeType = 'red'">Red</button>
			<button @click="themeType = 'blue'">Blue</button>
		</div>
	</div>
</template>

<script>
	import UTopic from "./module/topic/views/UTopic.vue";
	import { LIST_TYPE } from "./module/topic/store";
	import config from "./config/config";
	import ULive from "./components/ULive.vue";

	export default {
		components: {
			UTopic,
			ULive,
		},
		data() {
			return {
				themeType: "blue",
			};
		},
		provide() {
			return {
				theme: this.theme,
			};
		},
		computed: {
			theme() {
				return config.get("theme")[this.themeType];
			},
			navs() {
				return [
					{
						name: "热门",
						path: LIST_TYPE.TOP,
					},
					{
						name: "最新",
						path: LIST_TYPE.NEW,
					},
					{
						name: "热榜",
						path: LIST_TYPE.HOT,
					},
					{
						name: "关于我",
						path: "/about",
					},
					{
						name: "403",
						path: "/403",
					},
				];
			},
		},
	};
</script>

<style>
	body {
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
			Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
		margin: 0;
		overflow-y: scroll;
	}

	a {
		text-decoration: none;
		color: #007fff;
	}

	.m-top {
		height: 60px;
		width: 100%;
		background: #007fff;
	}

	.m-content {
		width: 960px;
		border: 1px solid #eee;
		background: #fff;
		margin: 20px auto;
		padding: 0 20px;
	}
	.m-link {
		display: inline-block;
		color: #fff;
		height: 60px;
		line-height: 60px;
		font-size: 19px;
		padding: 0 20px;
	}
	.router-link-active {
		background: #00a6ff;
	}
	.m-side {
		position: fixed;
		left: 50%;
		margin-left: 200px;
		top: 100px;
	}
</style>