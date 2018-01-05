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





if (window.File && window.FileReader && window.FileList && window.Blob) {
  
   //this is not completely neccesary, just a nice function I found to make the file size format friendlier
  //http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
  function humanFileSize(bytes, si) {
      var thresh = si ? 1000 : 1024;
      if(bytes < thresh) return bytes + ' B';
      var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
      var u = -1;
      do {
          bytes /= thresh;
          ++u;
      } while(bytes >= thresh);
      return bytes.toFixed(1)+' '+units[u];
  }


  //this function is called when the input loads an image
  function renderImage(file){
    var reader = new FileReader();
    reader.onload = function(event){
      the_url = event.target.result
      //of course using a template library like handlebars.js is a better solution than just inserting a string
      
     // function savePin(){
  //tomar valores de los input
  var titulo = $("#tituloInput").val();
  var descripcion = $("#descripcionInput").val();
  //var image = $(".image").val();

  $('.movie-review blockquote').hide();

  //mostrar post
  $('.post').show();
  $('.post').prepend("<blockquote id='post_" + idPin + "' class='blockquote-reverse'>" +
    "<img src='" + the_url + "' alt='...'>" +
    "<footer>" + titulo + "</footer>" +
    "<p>" + descripcion + "</p>" +
    "</blockquote");
//};   

}
    
    //when the file is read it triggers the onload event above.
    reader.readAsDataURL(file);
  }

  

  //watch for change on the 
  $( "#exampleInputFile" ).change(function() {
    console.log("photo file has been chosen")
    //grab the first image in the fileList
    //in this example we are only loading one file.
    console.log(this.files[0].size)
    renderImage(this.files[0])

  });
  
} else {

  alert('The File APIs are not fully supported in this browser.');

}

















var idPin = 0;

$(document).ready(function(){
  $('.movie-review blockquote').hide(); //ocultar todas las reseñas
});






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