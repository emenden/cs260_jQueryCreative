$("#submitBtn").click(function(){
   //var num = $("#numField").val();
   //console.log(num);
   //var URL = "http://xkcd.com/";
   //URL += num;
   //URL += "/info.0.json";
   
   //URL = "http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?";
   URL = "http://dynamic.xkcd.com/api-0/jsonp/comic/1234";

   console.log(URL);
   //$.ajaxSetup({
//	headers: { "Access-Control-Allow-Origin": "*" }
  // });
   $.ajax({
        url: URL,
	crossDomain: true,
        dataType: 'jsonp',
   	success: function(data){
        console.log(data);
	$("#searchResults").append(
		$("<h1/>").text(data.safe_title),
		$("<img/>").attr({
			src: data.img,
			title: data.alt,
			alt: data.title
        })
	);
   }
});
});

