/*
 Discuss the difference between default and named exports in JavaScript modules.
*/
import Multiply from "./multiply.js";
let result = new Multiply(4, 5);
result.multiply();
import { utilOne, utilTwo } from "./utils.js";
utilOne();
utilTwo();
