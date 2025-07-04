const days=document.getElementById('days');
const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const countdown=document.getElementById('countdown');
const year=document.getElementById('year')
const loading=document.getElementById('loading')

const currentYear=new Date().getFullYear();
year.innerText=currentYear+1;


const newYearTime=new Date(`${currentYear+1}`)

//Update CountDown Time

function updateCountDown(){

const currentTime=new Date();
const diff=newYearTime-currentTime;

const d=Math.floor((diff/1000)/86400);
const h=Math.floor((diff/1000)/3600)%24;
const m=Math.floor((diff/1000)/60)%60;
const s=Math.floor((diff/1000))%60;
days.innerText=d;
hours.innerText=h
minutes.innerText=m
seconds.innerText=s






}

//Show spinner before countdown

setTimeout(()=>{

loading.remove();
countdown.style.display='flex';

},1000)

//Run Every Second
setInterval(updateCountDown,1000);

