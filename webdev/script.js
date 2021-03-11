//Only function here is to allow user to login with username=admin, password=password

function submitFunction(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if(user == "admin" && pass == "password"){
        window.location.href="success.html"
    }
    else{
        alert("Incorrect username or password");
    }
}