"use strict";
const span1 = document.querySelector(".num1");
for (let i = 1; i <= 1000; i++) {
  span1.innerHTML += `${i}^2 = ${Math.pow(i, 2)}<br/>`;
}
