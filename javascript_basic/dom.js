// HTML DOM
// có 3 thành phần
/*
    1. Element vd: Id, class , tag
        CSS Selector(lấy ra nodeList), HTML Collection( gần giống array)

    2. Atribute vd class="" id="" href=""
    3. text
*/

// Javascript tương tác : Browser | server (nodeJS)

// Application programing interface
// Browser: HTML ->DOM -> WEB API

// Để js thao tác vs HTML DOM ta sử dụng documnet ( đại diện cho toàn bộ website)

document.write('hello guys!'); 

var headingElements = document.getElementsByClassName('heading');
console.log(headingElements);  // trả về 1 HTML collection

// console.log(document.querySelector('ten class truy xuất như css'));  -- trả về 1 element

// console.log(document.querySelectorAll('ten class truy xuất như css')); -- trả về 1 nodeList

// lấy ra form document.forms['form-1'];


// DOM attribute

var headingElements=document.querySelector('h1');

headingElements.title='Heading';// thêm 1 title.
headingElements.className='tieu de'; //thêm 1 class

// set atribute vao 1 element
headingElements.setAttribute('href','w3.com');// không cần hợp lệ
// get atribute từ 1 element
headingElements.getAttribute('class');



// innerText, textContent

var headingElement = document.querySelector('.head');
headingElement.innerText='New heading';
headingElement.textContent='New heading 2';

console.log(headingElement.textContent);
console.log(headingElement.innerText);

// innerText bỏ qua tất cả element con của element cha .(giống với những gì bạn nhìn thấy trên web)
// textContent bỏ qua tất cả element con của element cha và lấy ra tất cả các khoảng trắng( hiển thị cả text node)


// innerHTML, outerHTML

// innerText: thay thế tất cả element con bẳng element mới của thẻ cha
// outerHTML: thay thế element mà nó trỏ đến bằng elemt mới 

var boxElement = document.querySelector('.box');
boxElement.innerHTML = '<h1 title="Heading">New heading </h1>'; 

console.log(boxElement.innerHTML);
//boxElement.outerHTML='<span>this is </span>';
console.log([boxElement]);

// nodeType =1 là element node;
// nodeType =2 là attribute node;
// nodeType =3 là text node; 


// DOM CSS

// -- set css inline
Object.assign(boxElement.style,{
    width:'200px',
    height:'100px',
    backgroundColor: 'green',

});

// ClassList property

/*
    add : thêm 1 hoặc nhiều class
    contains : kiểm tra class có tồn tại hay không trả về true or false
    remove : xoá class
    toggle  : có thể thêm class nếu chưa tồn tại hoặc xoá class nếu đã tồn tại
*/
var box_2Element= document.querySelector('.box-2');

box_2Element.classList.add('red')
// có thể thêm nhiều class nhưng phải cách bởi dấu phẩy
setInterval(function(){
    box_2Element.classList.toggle('red');
},1000);


// DOM events (sự kiện làm 1 cái gì đó)
/*
    1. Attribute events
    2. Assign event using the element node
*/

var h2Elements = document.querySelectorAll('h2');

console.log(h2Elements);
for(var key in h2Elements){
    h2Elements[key].onclick= function(event){// có thể viết tắt event là e
        console.log(event.target);
        console.log(event);

    }
}


// DOM events exam

// 1.Input / select
// 2. Key up/ down

// onchange: sự kiện này không cho phép nhập 1 chuỗi 2 lần liên tiếp

// oninput: sự kiện này nhập đến đâu sẽ chạy đến đó

var inputElement = document.querySelector('select');

inputElement.onchange = function(e){
    console.log(e.target.value);
}

// onkeydown: dí xuống
// onkeyup: nhấc lên
// onkeypress: dữ phím thì thực thi liên tục ngoại trừ phím Esc
// --> trả về keyboardEvent

// thường dùng để xác định phím bấm trên giao diện web

document.onkeydown = function(e){
    console.log(e.which);
    switch(e.which){
        case 27:
            console.log('exit');
            break;
    }
}


// DOM events (tiếp)

// 1. preventDefault: loại bỏ hành vi mặc định trên browsers
// 2. stopPropagation: loại bỏ sự kiện nổi bọt ( hành vi lan truyền)

// --1 example 1
var aElements = document.links;
console.log(aElements);

for(var key in aElements){
    aElements[key].onclick = function(e){
        if(!e.target.href.startsWith('https://f8.edu.vn')){
            e.preventDefault();
        }
    }
}

// --1 example 2
var ulElement = document.querySelector('ul');

ulElement.onmousedown = function(e){
    e.preventDefault();
}

ulElement.onclick = function(e){
    console.log(e.target)
}

// --2

document.querySelector('.classDiv').onclick=function(){
    console.log('DIV');
}

document.querySelector('button').onclick = function(e){
    e.stopPropagation();
    console.log('Click me')
}

// event listener

// 1.xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe/ huỷ bỏ lắng nghe

var btn1= document.getElementById('btn');
function viec1(){
    console.log('viec 1');
}

function viec2(){
    console.log('viec 2');
}

btn1.addEventListener('click', viec1);
btn1.addEventListener('click', viec2);// Thêm 1 sự kiện

setTimeout(function(){
    btn1.removeEventListener('click',viec1); // loại bỏ 1 sự kiện
},3000);