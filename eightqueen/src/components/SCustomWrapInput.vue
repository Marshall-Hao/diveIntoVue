<template>
	<el-input v-model="value" @input="onInput(value)"></el-input>
	{{ value }}
</template>

<script>
	export default {
		props: ["value"],
		emits: ["update:value"], // * double binding on Vue3.0
		methods: {
			onInput(value) {
				this.$emit("update:value", value);
			},
		},
		mounted() {
			console.log(this.$parent.value);
		},
	};
</script>

<style scoped>
	/* if you wanna customize some build-in component, use >>> for the nested class since the scooped it will generate special data-v */
	.el-input >>> .el-input__inner {
		border-top: none;
		border-left: none;
		border-right: none;
	}
</style>