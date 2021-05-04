$(document).ready(function() {
          
       $("#fetch").click(function(event){
           $.getJSON("http://localhost:8000/books", function(emp) {
               $('#display').html('<p> Name: ' + emp.ISBN + '</p>');
               $('#display').append('<p>Age : ' + emp.author+ '</p>');
               $('#display').append('<p> Role: ' + emp.description+ '</p>');
   //             $('#display').append('<p> Company: ' + emp.company+ '</p>');
           });
       });
   });
		
		
		
		
		
		
		
		
		
		
		
		
		$.getJSON("http://localhost:8000/books", function(data){
		 		       console.log(data);
		 			   $(data).each(function(i, data){
		 			   	$('#bookssbody').append($("<tr>")
		 				   .append($("<td>").append(data.ISBN))
		 				   .append($("<td>").append(data.title))
		 				   .append($("<td>").append(data.author))
		 				   .append($("<td>").append(data.genre))
		 				   .append($("<td>").append(data.description)));
		 			   });
		 		     })


			     .done(function(){
			 alert("completed");
		 })
		 .fail(function(e){
			 console.log('error:');
			 console.error(e);
		 })
		 .always(function(){
			 alert("always runs");
		 })
		 
		 
////////To insert data to the database///////////////////////////
		// let data = {
// 		  ISBN: "9781524721251",
// 		  title: "Harry Potter and the Sorcerer's Stone",
// 		  author: "J.K. Rowling",
// 		  genre: "Fantasy",
// 		  description: "Harry Potter has no idea how famous he is.",
// 		}
//
		// $.ajax({
		//   url: "http://localhost:8000/books",
		//   data: data,
		//   type: "POST"
		// },