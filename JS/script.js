// SPECIAL OFFER TIMER

let countDownDate = new Date("Dec 1, 2022 23:59:59").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days;
    document.getElementById("demo1").innerHTML = hours;
    document.getElementById("demo2").innerHTML = minutes;
    document.getElementById("demo3").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "0";
        document.getElementById("demo1").innerHTML = "0";
        document.getElementById("demo2").innerHTML = "0";
        document.getElementById("demo3").innerHTML = "0";
    }
}, 1000);


// QUESTION

const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const firstYes = document.querySelector(".first-yes");
const firstNo = document.querySelector(".first-no");

yesBtn.addEventListener("click", function () {
    firstYes.classList.remove("d-none");
    firstNo.classList.add("d-none");
})

noBtn.addEventListener("click", function () {
    firstNo.classList.remove("d-none");
    firstYes.classList.add("d-none");
})

const btns = document.querySelectorAll(".question-btn");
btns.forEach((element) => {
    element.addEventListener("mouseout", ()=> {
        firstNo.classList.add("d-none");
        firstYes.classList.add("d-none");
    })
})
