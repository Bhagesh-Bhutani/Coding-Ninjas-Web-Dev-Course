var isLoggedIn = true;

var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(isLoggedIn){
            resolve("User is Logged In");
        } else {
            reject("User is Not Logged In");
        }
        console.log("Why mmeeee");
    }, 1000);
});

// setTimeout(() => {
//     isLoggedIn = false;
// }, 500);

promise.then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});