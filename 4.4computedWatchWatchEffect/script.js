let active;

let effect = (fn, options = {}) => {
  let effect = (...args) => {
    try {
      active = effect;
      return fn(...args);
    } finally {
      active = null;
    }
  };

  effect.options = options;
  console.log(effect.options);
  return effect;
};
let watchEffect = function (cb) {
  let runner = effect(cb);
  runner();
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
    }
  }
  notify() {
    this.deps.forEach((dep) => queueJob(dep));
    this.deps.forEach((dep) => {
      dep.options && dep.options.schedule && dep.options.schedule();
    });
  }
}

let ref = (initValue) => {
  let value = initValue;
  let dep = new Dep();
  return Object.defineProperty({}, "value", {
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.notify();
    },
  });
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

let count = ref(0);
let computedValue = computed(() => count.value + 3);
document.getElementById("add").addEventListener("click", function () {
  count.value++;
  debugger;
});
let str;
watchEffect(() => {
  str = `hello ${count.value} ${computedValue.value}`;
  document.getElementById("app").innerText = str;
});
