'use strict'
{
  console.clear();
const o = {}

console.log("prop" in o === o.hasOwnProperty("prop"))
console.log("toString" in o === o.hasOwnProperty("toString"))
}