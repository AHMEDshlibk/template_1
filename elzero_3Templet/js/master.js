////////////////////////////////////////////////////////////////////////
// get megaMenu 
let otherLink = document.getElementById("otherLink");
let megaMenu = document.getElementById("megaMenu");
// hover megaMenu 
otherLink.onmouseenter = function () {
    megaMenu.classList.add("active");
};
// un hover megaMenu 
otherLink.onmouseleave = function () {
    megaMenu.classList.remove("active");
};


////////////////////////////////////////////////////////////////////////
// get scrool to top
let scroolToTop = document.querySelector(".up");
// show scrool to top 
window.onscroll = function () {
    // console.log(this.scrollY)
    // if (this.scrollY >= 652.6666870117188) {
    //     scroolToTop.classList.add("show");
    // } else {
    //     scroolToTop.classList.remove("show");
    // }
};
// scrool to top 
scroolToTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};



////////////////////////////////////////////////////////////////////////
// get container and skills
let sectionSkills = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");
////////////////////////////////////////////////////////////////////////
// get container and counter 
let sectionStats = document.querySelector(".stats");
let nums = document.querySelectorAll(".box .number");
let started = false;  // function not started

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 1500 / goal);
};



////////////////////////////////////////////////////////////////////////
// the end of the year date to coundown 
let countDownData = new Date("Dec 31, 2022 23:59:59").getTime();

let counterDate = setInterval(() => {

    // get date now 
    let dateNow = new Date().getTime();

    // find date difference between now and count down date 
    let datediff = countDownData - dateNow;

    // get time unite 
    let days = Math.floor(datediff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(datediff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minuts = Math.floor(datediff % (1000 * 60 * 60) / (1000 * 60));
    let seconds = Math.floor(datediff % (1000 * 60) / (1000));

    // time unite inside element 
    if (days > 100) {
        document.querySelector(".days").innerHTML = days;
    };
    if (days < 100) {
        document.querySelector(".days").innerHTML = `0${days}`;
    };
    if (days < 10) {
        document.querySelector(".days").innerHTML = `00${days}`;
    };
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minuts").innerHTML = minuts < 10 ? `0${minuts}` : minuts;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // stop count down date 
    if (datediff < 0) {
        clearInterval(counterDate);
    };
}, 1000);



////////////////////////////////////////////////////////////////////////
// window on scroll 
window.onscroll = function () {
    // scrool to top 
    this.scrollY >= 652.6666870117188 ? scroolToTop.classList.add("show") : scroolToTop.classList.remove("show");
    // move skills 
    if (window.scrollY >= sectionSkills.offsetTop - 350) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
    // counter ++
    if (window.scrollY >= sectionStats.offsetTop - 550) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    };
};