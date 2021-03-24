function registerUser(){
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let userform = new FormData();
    userform.append("username", username);
    userform.append("password", password);

    $.ajax({
        url: "http://localhost:8000",
        data: userform,
        type: "POST"
    })
    window.location.replace("login.html")
}