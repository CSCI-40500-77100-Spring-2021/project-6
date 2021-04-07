function onLogin(){
    $.getJSON("http://localhost:8000/users", function(data){
        for (i in data){
            console.log(data);
            if (data[i].fields.username == document.getElementById("username").value && data[i].fields.password == document.getElementById("password").value){
                window.localStorage.setItem("username", data[i].fields.username)
                window.location.replace("browse.html");
                console.log("success");
            }
            else {
                console.log("fail");
            }
        }
    });
}