<template>
	<h3>Radio & CheckBox</h3>
	<!-- need memorization -->
	<p>Which one u prefer?</p>
	<!-- Radio input -->
	<label v-for="i in list" :key="i.value">
		<input type="radio" :value="i.value" v-model="selected" />
		{{ i.name }}
	</label>
	{{ selected }}
	<p>Which one u prefer?</p>
	<!-- checkbox input -->
	<label v-for="i in list" :key="i.value">
		<input type="checkbox" :value="i.value" v-model="checked" />
		{{ i.name }}
	</label>
	{{ checked.join(",") }}

	<!-- Selection -->
	<p>which for selected</p>
	<select v-model="selected">
		<option v-for="{ name, value } in list" :value="value" :key="value">
			{{ name }}
		</option>
	</select>
	<!-- multiple selection -->
	<p>which for selected</p>
	<select v-model="multipleSelected" multiple>
		<option v-for="{ name, value } in list" :value="value" :key="value">
			{{ name }}
		</option>
	</select>
	{{ multipleSelected.join(",") }}
</template>

<script>
	export default {
		data() {
			return {
				selected: "A",
				checked: [],
				multipleSelected: [],
				list: [
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
				],
			};
		},
	};
</script>