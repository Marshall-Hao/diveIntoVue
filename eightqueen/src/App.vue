<template>
	<!-- <eight-queen /> -->
	<!-- <s-directive-page></s-directive-page> -->
	<!-- <s-text></s-text> -->
	<!-- <s-radio /> -->
	<!-- <s-custom></s-custom> -->
	<!-- <s-lay></s-lay> -->
	<!-- <s-custom-wrap-input v-model:value="value"></s-custom-wrap-input
	>{{ "----" + value }} -->
	<!-- <s-body></s-body> -->
	<!-- <button @click="addCount(2)">addCount</button>
	<button @click="asyncAddCount">asyncAddCount</button>
	{{ count1 }}
	{{ count2 }}
	{{ doubleCount }} -->
	<router-link to="/foo">Foo</router-link>
	<router-link to="/bar">Bar</router-link>
	<router-view></router-view>
</template>

<script>
	import EightQueen from "./components/EightQueen.vue";
	import SDirectivePage from "./components/SDirectivePage.vue";
	import SText from "./components/SText.vue";
	import SRadio from "./components/SRadio.vue";
	import SCustom from "./components/SCustom.vue";
	import SLay from "./components/Slay.vue";
	import SCustomWrapInput from "./components/SCustomWrapInput.vue";
	import SBody from "./components/SBody.vue";
	import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
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
			SBody,
		},
		computed: {
			...mapState({
				count1: (state) => state.count1,
				count2: (state) => state.count2,
			}),
			...mapGetters(["doubleCount"]),
		},
		data() {
			return {
				value: "333",
			};
		},
		methods: {
			...mapMutations(["addCount"]),
			...mapActions(["asyncAddCount"]),
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
