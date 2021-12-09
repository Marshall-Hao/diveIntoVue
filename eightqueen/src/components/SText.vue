<template>
	<h1>{{ text }}</h1>
	<input type="text" v-model="text" />
	<!-- *双向绑定 -->
	<input type="text" v-model.lazy="text" />
	<!-- .lazy只在unfocus之后改变 -->
	<input type="text" :value="text" @input="text = $event.target.value" />

	<textarea v-model.trim="text"></textarea>
	<!-- .trim trim the extra space -->
	<input type="number" v-model.number="num" />
	{{ typeof num }}
</template>num

<script>
	export default {
		data() {
			return {
				text: "",
				num: 0,
			};
		},
	};
</script>