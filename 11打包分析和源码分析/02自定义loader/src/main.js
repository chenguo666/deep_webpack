import code from "./doc.md";
console.log("hello loader");
const foo = () => {
  console.log("foo");
};
foo();
document.body.innerHTML = code;
