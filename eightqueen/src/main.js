import { Vue, createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";

// console.log(Vue);
// const app = Vue.createApp({});

// app.directive("resize", {
//   mounted(el, binding) {
//     const callBack = binding.value;
//     window.addEventListener("resize", callBack(window.innerWidth));
//     el._onResize = callBack;
//   },
//   unbindunmounted(el) {
//     if (!el._onResize) return;
//     window.removeEventListener("resize", el._onResize);

//     delete el._onResize;
//   },
// });

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");
