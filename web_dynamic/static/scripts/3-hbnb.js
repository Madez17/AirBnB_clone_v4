$(function () {
$.ajax({
    url: 'http://localhost:5001/api/v1/status/',
    type: 'GET',
    success: function(res) {
    console.log("Hello");
	$('#api_status').addClass('available')
	},
    error: function() {
        $('#api_status').removeClass('available')
    }
});
});
