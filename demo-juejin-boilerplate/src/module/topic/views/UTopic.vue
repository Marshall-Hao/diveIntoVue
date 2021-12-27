<!--
 * @Author: your name
 * @Date: 2020-04-30 15:52:31
 * @LastEditTime: 2021-12-28 04:03:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/module/topic/views/UTopic.vue
-->
<template>
	<div>
		<u-list :items="items"></u-list>
		<div class="x-bottom" v-intersect="{ handler: fetchNext }"></div>
	</div>
</template>

<script>
	import { createNamespacedHelpers } from "vuex";
	import UList from "../components/UList.vue";
	const { mapState, mapActions } = createNamespacedHelpers("topic");
	export default {
		name: "u-top",
		props: ["type"],
		components: {
			UList,
		},
		computed: {
			...mapState({
				items: (state) => state[state.activeType].items,
			}),
		},
		created() {
			const { type } = this;
			this.fetchData({ type });
		},
		watch: {
			type(type) {
				this.fetchData({ type });
			},
		},
		methods: {
			...mapActions({
				fetchData: "FETCH_LIST_DATA",
			}),
			fetchNext() {
				const { type } = this;
				this.fetchData({ type });
			},
		},
	};
</script>

<style scoped>
	.x-bottom {
		width: 100%;
		height: 40px;
		background: #333;
	}
</style>