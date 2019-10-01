$(function () {
$.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    type: 'GET',
    success: function(res) {
	$('DIV#api_status').addClass('available')
	},
    error: function() {
        $('DIV#api_status').removeClass('available')
    }
});
