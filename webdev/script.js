//Only function here is to allow user to login with username=admin, password=password
//for viewers its username=viewer, password=password

function submitFunction(){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if((user == "admin" && pass == "password")){
        window.location.href="success.html"
    }
    else if((user == "viewer" && pass == "password")){
        window.location.href="funders.html"
    }
    
    if((user!= "admin" && pass == "password") && (user!= "viewer" && pass == "password")) {
        alert("Incorrect username or password");
    }
}
