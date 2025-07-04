const container=document.getElementById('container');
const text=document.getElementById('text');

const totalTime=7500;
const breatheTime=(totalTime/5)*2;
const holdTime=(totalTime/5);

function breatheAnimation(){
text.innerHTML='Breathe in!'
container.classList.add('grow')

    setTimeout(()=>{
        text.innerHTML='Hold!'
        setTimeout(()=>{
            text.innerHTML='Breathe Out';
            container.classList.add('shrink')

            
        },holdTime);

    },breatheTime)
}
setInterval(breatheAnimation,7500);


