function registerUser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let data = {
        username: username,
        password: password
    }

    $.ajax({
        url: "http://localhost:8000/users",
        data: data,
        type: "POST",
    })
    window.location.replace("login.html")
}