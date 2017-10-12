
/* loading spin delay */
$(document).ready(function() {
	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	
});


/* fullpage.js initialization */
		$(document).ready(function() {
			$('#fullpage').fullpage({
				navigation: false
			});
		});
		
anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection']		


