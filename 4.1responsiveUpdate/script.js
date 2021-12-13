let x;
let y;
let z;
let active;
// let f = (n) => n * 100 + 100;
let watch = function (fn) {
  active = fn;
  active();
  active = null;
};

let queue = [];
let nextTick = (cb) =>
  Promise.resolve()
    .then(cb)
    .then(() => {
      console.log("then then then");
    });
let queueJob = (job) => {
  if (!queue.includes(job)) {
    queue.push(job);
    nextTick(flushJobs);
    nextTick(flushJobs);
  }
};

let flushJobs = () => {
  let job;
  while ((job = queue.shift()) !== undefined) {
    console.log(job);
    job();
  }
};

// let onYChange = function (fn) {
//   active = fn;
//   active();
//   active = null;
// };

class Dep {
  // ! only static function can be read from the whole class
  //   static deps = new Set();
  //   static depend() {
  //     console.log(this.deps);
  //     if (active) {
  //       this.deps.add(active);
  //     }
  //   }
  constructor() {
    this.deps = new Set();
  }
  //   deps = new Set(); // ! treat as a constructor, simple way
  test = "test";
  depend() {
    if (active) {
      this.deps.add(active);
      console.log(this.deps);
      console.log(this.test);
    }
  }
  notify() {
    this.deps.forEach((dep) => queueJob(dep));
    console.log(this.deps);
  }
}

let ref = (initValue) => {
  let value = initValue;
  let dep = new Dep();
  console.log(dep);
  return Object.defineProperty({}, "value", {
    // ! if use getter and setter then dont need actual value, and writeable
    // value: initValue,
    // writable: true,
    get() {
      dep.depend();
      return value;
    },
    set(newValue) {
      value = newValue;
      dep.notify();
      console.log(dep);
    },
  });
};

x = ref(1);
y = ref(5);
z = ref(6);
watch(() => {
  const ele = document.createElement("span");
  ele.innerText = `hello ${x.value} ${y.value} ${z.value}`;
  ele.style.color = "red";
  document.body.append(ele);
});

x.value = 2;
y.value = 6;
z.value = 7;
// onYChange(() => {
//   const ele = document.createElement("span");
//   ele.innerText = `hello!  ${x.value} ${y.value}`;
//   document.body.append(ele);
// });

// x.value = 2;
// x.value = 3;
// x.value = 4;
// y.value = 6;
// x.value = 7;
// function Animal() {
//   this.name = "marshall";
// }

// Animal.prototype.speak = function () {
//   return this;
// };

// Animal.eat = function () {
//   return this;
// };

// let obj = new Animal();
// console.log(obj);
// let speak = obj.speak;
// console.log(speak());
// console.log(obj.speak()); // global object

// let eat = Animal.eat;
// console.log(eat()); // global object
// console.log(Animal.eat());

// let a = function () {
//   return 1;
// };
// b = [1, 2, 3];
// let mySet = new Set();
// mySet.add(a);
// mySet.add(b);
// a = function () {
//   return 2;
// };
// let c = b;
// let d = a;
// console.log(c);
// mySet.add(a);
// console.log(mySet);
// mySet.add(c);
// mySet.add(d);
// console.log(mySet);
