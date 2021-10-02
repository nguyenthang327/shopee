/*
Giới thiệu một số hàm built-in
    1.Alert
    2. Console  // console.log, warn, error
    3. Confirm
    4. Prompt
    5. Set timeout // chỉ chạy 1 lần
    6. Set interval // chạy liên tục
*/

// setInterval(function(){
//     alert('tiền');
// }, 2000)


/*
    Giới thiệu về toán tử trong javascript
    1. Toán tử số học -- Arithmetic
    2. Toán tử gán -- assignment
    3. Toán tử so sánh -- comparation
    4. toán tử logic -- logical
*/
/*

var myObject={
    name: 'Thang',
    age: 20,
    myfuntion: function(){
        console.log('hi');
    }
}

console.log('myObject',myObject);
*/

//chuỗi
/*  var myString="Tôi học JS tại F8";
    Độ dài của 1 chuỗi myString.length;
    2.find string
    myString.indexOf('JS', vị trí xuát phát) -- trả về vị trí có JS đầu tiên bắt đầu từ vị trí xuất phát
    myString.lastIndexOf('JS') --tra về vị trí có JS cuối
    myString.search('JS') -- trả về vị trí có JS đầu tiên khác với indexOf
    
    --cat chuoi
    myString.slice(1,3) -- xuất phát từ đầu cắt chuỗi từ vị trí 1 đến vị trí 3
    myString.slice(-1,-3) -- xuất phát từ cuối chuỗi

    --thay the ky tu trong chuoi
    myString.replace(/JS/g,'Javarscript') -- thay thế tất cả các ký tự có tên JS thành Javarscript
    
    --tách chuỗi thành mảng
    myString.split(',') -- tách chuỗi thành mảng sau điểm chung là dấu phẩy
    nếu myString.split('') -- tách từng ký tự 

    --loại bỏ các ký tự ' ' thừa trong chuõi
    myString.trim();

    --trả về giá trị là chuỗi ở vị trí
    myString.charAt(2) --vị trí thứ 2 của chuỗi
*/
var number=10;
console.log(typeof number);
console.log(typeof number.toString());


// Mảng (Array)

/*
    Kiểm tra có phải là mảng hay không sử dụng Array.isArray(ten bien);
    Lấy ra mảng có bao nhiêu phần tử tenmang.length;

    Làm việc với array
    1. To string : Chuyển array thành 1 chuỗi
    2. Join      : ví dụ languages.join('-')  trở thành javascript-PHP-Ruby
    3. Pop        : xoá phần tử ở cuối mảng và trả về phần tử đã xoá
    4. Push       : thêm 1 hoặc nhiều phần tử vào cuối mảng và tăng độ dài của mảng
    `   vd: languages.push('dart','java');
    5. Shift       : xoá 1 phần tử ở đầu mảng và trả về phần tử đầu;
    6. Unshift     : thêm 1 hoặc nhiều phần tử vào đầu mảng và tăng độ dài của mảng
    7. Splice    : xoá cắt hoặc chèn phần tử mới vào mảng
        vd1 xoá: languages.splice(1,2) --xoá 2 phần tử từ vị trí 1
        vd2 chèn: languages.splice(1,0,'dart') -- từ vị trí 1 không xoá và thêm dart
    8. Concat      : hàm nối 2 array lại với nhau
        vd: languages.concat(languages02) -- lấy languages làm gốc
    9. Slice        : cắt 1 vài hoặc toàn bộ element của mảng
        languages.slice(start,end)-- cắt từ vị trí start đến end
*/

var languages=[
    'javascript',
    'PHP',
    'Ruby'
];

console.log(languages.splice(languages.length-2,2));
console.log(languages)

// Tham số  hàm

/*
    1. Tham số?
        - Định nghĩa? là một giá trị có thể truyền vào khi gọi 1 function;
        -Kiểu dữ liệu? khoong gioi han
        -Tính private? khi truyền biến vào function chỉ được sử dụng tại function đó.
        
    2. Truyền tham số
        - 1 tham số 
        - Nhiều tham số
    3.l Argument? 
        - Đối tượng arguments -- nâng cao
        -Giới thiệu vòng for of
*/


function writeLog(){
    var myString= '';
    for(var param of arguments){
        myString+=`${param}`;
    }
    console.log(myString);
}
//writeLog('1',2,'4','2','5');


