<!--
 * @Author: your name
 * @Date: 2021-12-20 02:49:37
 * @LastEditTime: 2021-12-21 00:52:42
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /diveIntoVue/eightqueen/src/pages/Foo.vue
-->
<template>
	<div>Foo</div>
</template>

<script>
	export default {
		beforeRouteEnter(to, from, next) {
			console.log("Foo::beforeRouteEnter", to, from);
			next();
		},
		beforeRouteUpdate(to, from, next) {
			console.log("Foo::beforeRouteUpdate", to, from);
			next();
		},
		beforeRouteLeave(to, from, next) {
			console.log("Foo::beforeRouteLeave", to, from);
			next();
		},
	};
</script>
