<template>
	<div v-resize:[direction].quiet="onResize">Window width is: {{ length }}</div>
</template>

<script>
	export default {
		data() {
			return {
				direction: "vertical",
				length: 0,
			};
		},
		methods: {
			onResize(length) {
				console.log("resize");
				this.length = length;
			},
		},
		directives: {
			// * 自定义指令 用来 解耦 DOM 和 BOM
			resize: {
				mounted(el, binding) {
					const callBack = binding.value;
					const direction = binding.arg;
					const modifiers = binding.modifiers;

					const result = () => {
						return direction === "vertical"
							? window.innerHeight
							: window.innerWidth;
					};
					const onResize = () => {
						// * eventListner 跟 fn as callback
						callBack(result());
					};
					window.addEventListener("resize", onResize);
					if (!modifiers || !modifiers.quiet) {
						onResize();
					}
					el._onResize = onResize;
				},
				unmounted(el) {
					if (!el._onResize) return;
					window.removeEventListener("resize", el._onResize);
					delete el._onResize;
				},
			},
		},
	};
</script>

