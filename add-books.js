// function addBook(event) {
//     let data = {
//         owner_id: "ff9534aa-4925-49df-9f6d-89f55e9ae69c",
//         ISBN: "9781524721251",
//         title: "Harry Potter and the Sorcerer's Stone",
//         author: "J.K. Rowling",
//         genre: "Fantasy",
//         description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny."
//     }

//     $.ajax({
//         url: "http://localhost:8000/books",
//         data: data,
//         type: "POST",
//     })

//     window.alert("Book added successfully!");
//     window.location.replace("add-books.html");
// }

function addBook(event) {
    // console.log(document.getElementById("isbn").value);
    let data = {
        owner_id: "ff9534aa-4925-49df-9f6d-89f55e9ae69c",
        ISBN: document.getElementById("isbn").value,
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        genre: document.getElementById("genre").value,
        description: document.getElementById("description").value,
        price: document.getElementById("price").value,
    }

    $.ajax({
        url: "http://localhost:8000/books",
        data: data,
        type: "POST",
    })

    window.alert("Book added successfully!");
    window.location.replace("add-books.html");
}