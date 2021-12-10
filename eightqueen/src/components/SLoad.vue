<template>
	<div v-if="loading">loading...</div>
	<!-- * use slot to transfrom the data from childcomponent to parentcomponent -->
	<slot v-else :data="data"></slot>
</template>

<script>
	export default {
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