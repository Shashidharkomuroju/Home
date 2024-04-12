function calculate() {
  let Biryani = document.getElementById("biryani").value;

  let Chicken = document.getElementById("chicken").value;

  let Desserts = document.getElementById("desserts").value;

  let GST = document.getElementById("gst").value;

  let payment = document.getElementById("payment").value;

  let total = [parseInt(Biryani), parseInt(Chicken), parseInt(Desserts)];

  amount = 0;

  for (let i = 0; i < total.length; i++) {
    amount += total[i];
  }

  let bill = amount * (GST / 100);

  if (!isNaN(amount)) {
    document.getElementById("paymentdetails").innerHTML =
      "please enter the amount";

    if (amount > 1500) {
      document.getElementById(
        "paymentdetails"
      ).innerHTML = `With Discount of 100 rupees Total Amount : ${
        bill + amount - 100
      }/-`;
    } else {
      document.getElementById(
        "paymentdetails"
      ).innerHTML = `Total Amount : ${amount}/-, <br> Total bill payment with ${GST}% GST is : ${
        bill + amount
      }/-`;
    }
  }

  document.getElementById("payment").onmouseover = function () {
    this.style.backgroundColor = "royalblue";
    this.style.color = "cadetblue";
  };

  document.getElementById("payment").onmouseout = function () {
    this.style.backgroundColor = "teal";
    this.style.color = "mediumpurple";
  };
}
calculate();

// HAMBURGER

function navSlide() {
  let nav = document.querySelector(".navbar");
  let menu = document.querySelector(".nav-links");
  let burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    menu.classList.toggle("nav-active");

    burger.classList.toggle("toggle");
  });
}

navSlide();

// ON CLICK TEXT

let pop = document.querySelector(".pop");
let popButton = document.querySelector("#popButton");
popButton.addEventListener("click", () => {
  // console.log("hi")
  pop.classList.toggle("active");
});
// console.log(pop)

let pop1 = document.querySelector(".pop1");
let popButton1 = document.querySelector("#popButton1");
popButton1.addEventListener("click", () => {
  pop1.classList.toggle("active");
});
// console.log(pop1)

let pop2 = document.querySelector(".pop2");
let popButton2 = document.querySelector("#popButton2");
popButton2.addEventListener("click", () => {
  pop2.classList.toggle("active");
});
// console.log(pop2)

let pop3 = document.querySelector(".pop3");
let popButton3 = document.querySelector("#popButton3");
popButton3.addEventListener("click", () => {
  pop3.classList.toggle("active");
});
// console.log(pop3)

let pop4 = document.querySelector(".pop4");
let popButton4 = document.querySelector("#popButton4");
popButton4.addEventListener("click", () => {
  pop4.classList.toggle("active");
});
// console.log(pop4)

let pop5 = document.querySelector(".pop5");
let popButton5 = document.querySelector("#popButton5");
popButton5.addEventListener("click", () => {
  pop5.classList.toggle("active");
});
// console.log(pop5)
