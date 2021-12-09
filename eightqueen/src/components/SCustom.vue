<template>
	<h3>Custom</h3>
	<s-custom-select v-model:selected="selected" :list="list"></s-custom-select>
	{{ selected }}
</template>

<script>
	import SCustomSelect from "./SCustomSelect.vue";
	export default {
		components: {
			SCustomSelect,
		},
		data() {
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
			return {
				selected: list[0],
				list,
			};
		},
	};
</script>