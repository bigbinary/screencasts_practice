$(document).ready(function(){

	$('td').bind('click', function(){
		alert('click event has reached td');
		return false;
	});

});
