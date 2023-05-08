// Comprobamos si el navegador soporta la File API y Filereader
if (window.File && window.FileReader && window.FileList) {
    console.log('Todas las APIs soportadas');
}
else {
    alert('La API de FILE no es soportada en este navegador.');
}

// Función para buscar el archivo de video local
 function handleFileSelect(e) {

    let file = e.target.files[0]; //archivo subido

    if (!file.type.match('video.*')){ // comprueba que es de tipo vídeo
      return;
    }

// Usamos Filereader 
    let reader = new FileReader();

    reader.onload = (function (theFile) {
      return function (e) {
              
          let div = document.createElement('div');
        
          div.innerHTML = '<video controls id="video" src="' + e.target.result + '" title="'+ theFile.name + '"/>';

          document.getElementById('video-output').insertBefore(div, null);
 
// Mensaje al usuario de tipo Alert
          alert('El video esta cargando');
          
// Función para hacer visible el video y los botones
    document.getElementById('video').addEventListener('canplay', () => {
            
        document.getElementById('video-output')

            play.style.visibility = "visible";
            pause.style.visibility = "visible";
            up.style.visibility = "visible";
            down.style.visibility = "visible"; 
        });
      }
    })(file);

    reader.readAsDataURL(file);
}
document.getElementById('file').addEventListener('change', handleFileSelect, false);