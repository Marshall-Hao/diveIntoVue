<template>
	<s-load #default="{ data }">
		<div>Fucking yeah!{{ data.name }}</div>
	</s-load>
</template>

<script>
	import SLoad from "./SLoad.vue";
	export default {
		components: {
			SLoad,
		},
		data() {
			return {};
		},
	};
</script>