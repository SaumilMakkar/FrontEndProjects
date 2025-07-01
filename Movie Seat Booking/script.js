//grab all the elements from the DOM

const container=document.querySelector('.container');
console.log(container)
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie')

let ticketPrice= +movieSelect.value;
//Save selected movie index and price
function setMovieData(movieIndex,moviePrice){
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice)
}

//update the count and total

function update(){
    const selectedSeats=document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount=selectedSeats.length
    count.innerText=selectedSeatsCount
    total.innerText=selectedSeatsCount*ticketPrice;
    //local storage
//copy the selected seats into arr
//map through the arr
//return a new array indexes.


const seatsIndex=[...selectedSeats].map(function(seat){
    return  [...seats].indexOf(seat)
})

localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));



    

    
}
//get data from local storage and populate ui
function populateUI(){
    const selectedSeats=JSON.parse(localStorage.getItem('selectedSeats'));
    if(selectedSeats!==null&&selectedSeats.length>0){
        seats.forEach((seat,index)=>{
            if(selectedSeats.indexOf(index)>-1){
                seat.classList.add('selected')
            }
        })
    }
    const selectedMovieIndex=localStorage.getItem('selectedMovieIndex')
    if(selectedMovieIndex!==null){
        movieSelect.selectedIndex=selectedMovieIndex;
    }

}

//movie select event
movieSelect.addEventListener('change',function(e){
    ticketPrice=+e.target.value
    setMovieData(e.target.selectedIndex,e.target.value)
    update();
})



//seat click event 

container.addEventListener('click',function(e){
if(e.target.classList.contains('seat')&&!(e.target.classList.contains('occupied'))){
e.target.classList.toggle('selected')
update();

}


})
populateUI();
ticketPrice=+movieSelect.value
//Initial count and total set
update();






