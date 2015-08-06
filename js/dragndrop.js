$(document).ready( function() {
    
    var holding = false;
    
    $('main').on('mousedown', 'card > handle', function(e) {
        console.log('holding', this);
        holding = true;
        $(this).parent('card').clone().appendTo('main').addClass('floating').css('top', e.pageY).css('left', e.pageX);
        $(this).parent('card').addClass('current placeholder').children('card');
    });
    
    $('main').mouseup( function(e) {
        console.log('dropped', this);
        holding = false;
        $('card.floating').remove();
        $('card').removeClass('current placeholder');
    });
    
    $('main').mousemove( function(e) {
        if ( holding == false ) {
            return;
        } else if ( holding == true ) {
            console.log('moving', this);
            $('card.floating').css('top', e.pageY).css('left', e.pageX);
        }
    });
    
    $('main').on('mouseover', 'card', function(e) {
        e.stopPropagation();
        if ( holding == false ) {
            return;
        } else if ( holding == true ) {
            console.log('entered', this, 'at', e.pageY);
            console.log($(this).offset().top, $(this).height(), 'sdlkfj');
            if ( $(this).hasClass('placeholder') == false && $(this).hasClass('floating') == false && $(this).hasClass('new') == false && $(this).children().hasClass('placeholder') == false && $(this).parents().hasClass('placeholder') == false ) {
                if ( ($(this).offset().top + $(this).height() - e.pageY) > 0 ) {
                    if ( ($(this).offset().top - e.pageY) > -44 ) {
                        $('.placeholder').insertAfter($(this).children('handle'));
                    } else {
                        $('.placeholder').appendTo(this);
                    }
                } else {
                    $('.placeholder').insertAfter(this);
                }
            }
        }
    });
    
});