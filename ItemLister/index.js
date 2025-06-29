//Examine the Document Object//
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title='123'
// console.log(document.title)
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);


//Get Element by id
// const headerTitle=document.getElementById('header-title');
// headerTitle.innerHTML="hello"

// //Get Element By ClassName
// const items=document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent="Potty"
// console.log(items[1])
// items[1].style.backgroundColor='yellow'

//items.style.backgroundColor='grey'//gives error

// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor='grey'
// }

//Get element by tag name
// const item=document.getElementsByTagName('li')
// console.log(item)

//Query Selector//

// var header=document.querySelector('#main-header');
// header.computedStyleMap.borderBottom='solid 4px black'

// var input=document.querySelector('input');
// input.value='Hello World'

// var submit=document.querySelector('input[type="submit"]')
// submit.value='SEND'

// var lastItem=document.querySelector('.list-group-item:last-child')
// lastItem.style.backgroundColor='red'


// //Query Selector For All
// var titles=document.querySelectorAll('.title')
// console.log(titles)

//Traversing The Dom
//parentNode
// var itemList=document.querySelector('#items')
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor='grey'
// console.log(itemList.parentNode.parentNode)

// //parentElement

// var itemList=document.querySelector('#items')
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor='grey'
// console.log(itemList.parentNode.parentElement)
//child NOdes
// console.log(itemList.childNodes)

//children
// console.log(itemList.children)

// //firstChild
// console.log(itemList.firstChild)
//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.lastElementChild.textContent='Hello'

//nextsibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling);

//createElement

//create a div
// var newDiv=document.createElement('div')
// //add id
// newDiv.id='heheheh'
// //add class
// newDiv.className='hhhh'
// //add attribute
// newDiv.setAttribute('title','Hello Div')
// // console.log(newDiv)
// //create text node
// var newDivText=document.createTextNode('Hello World')
// //add textDiv to mainDiv
// newDiv.appendChild(newDivText)

// var container=document.querySelector('header .container')
// var h1=document.querySelector('header h1')

// container.insertBefore(newDiv,h1);
// console.log(newDiv)



// function buttonClick(e){
// //    console.log(e.target);
// //    console.log(e.target.className)
// //    var output=document.getElementById('output');
// //    output.innerHTML='<h3>'+e.target.id+'</h3>'
// //    console.log(output)
    
// //    console.log(e.type)
// //    
// // console.log(e.offsetX)

// // console.log(e.altKey)
// // console.log(e.shiftKey)


// }
// function runEvent(e){
//     console.log('Event type: '+e.type)
// }


//  var button=document.getElementById('button').addEventListener('mouseup',runEvent)
 
// var box=document.getElementById('box')
// box.addEventListener('mousemove',runEvent)
// var itemInput=document.querySelector('input[type="text"]')
// var form=document.querySelector('form')
// itemInput.addEventListener('keydown',runEvent);
// function runEvent(e){
//    console.log(e.type)
//    console.log(e.target.value)
// }



var form=document.getElementById('addForm')
var itemList=document.getElementById('items')
var filter=document.getElementById('filter')

//form submit event
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click',removeItem)
filter.addEventListener('input',filterItems);


//add item
function addItem(e){
e.preventDefault();

//Get input value
var newItem=document.getElementById('item');

//create new li element
var li=document.createElement('li');
//add class
li.className='list-group-item'
//add text node with input value
li.appendChild(document.createTextNode(newItem.value));
//create the delete button
var deleteBtn=document.createElement('button')
deleteBtn.className='btn btn-danger btn-sm float-right delete'
//text Node
deleteBtn.appendChild(document.createTextNode('X'));
//Append Button to li
li.appendChild(deleteBtn);


itemList.appendChild(li);


console.log(li);




}

function removeItem(e){

if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li=e.target.parentElement;
        itemList.removeChild(li);
    }
}

}


//Filter Items
function filterItems(e){
//convert to lowercase
var text=e.target.value.toLowerCase();
//get list items
var items=itemList.getElementsByTagName('li')
//convert to array
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!=-1){
item.style.display='block'
    }else{
        item.style.display='none'
    }
    
})


}