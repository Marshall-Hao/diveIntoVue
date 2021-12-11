<template>
	<slot :validate="validate"></slot>
	{{ errMsg }}
</template>

<script>
	export default {
		props: ["value", "rules"],
		data() {
			return {
				errMsg: "",
			};
		},
		methods: {
			validate() {
				let validate = this.rules.reduce((pre, cur) => {
					let check = cur && cur.test && cur.test(this.value);
					this.errMsg = check ? "" : cur.message;
					return pre && check;
				}, true);
				return validate;
			},
		},
	};
</script>