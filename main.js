import doSomething from "./doSomething.js";
doSomething();

import  {halfOf, multiply}  from "./lib.js";

console.log(halfOf(84));
console.log(multiply(21, 2));

import { flag, touch } from "./validator.js";
console.log(flag);
touch();
console.log(flag);