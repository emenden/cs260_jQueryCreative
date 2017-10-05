$("#submitBtn").click(function(){
   var artist = $("#termField").val();
   var explicit = $("#explicitField").checked;
   console.log(artist);
   console.log(explicit);
   
   var getExplicit; 
   if(explicit === false) {
	getExplicit = "No";
   }
   else {
	getExplicit = "Yes";
   }
   console.log(getExplicit);
   
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
   });
});
