<!--
 * @Author: your name
 * @Date: 2020-04-30 11:36:22
 * @LastEditTime: 2021-12-28 03:21:11
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/module/topic/components/UItem.vue
-->
<template>
	<a class="item" :href="node.originalUrl">
		<div class="title">{{ node.item_info.article_info.title }}</div>
		<div class="tags" v-if="hasTag">
			#
			<span class="tag" v-for="tag in node.tags" :key="tag.id">{{
				tag.title
			}}</span>
		</div>
	</a>
</template>

<script>
	export default {
		props: {
			node: {
				required: true,
			},
		},
		computed: {
			hasTag() {
				return this.node.tags && this.node.tags.length > 0;
			},
		},
	};
</script>

<style scoped>
	.item {
		display: block;
		background: #fff;
		color: #333;
		padding: 20px 0px 20px;
		border-bottom: 1px solid #eee;
		position: relative;
	}
	.title {
		font-size: 16px;
		margin-bottom: 5px;
	}
	.tags {
		font-size: 12px;
		color: #999;
	}
	.tag {
		margin-right: 3px;
	}
</style>