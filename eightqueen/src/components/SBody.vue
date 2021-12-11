<template>
	<s-validate #default="validateSlot" :value="value" :rules="rules">
		<input type="text" @blur="validateSlot.validate" v-model="value" />
	</s-validate>

	<s-validate #default="validateSlot" :value="text" :rules="textRules">
		<textarea type="text" @blur="validateSlot.validate" v-model="text" />
	</s-validate>
</template>

<script>
	import SValidate from "./SValidate.vue";
	export default {
		data() {
			return {
				value: "hi",
				text: "hi",
				rules: [
					{
						test: function (value) {
							return /^[0-9]*$/.test(value);
						},
						message: "please enter a number",
					},
				],
				textRules: [
					{
						test: function (value) {
							return value;
						},
						message: "please enter a non-empty value",
					},
				],
			};
		},
		components: {
			SValidate,
		},
	};
</script>