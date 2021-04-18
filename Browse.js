if (localStorage.getItem('username') !== null) {
    // display username
    document.getElementById('login-success').innerHTML = "Welcome, " + localStorage.getItem('username');

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