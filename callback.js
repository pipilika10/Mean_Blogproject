// JavaScript source code
function myAsyncFunction(name, callback) {
    return new Promise(function (resolve, reject, param) {
        if (name == "Paramita") {
            resolve("Here is Paramita")
        }
        else {
            reject("Oops! This is not Paramita");
        }
    });

}

myAsyncFunction("Paramita").then(function (val) {
    console.log(val)
});

function asyncFun(name, callback1, callback2) {
    if (username === "pp12@gmail.com") {

        callback1("resolved");
    }
    else {
        callback2("rejected");
    }

}

function myPromise1() {
    let promise_obj = new Promise(function (resolve, reject) {
        resolve("resolved");
    });
    return promise_obj;
}

function resolvedData(data) {
    console.log(data);
}
function rejectedData(data) {
    console.log(data);
}
myPromise1().then(resolvedData).catch(rejectedData);
