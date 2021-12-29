<!--
 * @Author: your name
 * @Date: 2021-12-29 20:10:56
 * @LastEditTime: 2021-12-30 02:43:12
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/components/UInfiniteList.vue
-->
<template>
	<div :style="{ padding: padding }">
		<slot :sliceItems="sliceItems"></slot>
	</div>
</template>

<script>
	import { throttle } from "../util/throttle";
	export default {
		props: {
			items: {
				require: true,
			},
			itemHeight: {
				require: true,
			},
		},
		data() {
			return {
				buffer: 5,
				scrollTop: 0,
				viewportHeight: 0,
			};
		},
		computed: {
			over() {
				console.log(this.scrollTop);
				return Math.max(
					Math.floor(this.scrollTop / this.itemHeight) - this.buffer,
					0
				);
			},
			down() {
				const down = Math.min(
					Math.ceil(
						(this.scrollTop + this.viewportHeight) / this.itemHeight + this.buffer
					),
					this.items.length
				);
				console.log(down);
				return down;
			},
			sliceItems() {
				return this.items.slice(this.over, this.down);
			},
			padding() {
				console.log(
					`${this.over * this.itemHeight}px 0 ${Math.max(
						(this.items.length - this.down) * this.itemHeight,
						0
					)}px 0`
				);
				return `${this.over * this.itemHeight}px 0 ${Math.max(
					(this.items.length - this.down) * this.itemHeight,
					0
				)}px 0`;
			},
		},
		created() {
			document.addEventListener("scroll", this.onScroll, {
				passive: true,
			});

			this.scrollTop = Math.max(
				window.pageYOffset,
				document.documentElement.scrollTop,
				document.body.scrollTop
			);
			this.viewportHeight = window.innerHeight;
		},
		destroyed() {
			document.removeEventListener("scroll", this.onScroll);
		},
		methods: {
			onScroll: throttle(function () {
				// *https://stackoverflow.com/questions/19618545/body-scrolltop-vs-documentelement-scrolltop-vs-window-pageyoffset-vs-window-scro
				this.scrollTop = Math.max(
					window.pageYOffset,
					document.documentElement.scrollTop,
					document.body.scrollTop
				);
				this.viewportHeight = window.innerHeight;
			}),
		},
	};
</script>