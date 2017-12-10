$('.button-collapse').sideNav({
  menuWidth: "80%", // Default is 300
  edge: 'left', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true
});

$('.button-collapse-filter').sideNav({
  menuWidth: "80%",
  edge: 'left'

});

$('select').material_select();
$('#modal-search-ciup').modal();
$('#modal-results-ciup').modal();
$('.collapsible').collapsible();

// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 300,
//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
offset_opacity = 1200,
//duration of the top scrolling animation (in ms)
scroll_top_duration = 700,
//grab the "back to top" link
$back_to_top = $('.cd-top');

//hide or show the "back to top" link
$(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) { 
    $back_to_top.addClass('cd-fade-out');
  }
});

//smooth scroll to top
$back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
    scrollTop: 0 ,
  }, scroll_top_duration
  );
});


if ($('.sticky-header').length >= 1) {
  $(window).scroll(function() {
    var header = $(document).scrollTop();
    var headerHeight = $('.header-wrapper').height();
    if (header > headerHeight) {
      $('.sticky-header').addClass('sticky');
      $('.sticky-header').fadeIn();
    } else {
      $('.sticky-header').removeClass('sticky');
    }
  });
}

/*Toggle*/
// $(".btn-canvas.btn-filtros" ).click(function() {
//   $(this).addClass('active')
//   $('#slide-results').slideToggle( "slow" );
// });

$(function () {
  'use strict'
  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.row-offcanvas').toggleClass('active')
  })
})

$(".datepicker").pickadate({
    selectMonths: true,
    selectYears: 15,
    format: "dd/mm/yyyy",

    monthsFull: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    weekdaysFull: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    weekdaysShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    weekdaysLetter: [ 'D', 'L', 'M', 'X', 'J', 'V', 'S' ],
    showMonthsShort: undefined,
    showWeekdaysFull: undefined,

    today: "Hoy",
    clear: "Limpiar",
    close: "OK",

    labelMonthNext: "Mes siguiente",
    labelMonthPrev: "Mes anterior",
    labelMonthSelect: "Seleccionar un mes",
    labelYearSelect: "Seleccionar un año"
});

$(function(){
  $('a.smoothScroll').smoothScroll({
    offset: -80,      
    scrollTarget: $(this).val()
  });

// Waypoints
$('.investigador-box-section').waypoint(  
  function(direction) {
    if (direction ==='down') {            
      var wayID = $(this).attr('id');            
    } else {
      var previous = $(this).prev();
      var wayID = $(previous).attr('id');                    
    }
    $('.current').removeClass('current');
    $('.menu-vertical-investigadores a[href=#'+wayID+']').addClass('current');
  }, { offset: '40%' });
});
    