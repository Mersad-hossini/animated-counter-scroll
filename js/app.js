let benefitsSection = document.querySelector(".benefits")
let dataNumGoal = document.querySelectorAll(".num")
let startCount = false

const showNumber_benefits = () => {
    if(window.scrollY >= benefitsSection.offsetTop) {
        if(!startCount) {
            dataNumGoal.forEach(num => setCounter(num))
        }
        startCount = true
    }
}

const setCounter = (num) => {
    let elemCount = num.dataset.goal

    let counterInterval = setInterval(() => {

        if(num.textContent == elemCount) {
            clearInterval(counterInterval)
        }

        num.textContent++

    }, 5)
} 

window.addEventListener("scroll", showNumber_benefits)