// JavaScript Document
$(document).ready(function(e) {
  $('#principal').height(s('#page').height());//Calcular el alto de la pantalla del dispositivo
  document.addEventListener("deviceready",function(){
	  //precarga el sonido
	  audio=window.plugins.LowLatencyAudio;
	  audio.preloadFX('perro','audio/perro.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('gato','audio/gato.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('chivo','audio/chivo.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('pajaro','audio/pajaro.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('caballo','audio/caballo.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('burro','audio/burro.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('leon','audio/leon',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('cocodrilo','audio/cocodrilo.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('cebra','audio/cebra.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('mono','audio/mono.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('oso','audio/oso.mp3',function(){},function(e){alert('Error '+e);});
	  audio.preloadFX('tigre','audio/tigre.mp3',function(){},function(e){alert('Error '+e);});
	  
	  //reproducir las notas
	  
	  $('.nota').bind('touchstart',function(){$(this).addClass('tocada');
	  audio.play ($(this).attr('id'));});
	  $('.nota').bind('touchend',function(){$(this).removeClass('tocada'); }); 
	  },false); //deviceready
	  
}); //ready