import { Store } from "./vuex.js";

let active;

let effect = (fn, options = {}) => {
  let effect = (...args) => {
    // ! 为了避免对 调用函数fn的属性污染, 所以在用effect进行了一次封装,小tips
    try {
      active = effect;
      return fn(...args);
    } finally {
      active = null;
    }
  };

  effect.options = options;
  effect.deps = [];
  return effect;
};

let cleanUpEffect = (effect) => {
  const { deps } = effect;

  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect);
    }
  }
};

let watchEffect = function (cb) {
  let runner = effect(cb);
  runner();

  return () => cleanUpEffect(runner);
};

let queue = [];
let nextTick = (cb) => Promise.resolve().then(cb);
let queueJob = (job) => {
  if (!queue.includes(job)) {
    queue.push(job);
    nextTick(flushJobs);
  }
};

let flushJobs = () => {
  let job;
  while ((job = queue.shift()) !== undefined) {
    job();
  }
};

class Dep {
  deps = new Set(); // ! treat as a constructor, simple way
  depend() {
    if (active) {
      this.deps.add(active);
      active.deps.push(this.deps);
    }
  }
  notify() {
    this.deps.forEach((dep) => queueJob(dep));
    this.deps.forEach((dep) => {
      dep.options && dep.options.schedule && dep.options.schedule();
    });
  }
}

// let push = Array.prototype.push;
// let arrayMethods = Object.create(Array.prototype);

// arrayMethods.push = function (...args) {
//   push.apply(this, [...args]);
//   this._dep.notify();
// };

export let createReactive = (target, prop, value) => {
  let dep = new Dep();

  // ! 1st way by Proxy, can also work for array
  return new Proxy(target, {
    get(target, prop) {
      dep.depend();
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      dep.notify();
      return Reflect.set(target, prop, value);
    },
  });
  // * 2nd way by object defineproperty
  //   return Object.defineProperty(target, prop , {
  //     get() {
  //       dep.depend();
  //       return value;
  //     },
  //     set(newValue) {
  //       value = newValue;
  //       dep.notify();
  //     },
  //   });
};

let ref = (initValue) => {
  //   let value = initValue;
  createReactive({}, "value", initValue);
};

const set = (target, prop, initValue) => {
  return createReactive(target, prop, initValue);
};

let computed = (fn) => {
  let value;
  let dirty = true;

  let runner = effect(fn, {
    schedule: () => {
      if (!dirty) {
        dirty = true;
      }
    },
  });
  return {
    get value() {
      if (dirty) {
        value = runner();
        dirty = false;
      }
      return value;
    },
  };
};

let watch = (source, cb, options = {}) => {
  const { immediate } = options;
  let getter = () => {
    return source();
  };
  let oldValue;
  const applyCb = () => {
    let newValue = runner();
    if (newValue !== oldValue) {
      cb(newValue, oldValue);
      oldValue = newValue;
    }
  };
  const runner = effect(getter, {
    schedule: applyCb,
  });

  if (immediate) {
    applyCb();
  } else {
    oldValue = runner();
  }
};

// let count = ref(0);
let count = set([], 1, 0);
console.log(count);
let computedValue = computed(() => count.value + 3);
let value = 0;

const store = new Store({
  state: {
    count: 0,
  },
  mutations: {
    addCount(state, payload = 1) {
      state.count += payload;
    },
  },

  plugins: [
    function (store) {
      store.subscribe((mutations, state) => {
        console.log(mutations);
        console.log(state);
      });
    },
  ],
});

document.getElementById("add").addEventListener("click", function () {
  // value++;
  // count.push(value);
  store.commit("addCount", 2);
});
let str;
let stop = watchEffect(() => {
  // str = `hello ${count.join(",")}`;
  //   str = `hello ${count.value} ${computedValue.value}`;
  str = `hello ${store.state.count}`;
  document.getElementById("app").innerText = str;
});

// setTimeout(() => {
//   stop();
// }, 3000);
watch(
  () => count.value,
  (newValue, preValue) => {
    console.log(newValue, preValue);
  },
  { immediate: true }
);
