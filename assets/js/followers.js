$('#send').click(function(){
	var message = $('#status').val();
	$('#status').val("");
	var msgcont = $('#contenedor');
	msgcont.append('<div>' + '<p>' + status + '</p>' + '</div>');
});