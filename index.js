var btnsPlus = document.querySelectorAll(".btn-plus");
var btnsMinus = document.querySelectorAll(".btn-minus");
var counts = document.querySelectorAll(".count");

console.log(btnsPlus);
for (let i = 0; i <= btnsPlus.length - 1; i++) {
  btnsPlus[i].addEventListener("click", function () {
    //   count.innerText = Number(count.innerText) + 1;
    counts[i].innerText++;
  });

  btnsMinus[i].addEventListener("click", function () {
    if (counts[i].innerText > 0) {
      counts[i].innerText--;
    }
  });
}