function a() {
  console.log(this);
}
a();

let obj = {
  fn: function () {
    console.log(this);
  },
  fn2: () => {
    console.log(this);
  },
};
obj.fn();
obj.fn2();