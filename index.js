let hmScore = document.getElementById("home-sc")
let awScore = document.getElementById("away-sc")
let countHm = 0
let countAw = 0
function hmIncOne() {
    countHm += 1
    hmScore.textContent = countHm
}
function hmIncTwo() {
    countHm += 2
    hmScore.textContent = countHm
}
function hmIncThree() { 
    countHm += 3
    hmScore.textContent = countHm
}
function awIncOne() {
    countAw += 1
    awScore.textContent = countAw
}
function awIncTwo() {
    countAw += 2
    awScore.textContent = countAw
}
function awIncThree() { 
    countAw += 3
    awScore.textContent = countAw
}
function reset(){
    countHm = 0
    countAw = 0
    hmScore.textContent = 0
    awScore.textContent = 0
}
