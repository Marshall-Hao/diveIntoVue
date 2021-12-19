import { createReactive } from "./script.js";

export class Store {
  constructor(options = {}) {
    let { state, mutations, plugins } = options;
    this._vm = createReactive(state);
    this._mutations = mutations;

    this._subscribe = [];
    plugins.forEach((plugin) => {
      return plugin(this);
    });
  }

  get state() {
    return this._vm;
  }

  commit(type, payload) {
    const entry = this._mutations[type];
    if (!entry) {
      return;
    }
    entry(this.state, payload);
    this._subscribe.forEach((sub) => sub({ type, payload }, this.state));
  }

  subscribe(fn) {
    if (!this._subscribe.includes(fn)) {
      this._subscribe.push(fn);
    }
  }
}
