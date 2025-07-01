const main=document.getElementById('main');
const addUserBtn=document.getElementById('add_user');
const doubleBtn=document.getElementById('double');
const showMillionairesBtn=document.getElementById('show_millionaires');
const sortBtn=document.getElementById('sort');
const calculate=document.getElementById('calculate_wealth');


let data=[]
getRandomUser();
getRandomUser();
getRandomUser();

//fetch random user and add money
async function getRandomUser(){
    const res=await fetch('https://randomuser.me/api');
    const data=await res.json();
    const user=data.results[0];
    const newUser={
        name:`${user.name.first} ${user.name.last}`,
        money:Math.floor(Math.random()*1000000)

    }
addData(newUser);
}

//Add new obj to data arr
function addData(obj){
    data.push(obj);
    updateDOM(data)
}

//update DOM

function updateDOM(providedData=data){
    //Clear the main div
    main.innerHTML='<h2><strong>Person</strong>Wealth</h2>';

    providedData.forEach(function(item){
        const element=document.createElement('div');
        element.classList.add('person');
        element.innerHTML=`<strong>${item.name}</strong>${formatMoney(item.money)}`;
        main.appendChild(element);

    })
}

//format number as money
function formatMoney(money){
    return '$'+(money).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function doubleMoney(){
    data=data.map(user=>{
        return {...user,money:user.money*2}
    });
    updateDOM();
}

function sortUsers(){
    data.sort(function(data1,data2){
        return data2.money-data1.money;
    })
    updateDOM();
}
function showMillionaires(){
     data= data.filter(function(item){
        return item.money>1000000;

    })
    updateDOM();
}
function Calculate(){
    const wealth=data.reduce((acc,user)=>(acc+=user.money),0)
    const wealthEm=document.createElement('div');
    wealthEm.innerHTML=`<h3>Total Wealth:<strong>${formatMoney(wealth)}</strong>`
    main.appendChild(wealthEm);
}

addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortUsers);
showMillionairesBtn.addEventListener('click',showMillionaires);
calculate.addEventListener('click',Calculate);