<template>
	<!-- <eight-queen /> -->
	<s-directive-page></s-directive-page>
</template>

<script>
	import EightQueen from "./components/EightQueen.vue";
	import SDirectivePage from "./components/SDirectivePage.vue";
	export default {
		name: "App",
		components: {
			EightQueen,
			SDirectivePage,
		},
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
