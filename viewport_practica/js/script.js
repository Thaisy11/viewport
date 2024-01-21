//landscape w750 h307 (min w568 max w 901: min h209 max h328)
//portrait w390 h663 (min w288/ max w424: min h449 max h829)
/////////////////////////////////////
//probar en el proyecto
//height: 300px;
//overflow: hideen --> cambiar a scroll o auto 
//overflow: hidden; /*auto para que se vea*/
//height: 3px;/*quitar el tamaño cuando se clicke en el h5*/
/*div:hover --> hace que cuando pases por encima se despliegue height: auto dentro de el
puedes añadir animacion:display:
transition: height 2s
ej: 
article{
  height: 100px
  overflow: hidden;
  transition: height 2s
 article:hover{
  height: 600px; --> no vale auto

  ;
;*/
$(document).ready(function () {
  function updateViewportSize() {
    const viewportSizeElement = $('#viewportSize');
    viewportSizeElement.text(`${$(window).width()}x${$(window).height()}`);
  }

 

  $(window).on('load', function () {
    updateViewportSize();
    updateFechaActual();
  });

  $(window).on('resize', function () {
    updateViewportSize();
  });
});