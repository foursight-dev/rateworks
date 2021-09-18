$(function() {

    $('.carousel').carousel({
        interval: 3000
    });

    $

    $('#datetimepicker4').datepicker({
        inline: true,
        dateFormat: "mm/yy",
        changeMonth: true,
        changeYear: true,
        endDate: new Date(),
    }).on('changeDate', function(e) {  
    console.log(e.format()); 
     

    $(".datepicker .datepicker-days td.day").click(function(){
        window.location.href = "social-security.html";
      });
    
});


    var start_year = new Date().getFullYear();
    var html = ''
    for (var i = '1940'; i <= start_year; i++) {
        if (i == start_year) {
            html += '<li><a href="javascript:void(0);" onclick="yearselected(' + i + ');" class="y-' + i + ' active" attr-id="' + i + '">' + i + '</a></li>';
        } else {
            html += '<li><a href="javascript:void(0);" onclick="yearselected(' + i + ');" class="y-' + i + '" attr-id="' + i + '">' + i + '</a></li>';
        }
        setTimeout(function(){ $('.y-' + start_year).addClass('active').trigger('click'); 
            $('.y-' + start_year).parent().parent().parent().addClass('slick-current slick-active slick-center')
    }, 500);
        
    }
    $(".year-gr").html(html);
});

$(function() {

    $('.datepciker-borrower').datepicker({
        inline: true,
        dateFormat: "mm/yy",
        changeMonth: true,
        changeYear: true,
        endDate: new Date(),
    }).on('changeDate', function(e) {  
    console.log(e.format( )); 

    $(".datepicker .datepicker-days td.day").click(function(){
        window.location.href = "social-security-borrower.html";
      });
});



});


function monthselected(mid) {
    var month = mid;
    var date = new Date();
    var year = '2021';
    $('.month-gr div a').removeClass('active');
    $('.m-' + mid).addClass('active');
    $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
}

function yearselected(yid) {
    var month = $('.month-gr div.slick-current a').attr('attr-id');
    var date = new Date();
    var year = yid;
    $('.year-gr li a').removeClass('active');
    $('.y-' + yid).addClass('active');
    $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
}

$(document).on('ready', function() {

    $(".center").slick({
        centerMode: true,
        vertical: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $(".centerleft").slick({
        centerMode: true,
        vertical: true,
        slidesToShow: 3,
        focusOnSelect: true,
        slidesToScroll: 1
    });
    $(".top").slick({
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
    $(".bottom").slick({
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1
    });
    
    $('.month-gr .slick-prev').on('click', function(){
       var month = $('.month-gr .slick-track .slick-slide.slick-current a').attr('attr-id');
        var date = new Date();
        var year = '2021';
        $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
    });
    $('.month-gr .slick-next').on('click', function(){
       var month = $('.month-gr .slick-track .slick-slide.slick-current a').attr('attr-id');
        var date = new Date();
        var year = '2021';
        $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
    });
    
     $('.year-gr .slick-prev').on('click', function(){
       var year = $('.year-gr .slick-track .slick-slide.slick-current a').attr('attr-id');
        var date = new Date();
         var month = $('.month-gr .slick-track .slick-slide.slick-current a').attr('attr-id');
        $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
    });
    $('.year-gr .slick-next').on('click', function(){
       var year = $('.year-gr .slick-track .slick-slide.slick-current a').attr('attr-id');
        var date = new Date();
         var month = $('.month-gr .slick-track .slick-slide.slick-current a').attr('attr-id');
        $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
    });

    var newDate = new Date();
if(newDate.getMonth()!=0 && newDate.getMonth()!=''){
    var month = newDate.getMonth();
    //alert('fdfd');
    $('.month-gr .slick-track .slick-slide').removeClass('slick-current slick-active slick-center');
    $('.month-gr li.item a.mon-'+newDate.getMonth()).parent().addClass('active');
    $('.month-gr li.item a.mon-'+newDate.getMonth()).parent().parent().parent().addClass('slick-current slick-active slick-center');
    var date = new Date();
    var year = $('.year-gr .slick-track .slick-slide.slick-current a').attr('attr-id');;
    $('#datetimepicker4').datepicker('setDate', new Date(year, month, date.getDate())).trigger('change');
    
    setTimeout(function(){ $('.month-gr li.item a.mon-'+newDate.getMonth()).parent().parent().parent().addClass('slick-current slick-active slick-center').trigger('click'); }, 10);
}

});


$(window).on('load', function(){
     setTimeout(function(){ $('.year-gr .slick-track .slick-slide.slick-current a').trigger('click'); }, 500);
    $('.month-gr li.item a.mon-'+newDate.getMonth()).parent().parent().parent().addClass('slick-current slick-active slick-center').trigger('click');
   
   
});

