$(document).ready(function() {
 /*    $('.button[filter="wd"]').click(function() {
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[filter="wd"]').show(300);
        }
    });
    $('.button[filter="ud"]').click(function() {
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[filter="ud"]').show(300);
        }
    });
    $('.button[filter="moc"]').click(function() {
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[filter="moc"]').show(300);
        }
    });
    $('.button[filter="all"]').click(function() {
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter > div').show(300);
        }
    }); */

    // Оптимизированная запись того, что выше
    /* $('.button[filter]').click(function() {
        if($(this).attr('filter')=='all') {
            if($(this).attr('val')=='off') {
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('button_focused');
                $(this).addClass('button_focused');
                $('.filter > div').show(300);
            }
        } else {
            if($(this).attr('val')=='off') {
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('button_focused');
                $(this).addClass('button_focused');
                $('.filter > div').hide(300);
                var filter = $(this).attr('filter');
                $('.filter > div[filter = '+filter+']').show(300);
            }
        }
    }); */

    // Еще раз оптимизорованно
    $('.button[filter]').click(function() {
        if($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off').removeClass('button_focused');
            $(this).attr('val', 'on').addClass('button_focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter = '+ $(this).attr('filter') +']').show(300);
            if($(this).attr('filter')=='all') {
                $('.button[filter]').attr('val', 'off').removeClass('button_focused');
                $(this).attr('val', 'on').addClass('button_focused');
                $('.filter > div').show(300);
            }
        }
    });
});