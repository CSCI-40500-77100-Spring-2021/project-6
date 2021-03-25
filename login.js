function onLogin(){
    $.getJSON("http://localhost:8000/users", function(data){
        for (i in data){
            console.log(data);
            if (data[i].fields.username == document.getElementById("username").value && data[i].fields.password == document.getElementById("password").value){
                document.cookie = "username=" + document.getElementById("username").value + "; path=/";
                window.location.replace("browse.html");
                console.log("success");
            }
            else {
                console.log("fail");
            }
        }
    });
}