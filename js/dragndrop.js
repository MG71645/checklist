$(document).ready( function() {
    
    var holding = false;
    
    $(document).on('mousedown', 'card > handle', function(e) {
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
    
    $('card').mouseover( function(e) {
        e.stopPropagation();
        if ( holding == false ) {
            return;
        } else if ( holding == true ) {
            console.log('entering', this, 'at', e.pageY);
            console.log($(this).offset().top, 'sdlkfj');
            if ( $(this).hasClass('placeholder') == false && $(this).hasClass('new') == false && $(this).children().hasClass('placeholder') == false && $(this).parents().hasClass('placeholder') == false ) {
                if ( ($(this).offset().top - e.pageY) < 0 ) {
                    $('.placeholder')/*.removeClass('current')*/.appendTo(this).addClass('current');
                } else {
                    $('.placeholder')/*.removeClass('current')*/.insertBefore(this).addClass('current');
                }
                /*$('.placeholder:not(.current)').remove();*/
            }
        }
    });
    
});