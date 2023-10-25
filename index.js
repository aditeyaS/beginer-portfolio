$('body').append('<div id="loadingDiv"><div class="loader"></div></div>');
$(window).on('load', function(){
      setTimeout(removeLoader, 2000); //wait for page load PLUS 1 seconds.
  });
function removeLoader(){
	$( "#loadingDiv" ).fadeOut(500, function() {
		$( "#loadingDiv" ).remove();
	});  
}