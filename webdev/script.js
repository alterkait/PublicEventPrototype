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
