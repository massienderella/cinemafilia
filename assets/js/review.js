$(document).ready(function(){
  var imgItems = $('.movie-review blockquote').length; //Número de imágenes


  $('.movie-review blockquote').hide(); //ocultar todas las imágenes
  $('.movie-review blockquote:first').show(); // mostrar la primera imagen



//Ejecución de las funciones
  $('.paginations li').click(paginations);
  $('.chevronLeft').click(prevImg);
  $('.chevronRight').click(SigImg);

  function paginations(){
    var imgPosition = $(this).index() + 1; //Posición de cada ícono

    $('.thumbnail img').hide(); 
    $('.thumbnail img:nth-child('+ imgPosition +')').fadeIn();  //Muestra imagen según posición de ícono

    $('.paginations li').css({'color': '#797C74'});
    $(this).css({'color': 'white'});
  }

});