// các loại function

/*
    1. declaration function : có thể gọi hàm trước khi định nghĩa

        function showMessage(){   
        }
    2. Expression function: có thể đặt tên hoặc không và không thể gọi hàm trước khi định nghĩa.
        var showMessage2 = function(){

        }
        
        
        
    3. Arrow function
*/


// Polyfill: là cách tạo ra một hàm mà nó có thể hỗ trợ cho các trình duyệt cũ.

// Object
var passwordKey='password';

var myInfor={
    name: 'nguyen thang',
    age:18,
    address: 'Ha Noi, VN',
    [passwordKey]:'123456',
    getName: function(){
        return this.name;
    }
};
/*

var myKey='address';
// cách 1: Thêm mới key vào object
myInfor.email='nguyenthang327@gmail.com';
// cách 2: Thêm mới key vào object khi muốn đặt tên biến có ký tự khác chuẩn đặt tên biến;
myInfor['0msv-sv']='2000';

console.log(myInfor[myKey]);
console.log(myInfor);

//xoá đi key của value
delete myInfor.address;
console.log(myInfor);

// function --> phương thức / method
// others --> thuộc tính / property
console.log(myInfor.getName());
*/

// object constuctor

var User=function (firstName,lastName,avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;

    this.getName=function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author= new User('Thắng', 'Nguyễn', 'Avatar');
var user= new User('Huyền', 'Nguyễn', 'Avatar');

author.title='Học lập trình tại F8';
user.comment='Bao giờ thì ra sản phẩm mới';


console.log(author);
console.log(user);

console.log(author.getName());
console.log(user.getName());

// Object prototype -Basic -- sử dụng code trên

/*  1. prototype là gì? --Nguyên mẫu cấu thành nên đối tượng
    2. Sử dụng khi nào? --Thêm được 1 thuộc tính hoặc 1 phương thức bên ngoài hàm tạo và nó được lưu trữ ở phần prototype
*/

User.prototype.className='F8';
User.prototype.getClassName = function() {
    return this.className;
}

console.log(user.className);
console.log(author.getClassName());


// Đối tượng Date

var date = new Date();

console.log(date) //--typeof date = object nếu khai báo không có new typeof date trả về string

var year = date.getFullYear();
var month= date.getMonth() +1;
var day= date.getDay();
// tương tự getHours(), getMinutes(), getSeconds()

console.log(`${day}/${month}/${year}`);

// vòng lặp --Loop

/*
    1. For- lặp với điều kiện đúng
    2. for/in - lặp qua key của đối tượng
    3. for/of - lặp qua value của đối tượng
    4. while - lặp khi điều kiện đúng
    5. do/while - lặp ít nhất 1 lần, sau đó lặp lại điều kiện đúng.

*/

// for/in
// -- object
var myInfo ={
   name: 'thang nguyen',
   age:20,
   address: 'ha noi, vn' 
};

for(var key in myInfo){
    console.log(key);// biến key kiểu string
}

for(var key in myInfo){
    console.log(myInfo[key]);// cách 2: lấy ra một property từ object
}

// -- array
var languages_programming=['java','php','c++'];
for(var keys in languages_programming){
    console.log(languages_programming[keys]);// key trong Vi du nay la string
}

// -- string

var languages_string='Javascript';
for(var keys in languages_string){
    console.log(languages_string.charAt(keys));
}

//for of

// -- Objedt.keys(myInfo) : tra ve du lieu kiểu mảng
// -- Object.values(myInfo) : tra ve du lieu kiểu mảng
for(var value of Object.keys(myInfo)){
    console.log(myInfo[value]);
}

// array
for(var value of languages_programming){
    console.log(value);
}

// string
for( var value of languages_string){
    console.log(value);
}

// Array methods

/*
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

var courses=[
    {
        id: 1,
        name: 'javascript',
        coin:70
    },
    {
        id: 2,
        name: 'html, CSS',
        coin:0
    },
    {
        id: 3,
        name: 'Ruby',
        coin:0
    },
    {
        id: 4,
        name: 'PHP',
        coin:0
    },
    {
        id: 5,
        name: 'sd PHP',
        coin:0
    }
];


// forEach()-- duyệt qua từng phần tử của mảng
courses.forEach(function(course,index){
    console.log(index,course);
});

// every() -- dùng để kiểm tra xem tất cả giá trị trong mảng phải thoả mãn 1 giá trị nào đó. Kiểu dữ liệu trả về boolean true, false
var isTrue = courses.every(function(course,_index){
    return course.coin === 0;
});

console.log(isTrue);

// some() -- giống với every() nhưng chỉ cần kiểm tra khi nào trong mảng có phần tử đúng thì dừng lại

//find() -- giống với some() nhưng kiểu dữ liệu trả về có thể là mảng hoặc object



//filter() -- lọc trong mảng ra mảng mới thoả mãn điều kiện

var string= courses.filter(function(string){
    return string.name=== 'PHP';
})
console.log(string);

// console.log('test b1');
//     var obj={};
//     var array=[];
// courses.forEach(function(course,index){
//     console.log(course);
//     var i=0;
//     for(var value of Object.values(course)){
//         array[i]=value;
//         ++i;
//         console.log(value);
//     }
//     obj[array[0]]=array[1];
// })
// console.log(obj);--> successful


// map() -- lọc qua tất cả các phần tử của mảng và trả về array
console.log('ff');
    var coursesHander = courses.map(function(course,_index){
        return `<h2>${course.name}</h2>`;
    }
    )
    console.log(coursesHander);

var inputs = [
    1, 'hi', false, 8, undefined, '', NaN
];

// var input=inputs.map(function(a){
//     if(Number.isInteger(a)&&typeof a=='number'){
//         return a>0?true:false;
//     }
//     else if(typeof a=='string'&& a.length>0){
//         return true;
//     }else{
//         return false;
//     }
// })
// console.log(input);

function convertToBoolean(inputs) {
    
    return inputs.map(function(a){
    if(Number.isInteger(a)&&typeof a=='number'){
        return a>0?true:false;
    }
    else if(typeof a=='string'&& a.length>0){
        return true;
    }else{
        return false;
    }
});
    
}
console.log(convertToBoolean(inputs));

// reduce() --

/*
    accumulator: lưu trữ giá trị mà nó trả về
    currentValue: trả về 1 đối tượng là giá trị con của mảng

*/

function coinHandler(accumulator,currentValue,currentIndex,originArray){
    return accumulator+currentValue.coin;
}

var totalCoin=courses.reduce(coinHandler,0)
// tham số thứ nhất là hàm, tham số thứ 2 là accumulator
console.log(totalCoin);

// viet lai ham reduce()
// Nếu không có tham số initial value thì nó sẽ tự động gán cái initial bẳng object đầu tiên và bắt đầu chạy từ object thứ 2

// TH: không có inital
var numbers=[
    100,
    200,
    400,
    500
];
var total=numbers.reduce(function(total,number){
    return total +number;
})

// Flat - "Làm phẳng" 
var depthArray=[1,2, [3,4],5,6,[7,8,8]];

var flatArray = depthArray.reduce(function(flatOutPut,number){
    return flatOutPut.concat(number);
},[]);
console.log(flatArray);

// includes method chỉ làm việc với array và string

var title='Responsive web design';
console.log(title.includes('Responsive'));

var courses=['javascript','php','dart'];
console.log(courses.includes('javascript',2));

// Math object

/*
    - Math.PI trả về số pi
    - Math.round() làm tròn số vd 1.5->2
    - Math.abs() trị tuyệt đối
    - Math.ceil() làm tròn trên
    - Math.floor() làm tròn xuống
    - Math.random() trả về số ngẫu nhiên từ 0 đến 1 ví dụ từ 0 đến 10 Math.random() *10
    - Math.min()
    - Math.max()
*/

// callback

/* 
    là hàm (function) được truyền qua đối số khi gọi hàm khác

    1. là hàm
    2. Được truyền qua đối số
    3. Được gọi lại ( trong hàm nhận đối số);
*/
var courses=[
    'javascript',
    'PHP',
    'ruby'
];

// định nghĩa phương thức
Array.prototype.map2=function(callback){
    var output=[];
    var arrayLength=this.length;
    for(var i=0;i<arrayLength;++i){
        var result = callback(this[i],i);
        output.push(result);
    }
    return output;
}
var htmls = courses.map2(function(course,index){
    return `<h2>${course}</h2>`
});

console.log(htmls.join(''));




