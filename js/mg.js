$(document).ready(function() {
    /*
    $('card:not(:has(card))').addClass('accent');
    */
	$('card.new button').click(function() {
        $('card.new').toggleClass('minimized');
        setTimeout( function() {
            $('card.new:not(.minimized)').children('input').focus();
        }, 300);
	})
    $('button.unfold:not(.active)').click(function() {
        $(this).toggleClass('active').parent().toggleClass('folded');
    })
    
    $('card > handle').mouseover( function() {
        $(this).parent().addClass('no-transition');/*
        setTimeout( function() {
            $(this).mousemove( function() {
                console.log('sdfljsfds');
                $('card').addClass('sortable');
            });
        }, 500);*/
    });
    
})