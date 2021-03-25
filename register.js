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
        headers: { "Content-Type": "multipart/form-data" },
    })
    window.location.replace("login.html")
}