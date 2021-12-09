<template>
	<div v-if="loading">loading...</div>
	<slot v-else :data="data"></slot>
</template>

<script>
	export default {
		props: ["url"],
		data() {
			return {
				loading: true,
				data: {},
			};
		},
		created() {
			setTimeout(() => {
				this.loading = false;
				this.data = {
					name: "Marshall",
				};
			}, 1000);
		},
	};
</script>