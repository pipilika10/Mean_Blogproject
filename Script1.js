// JavaScript source code

var attempt = 3;//Variable to count number of attempts
//the function below executes on click of the Login Button
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "FormUser" && password == "FormUser#123") {
        alert("Login Successfully");
        window.location = "blogs.html";
        return false;
    }
    else {
        attempt--;
        alert("You have" + attempt + "attempts left");
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
