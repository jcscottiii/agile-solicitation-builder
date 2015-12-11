function get_data(key, callback){
	$.ajax({
		type: "GET",
		url: "/api/get_content/" + key,
		dataType: 'json',
		success: function(data){
			console.log(data);
			if (callback){
				callback(data);
			}
		}
	});
}

function get_value(key, callback){
	$.ajax({
		type: "GET",
		url: "/api/get_value/" + key,
		dataType: 'json',
		success: function(data){
			console.log(data);
			if (callback){
				callback(data);
			}
		}
	});
}


function put_data(key, content, callback){	
	$.ajax({
		type: "PUT",		
		url: "/api/get_content/" + key,
		data: JSON.stringify({text: content}),
		contentType: 'application/json',
		dataType: 'json',
		success: function(data){
			if (callback){
				callback(data);
			}
		}
	});
}