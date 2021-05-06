$(document).ready(function() {
    console.log("ready!");

    $.get("http://localhost:8000/books", function(data) {
        console.log(data);
        // for (i = 0; i < data.length; i++) {
        //     console.log(data[i].fields.ISBN);
        //     console.log(data[i].fields.title);
        //     console.log(data[i].fields.author);
        //     console.log(data[i].fields.description);
        // }

        // $(data).each(function(data) {
        //     console.log(data.title);
        //     $('#books-list').append($("<tr>")
        //         .append($("<td>").append(data.ISBN))
        //         .append($("<td>").append(data.title))
        //         .append($("<td>").append(data.author))
        //         .append($("<td>").append(data.description)));
        // });

        for (i = 0; i < data.length; i++) {
            let buyButton = document.createElement("a");
            buyButton.innerHTML = "Add to Cart";
            buyButton.href = "#"
            buyButton.className = "button primary";

            $('#books-list').append($("<tr>")
                .append($("<td>").append(data[i].fields.ISBN))
                .append($("<td>").append(data[i].fields.title))
                .append($("<td>").append(data[i].fields.author))
                .append($("<td>").append(data[i].fields.genre))
                .append($("<td>").append(data[i].fields.description))
                .append($("<td>").append(data[i].fields.price).append(buyButton)));
        };

    });

});


if (localStorage.getItem('username') !== null) {
    // display username
    document.getElementById('login-success').innerHTML = "Welcome, " + localStorage.getItem('username') + "  ";

    // create sign out button
    let signOutButton = document.createElement("button");
    signOutButton.innerHTML = "Sign out";
    // style button with preset classes
    signOutButton.className = "button primary button-shrink";

    // append
    let loggedInUser = document.getElementById('login-success');
    loggedInUser.appendChild(signOutButton);

    // add event handler
    signOutButton.addEventListener("click", function() {
        window.localStorage.clear();
        window.location.replace("index.html");
    });
}