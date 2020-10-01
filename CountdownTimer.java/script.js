

console.log('Welcome to CountDownTimer');

function countdown() {
    const now = new Date();
    const newyear = new Date('2021-01-01');
    
    const diff = newyear - now;

    const netsecs = (diff / 1000);
    const days = Math.floor(netsecs/3600/24) ;
    const netminutes = Math.floor(netsecs/60)%60 ; 
    const nethours = Math.floor(netsecs/3600)%24;
    const secs = Math.floor(netsecs)%60 ; 


    const countSecs = document.getElementById('secs') ; 
    const countminutes = document.getElementById('mins') ;  
    const counthours = document.getElementById('hours') ;  
    const countdays = document.getElementById('days') ;  

    countSecs.innerHTML = secs;
    countminutes.innerHTML = netminutes;
    counthours.innerHTML = nethours;
    countdays.innerHTML = days;
}
// countdown()  ;
setInterval(countdown, 1000)


