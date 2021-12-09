
<template>
	<h3>Custom Selected</h3>
	<div @click="showBottom = !showBottom" class="top">
		{{ selected.name }}
		<div v-if="showBottom" class="bottom">
			<div v-for="i in list" :key="i.value" @click.stop="select(i)">
				{{ i.name }}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["list", "selected"],
		emits: ["update:selected"], // * Vue3.0 v-model double binding
		data() {
			return {
				showBottom: false,
			};
		},
		methods: {
			select(i) {
				this.$emit("update:selected", i);
				this.showBottom = false;
			},
		},
	};
</script>

<style scoped>
	.top {
		border: 1px solid #000000;
		padding: 10px;
	}
	.bottom {
		border: 1px solid #000000;
		position: relative;
		top: -1px;
	}
</style>