
    // - Synchronous( đồng bộ)
    // - Asynchronous( bất đồng bộ)

    // setTimeout, seInterval, fetch, XMLHttpRequest, file reading, request animation

    // Callback

    // sleep
    /*
    setTimeout(function() {
        console.log(1);
    },1000); // Về mặt logic thì console.log(1) chạy trước console.log(2) nhưng nó sẽ in console.log(2) trước vì setTimeout là một hàm bất đồng bộ TH này sau 1 giây nó sẽ thực thi
    
    console.log(2);
    */

     // - Nỗi đau

     // Callback hell
    /*
     setTimeout(function () {
         console.log(1); //viec 1
         setTimeout(function () {
            console.log(2); //viec 2
            setTimeout(function () {
                console.log(3); //viec 3
                setTimeout(function () {
                    console.log(4); //viec 4
                },1000);
            },1000);
        },1000);
     },1000);
     */


     // 1, pendding (đang chờ xử lý) -- Khong bt sai hay dung
     // 2.Fulfilled (hoàn thành)
     // 3.Rejected

     /*
    var promise = new Promise(
        //Executor
        function(resolve, reject) {
            // Logic
            // Thành công: resolve()
            // thất bại: reject()

            // Fake call API
            // resolve([
            //     {
            //         id: 1,
            //         name: 'javascript'
            //     }
            // ]);
            resolve();
        }
    );
    
    promise
    .then(function() {

        // Khi resolve
        // Nếu .then không return ra promise thì sẽ chạy luôn cái .then phía sau
        // Nếu .then phía trước mà return ra promise thì .then phía sau sẽ phải chờ .then phía trước giải quyết thì mới chạy và then vào cái then có promise phía trước
        // Nếu trong quá trình promise mà có reject thì nó sẽ nhảy đến .catch phía sau và bỏ qua các cái .then phía sau

        return new Promise(function (resolve,reject) {
            setTimeout(function(){
                resolve([1,2,3])
            },3000);
        });
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function() {
        // khi reject
        console.log('Failure!');
    })
    .finally(function() {
        // cả hai trường hợp
        console.log('Done!')
    })*/
// Có tính chất chuỗi chain


// Note: trả lời phỏng vấn
// em có đọc về khái niệm promise không?
// là khái niệm sinh ra để xử lý thao tác bất đồng bọ 
// trước khi có promise ta có cái gọi là callback nhưng nó có tình trạng callback hell gây code khó đọc khó hiểu nên nó sinh ra promise
// để tạo ra promise ta sử dụng từ khoá new promise ở trong constructor ta truyền vào một executor function, trong executor function ta sẽ nhận được hai tham số dạng hàm đó là resolve, reject. 
// resolve() ta gọi nó khi thao tác xử lý của chúng ta thành công
// reject() ta gọi nó khi thao tác xử lý của chúng ta thất bại
// đối tượng promise dược tạo ra chúng ta sẽ sử dụng phương thức .then() hoăc .catch() đều nhận được callback vào then khi chúng ta resolve vao catch khi chúng ta reject.


function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}

sleep(1000)

    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function(){
        console.log(2);
        return new Promise(function (resolve, reject) {
            reject('Có lỗi!');
        });
    })
    .then(function(){
        console.log(3);
        return sleep(1000);
    })
    .then(function(){
        console.log(4);
        return sleep(1000);
    }) 
    .catch(function (err){
        console.log(err);
    })

// 1. Promise.resolve() -- dù thành công hay thất bại đêu trả về resolve
// 2. Promise.reject()-- dù thành công hay thất bại đêu trả về reject
// 3. Promise.all()  -- dùng để hợp nhất các promise lại với nhau

// ví dụ về promise.all()

var promise1 = new Promise( function(resolve){
    setTimeout(function(){
        resolve([1]);
    },2000);
});

var promise2 = new Promise( function(resolve){
    setTimeout(function(){
        resolve([2,3]);
    },4000);
});
// ví dụ nếu promise2 có một reject thì sẽ thực thi .catch luôn
Promise.all([promise1, promise2])
    .then(function(result){
    console.log(result);
    console.log(result[0].concat(result[1]));
    })


    