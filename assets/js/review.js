/*$(document).ready(function(){
  var imgItems = $('.movie-review blockquote').length; //Número de imágenes


  $('.movie-review blockquote').hide(); //ocultar todas las imágenes
  $('.movie-review blockquote:first').show(); // mostrar la primera imagen



//Ejecución de las funciones
  $('.my-review img').click(paginations);
  $('.chevronLeft').click(prevImg);
  $('.chevronRight').click(SigImg);

  function paginations(){
    var imgPosition = $(this).index() + 1; //Posición de cada ícono

    $('.movie-review blockquote').hide(); 
    $('.movie-review blockquote:nth-child('+ imgPosition +')').fadeIn();  //Muestra imagen según posición de ícono
  }

});*/


var idPin = 0;

$(document).ready(function(){
  $('.movie-review blockquote').hide(); //ocultar todas las reseñas
});

function savePin(){
  //tomar valores de los input
  var titulo = $("#tituloInput").val();
  var descripcion = $("#descripcionInput").val();
  var image = $(".image").val();

  $('.movie-review blockquote').hide();
  
  //mostrar post
  $('.post').show();
  $('.post').prepend("<blockquote id='post_" + idPin + "' class='blockquote-reverse'>" +
    "<img src='" + image + "' alt='...'>" +
    "<footer>" + titulo + "</footer>" +
    "<p>" + descripcion + "</p>" +
    "</blockquote");
};
  //mostrar "mis reseñas" dando click a la imagen 
$('.leon').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-leon').fadeIn();
  });

$('.inter').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-inter').fadeIn();
  });

$('.secreto').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-secreto').fadeIn();
  });

$('.million').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-million').fadeIn();
  });

$('.taxi').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-taxi').fadeIn();
  });

$('.whiplash').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-whiplash').fadeIn();
  });

$('.cidade').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-cidade').fadeIn();
  });

$('.broken').click(function(){
    $('.movie-review blockquote').hide();
    $('.bl-broken').fadeIn();
  });