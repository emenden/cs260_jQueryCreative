$("#submitBtn").click(function(){
   var $results = $("#results");
   var artist = $("#termField").val();
   var explicit;
   console.log($("#explicitField").val()); 
   if($("#explicitField").val()) {
	explicit = "Yes";
   }
   else {
	explicit = "No";
   }

   console.log(artist);
   console.log(explicit);
   
   var media = "musicVideo";
   var entity = "musicVideo";
   
   var appleURL = "https://itunes.apple.com/search?";
   appleURL += "term=" + artist;
   appleURL += "&media=" + media;
   appleURL += "&entity=" + entity;
   appleURL += "&explicit=" + explicit;
   console.log(appleURL);

   $.ajax({
	url: appleURL,
	dataType: 'json',
	type: 'GET' 
   }).done(function(data){
	console.log(data);
	for (var i = 0; i < data["resultCount"]; i++) {
 	    $results.append("<li>" + data[i]["trackCensoredName"] + "</li>");
	}
   });
});
