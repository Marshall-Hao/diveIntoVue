<template>
	<h3>Custom</h3>
	<s-custom-select v-model:selected="selected" :list="list"></s-custom-select>
	{{ selected }}
</template>

<script>
	let list = [
		{
			name: "f@ck",
			value: "A",
		},
		{
			name: "S@ck",
			value: "B",
		},
		{
			name: "An@l",
			value: "C",
		},
	];
	import SCustomSelect from "./SCustomSelect.vue";
	export default {
		components: {
			SCustomSelect,
		},
		data() {
			return {
				selected: list[0],
				list,
			};
		},
	};
</script>