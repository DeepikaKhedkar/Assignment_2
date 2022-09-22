//console.dir(Document);
//GETELEMENTBY   ID
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
//console.log(headerTitle);
// headerTitle.textContent="Hello";
// headerTitle.innerText='GOOD'
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>hello</h3>';
header.style.borderBottom = 'solid 3px black';

//GETELEMENTBY CLASS NAME
// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello2'
// items[1].style.fontWeight='bold';
// items[2].style.backgroundColor='Green';

// for (var i= 0; i < items.length; i++){
//     items[i].style.backgroundColor ='pink';

// }

// //GETELEMENTBY tag name
// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='hello2'
// li[1].style.fontWeight='bold';
// li[2].style.backgroundColor='Green';

// for (var i= 0; i < li.length; i++){
//     li[i].style.backgroundColor ='skyblue';

// }

// //QUERYselector
// var header =document.querySelector('#main-header');
// header.style.borderBottom='solid 4px blue';

// var input= document.querySelector('input');
// input.value='hello world'

// var submit =document.querySelector("input[type='submit']");
// submit.value='SEND'

// var item= document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem= document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem =document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='pink';
// secondItem.style.backgroundColor='green';

// //queryselector all

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'HELLO';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor="green";
//    // odd[i].style.color='blue';
//     even[i].style.backgroundColor="pink";


// }
// var Items= document.querySelectorAll('.list-group-item');
//  Items[1].style.color='green';

//  @@@@@@@@@@@@@@@@@@ 7  Create nodes and modify DOM @@@@@@@@@@@@@@@@@@@@@@ //

// var itemList = document.querySelector('#items');

// //parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='pink'
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='black';

//childNode
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='brown';

// //firstChild
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Deepika';


//lastChild
// console.log(itemList.firstChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='Krushiv';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
//previousElementSibling
// console.log(itemList.previousElementSibling);

//create Div
var newDiv = document.createElement('div');

//add class
newDiv.className = 'hello';

//add id
newDiv.id = 'hello 1';

//add attribute
newDiv.setAttribute('title', 'Hello Div');

//create textNode
var newDivText = document.createTextNode('HELLO WORLD');

//add text to div
newDiv.appendChild(newDivText);


var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize   ='30px';

container.insertBefore(newDiv, h1);

//******************************************************************** */
