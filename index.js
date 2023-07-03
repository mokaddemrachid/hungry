
var btnsPlus = document.querySelectorAll(".btn-plus");
var btnsMinus = document.querySelectorAll(".btn-minus");
var counts = document.querySelectorAll(".count");
var stars = document.getElementsByClassName("bi-star");
var trash = document.getElementsByClassName("bi-trash-fill");
var prix = document.getElementsByClassName("price");
var total = document.querySelector(".total-price");


function total_price(){
    let sum = 0;
    for (let i=0; i<btnsPlus.length;i++){
        sum = sum + Number(prix[i].innerText) * Number(counts[i].innerText);
    }
    total.innerText = sum;
}


for (let i = 0; i <= btnsPlus.length - 1; i++) {
  btnsPlus[i].addEventListener("click", function () {
    //   count.innerText = Number(count.innerText) + 1;
    counts[i].innerText++;
    total_price();
  });

  btnsMinus[i].addEventListener("click", function () {
    if (counts[i].innerText > 0) {
      counts[i].innerText--;
    }
    if (total.innerText >0)
            total.innerText -= Number(prix[i].innerText);
            total_price();
  });
}
 
// stars
for (let i=0;i<stars.length; i++){
    stars[i].addEventListener("click",function() {
        if (stars[i].style.color !== "gold") stars[i].style.color="gold" ;
        else stars[i].style.color ="black";
    })
}
