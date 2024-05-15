const hrs = document.getElementById("hrs");
const minuts = document.getElementById("minuts");
const sec = document.getElementById("sec");



setInterval(time,1000);

function time(){
    let date = new Date();
    hrs.innerHTML = (date.getHours() < 10 ? "0" : ' ') + date.getHours();
    minuts.innerHTML = (date.getMinutes() < 10 ? '0' : ' ') + date.getMinutes();
    sec.innerHTML = (date.getSeconds() < 10 ? '0' : ' ') + date.getSeconds();
};