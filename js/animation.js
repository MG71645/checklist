$(document).ready (function() {
	i = 0;
	$('tr').each(function() {
		$(this).children('td').each(function() {
			$(this).css('transition-delay', i+'ms');
		});
		i = (i + 50);
		$(this).children('td').each(function() {
			$(this).css({
				'transform': 'translateY(0px)',
				'opacity': '1'
		    });
		});
	    $(this).children('td').children('rating[value="6"]').css({
	    	'border-left': '30px solid rgba(0,0,0, 0.2)'
	    });
	    $(this).children('td').children('rating[value="7"]').css({
	    	'border-left': '35px solid rgba(0,0,0, 0.2)'
	    });
	    $(this).children('td').children('rating[value="8"]').css({
	    	'border-left': '40px solid rgba(0,0,0, 0.2)'
	    });
	    $(this).children('td').children('rating[value="9"]').css({
	    	'border-left': '45px solid #FABF2D'
	    });
	});
});