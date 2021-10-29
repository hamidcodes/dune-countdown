const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds =document.getElementById("seconds");


const duneparttwo = new Date('October 20 2023 12:00:00');



function updateCd(){
    const currentTime = new Date();
    const difference = duneparttwo - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24
     const d = Math.floor(difference / day);
     const h = Math.floor((difference % day) / hour) ;
     const m = Math.floor((difference % hour) / minute) ;
     const s = Math.floor((difference  % minute) / second);

     days.innerHTML = d;
     hours.innerHTML = h < 10 ? '0' + h : h;
     minutes.innerHTML = m < 10 ? '0' + m : m;
     seconds.innerHTML = s < 10 ? '0' + s : s;
}



setInterval(updateCd, 1000);
