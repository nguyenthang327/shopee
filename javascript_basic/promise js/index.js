var users = [
    {
        id:1,
        name: 'nguyễn thắng'
    },
    {
        id:2,
        name: 'nick name',
    },
    {
        id:3,
        name: 'quang tuan',
    }
];

var comments = [
    {
        id:1,
        user_id:1,
        content: "sao khong ve nha",
    },
    {
        id:2,
        user_id:2,
        content: "toi khong quen ban",
    },
    {
        id:3,
        user_id:3,
        content: "lay xe may ve nha",
    },
    {
        id:4,
        user_id:1,
        content: "ok",
    }
];

function getComments(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(comments);
        },1000);
        
    });
}

function getUsersByIds(userIDs){
    return new Promise(function(resolve) {
        var result = users.filter(function(user){
            return userIDs.includes(user.id);
        });
        setTimeout(function(){
            resolve(result);
        },1000)
    });
}
getComments()
    .then(function(comments){
        //console.log(comments)
        var userIDs = comments.map(function(comment){
            return comment.user_id;
        });
        return getUsersByIds(userIDs)
            .then(
            function(users){
                return {
                    users : users,
                    comments : comments,
                }
            }
            )
    })

    .then(function(data){
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment){
            var user = data.users.find(function(user){
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`;
          
        });
        commentBlock.innerHTML = html;
    })

