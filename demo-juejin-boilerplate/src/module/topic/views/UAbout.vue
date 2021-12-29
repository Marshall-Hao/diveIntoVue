<!--
 * @Author: your name
 * @Date: 2021-12-29 04:53:05
 * @LastEditTime: 2021-12-29 18:40:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/demo-juejin-boilerplate/src/module/topic/views/UAbout.vue
-->
<template>
	<div class="about">
		about me!
		<input type="text" v-model="x" />
	</div>
</template>


<script>
	export default {
		data() {
			return {
				x: "",
			};
		},
	};
</script>

<style scoped>
	.about {
		padding: 30px;
		text-align: center;
	}
</style>