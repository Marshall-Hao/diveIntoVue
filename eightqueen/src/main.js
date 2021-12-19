import { Vue, createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import store from './store'

const app = createApp(App).use(store);

app.use(ElementPlus); // * use plugings with app.use
app.mount("#app");
