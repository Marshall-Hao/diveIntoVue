<template>
	<!-- <eight-queen /> -->
	<!-- <s-directive-page></s-directive-page> -->
	<!-- <s-text></s-text> -->
	<!-- <s-radio /> -->
	<!-- <s-custom></s-custom> -->
	<!-- <s-lay></s-lay> -->
	<s-custom-wrap-input v-model:value="value"></s-custom-wrap-input
	>{{ "----" + value }}
</template>

<script>
	import EightQueen from "./components/EightQueen.vue";
	import SDirectivePage from "./components/SDirectivePage.vue";
	import SText from "./components/SText.vue";
	import SRadio from "./components/SRadio.vue";
	import SCustom from "./components/SCustom.vue";
	import SLay from "./components/Slay.vue";
	import SCustomWrapInput from "./components/SCustomWrapInput.vue";
	export default {
		name: "App",
		components: {
			EightQueen,
			SDirectivePage,
			SText,
			SRadio,
			SCustom,
			SLay,
			SCustomWrapInput,
		},
		data() {
			return {
				value: "333",
			};
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
		padding: 100px;
	}
</style>
