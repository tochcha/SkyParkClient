// мелкие скрипты

jQuery(document).ready(function() {

    // слайдер (настройки тут http://kenwheeler.github.io/slick/)
    $('.share-slider').slick({
        infinite: true,
        dots: true,
        fade: false,
        arrows: false,
        pauseOnFocus: false,
        speed: 400,
        autoplaySpeed: 6000,
        autoplay: true
    });

    // показать пароль
    $('.showpassword:password, .password-showing:password').showPassword({
        /*linkRightOffset: 5,
        linkTopOffset: 11*/
    });

    // календарь
    $("input.tcal").click(function() {
        $(this).addClass("checked");
    });

    // попап 1
    $("#forpopup-1").click(function() {
        $("#popup-1").toggleClass("visiblepopup");
    });
    $("#popup-1 .close").click(function() {
        $("#popup-1").removeClass("visiblepopup");
    });

    // попап 2
    $("#forpopup-2").click(function() {
        $("#popup-2").toggleClass("visiblepopup");
    });
    $("#popup-2 .close").click(function() {
        $("#popup-2").removeClass("visiblepopup");
    });

    // попап 3
    $("#forpopup-3").click(function() {
        $("#popup-3").toggleClass("visiblepopup");
    });
    $("#popup-3 .close").click(function() {
        $("#popup-3").removeClass("visiblepopup");
    });

    // попап 4
    $("#forpopup-4").click(function() {
        $("#popup-4").toggleClass("visiblepopup");
    });
    $("#popup-4 .close").click(function() {
        $("#popup-4").removeClass("visiblepopup");
    });

    // попап 5
    $("#forpopup-5").click(function() {
        $("#popup-5").toggleClass("visiblepopup");
    });
    $("#popup-5 .close").click(function() {
        $("#popup-5").removeClass("visiblepopup");
    });
	
    // попап emailform
    $("#forpopup-emailbox").click(function() {
        $("#popup-emailbox").fadeToggle(200);
    });

    // num input
    (function() {
        var inps = $('div.num-input');
        inps.each(function() {
            var box = $(this);
            var inp = box.find('input');
            var plus = box.find('.plus');
            var minus = box.find('.minus');
            plus.click(function() {
                inp.val(+inp.val() + 1);
            });
            minus.click(function() {
                var val = +inp.val() - 1;
                if (val < 0) val = 0;
                inp.val(val);
            });
        });
    })();

    //липкий сайдбар
    jQuery('.aside-277').containedStickyScroll();

    // включить/выключить все чекбоксы по клику
    $("#check-all").click(function() {
        var checked_status = this.checked;
        $("input.ms").each(function() {
            this.checked = checked_status;
        });
    });
    $("#check-all2").click(function() {
        var checked_status = this.checked;
        $("input.ds").each(function() {
            this.checked = 	!checked_status;
        });
    });
    $("input.ds").click(function() {
        var checked_status = this.checked;
        $("#check-all2").each(function() {
            this.checked = 	!checked_status;
        });
    });

    //дроп-меню
    $(".ico-menu").click(function() {
        $(this).parent(".icons").children(".act-menu").toggleClass("visiblepopup");
    });
    $(".weight span").click(function() {
        $(this).parent(".weight").children(".act-menu").toggleClass("visiblepopup");
    });
    $(".time span").click(function() {
        $(this).parent(".time").children(".act-menu").toggleClass("visiblepopup");
    });
    $(".date2 span").click(function() {
        $(this).parent(".date2").children(".act-menu").toggleClass("visiblepopup");
    });
    jQuery(function($) {
        $(document).mouseup(function(e) { // событие клика по веб-документу
            var div = $(".act-menu"); // тут указываем ID элемента
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.removeClass("visiblepopup"); // скрываем его
            }
        });
    });

    // подсказка при наведении
    $(".withtitle").easyTooltip();

    //подсветка активного инпут и текстареа
    $(window, document, undefined).ready(function() {
        $('input, select, textarea').blur(function() {
            var $this = $(this);
            if ($this.val())
                $this.addClass('used');
            else
                $this.removeClass('used');
        });

    });


}); // end $(document).ready(function

/*// прелоадер
$(window).load(function() {
    $(".loader_inner").fadeOut(500);
    $(".loader").delay(500).fadeOut(300);
});*/