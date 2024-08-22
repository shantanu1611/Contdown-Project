
// const endDate="01 January 2025 00:00";

const endDate = new Date("January 01, 2025 00:00:00");

$('.end-date').text(endDate.getFullYear());


const days=$('.days');
const hours=$('.hours');
const minutes=$('.minutes');
const seconds=$('.seconds');

function clock(){
    const end= new Date(endDate);
    const now= new Date();

    const diff=(end-now)/1000;

    if(diff<0) return;

    days.text(Math.floor(diff/3600/24)+" d");

    hours.text((Math.floor(diff/3600)%24)+" h");

    minutes.text((Math.floor(diff/60)%60)+" m");

    seconds.text((Math.floor(diff%60))+" s");
}

setInterval(() => {
    clock();
}, 1000);