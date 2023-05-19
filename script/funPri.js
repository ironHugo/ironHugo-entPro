/* script para controlar la visualización del menú (nav) una ves que se oculta el nav
    en la pantalla más chica. Esto evita que no se visualice en menú en el resto de las
    definiciones al redimensionar la ventana. Otra manera sería recargar la página con
    window.location.reload(), pero el efecto no sería el mismo ya que no se quiere 
    recargar la página.
 */
let banMen = true; // Bandera de Menú. Si está activo o no.
let panMov = null; // Bandera de que verifica que el dispositivo sea movil.
(document.getElementsByTagName('main')[0].getBoundingClientRect().width > 500) ? panMov = false : panMov = true; // Configura inicialmente la bandera de la pantalla movil.

window.addEventListener('resize', modBan); // Cada vez que se redimensiona la ventana se controla la bandera. 
function modBan(){
    let mai = document.getElementsByTagName('main')[0];
    let datMai = mai.getBoundingClientRect();
    (datMai.width > 500) ? panMov = false : panMov = true;
}

let botMosMen = document.getElementById('mosMen'); 
botMosMen.addEventListener('click', ocuBar); // Cada vez que se oprime el botón se abre el menú. 


function ocuBar(obj){
    let bot = document.getElementById('mosMen');
    bot.style.display = 'none';
    let men = document.getElementsByTagName('nav')[0];
    men.style.display = 'block';
    banMen = true; // Indica que el menú está visualizado.
    let cue = document.getElementsByTagName('body')[0];
    cue.addEventListener('mousemove', conPun); // Cada vez que se mueve el mouse comprueba si está dentro del menú.
}

function conPun(e){ // Controla si sale el mouse de la sección nav o ul.
    let ele = document.getElementsByTagName('ul')[0];
    let datEle = ele.getBoundingClientRect();
    
    if(((e.clientX < datEle.x || e.clientX > (datEle.x + datEle.width)) || (e.clientY < datEle.y || e.clientY > (datEle.y + datEle.height))) && panMov ){  // Si sale del área del menú y está en diseño movil.
        ocuMen();
    }
}

function ocuMen() { // Oculta el menú y visualiza el ícono del menú desplegable.
    let men = document.getElementsByTagName('nav')[0];
    men.style.display = 'none';
    banMen = false; // Indica que el menú no está visible.
    let bot = document.getElementById('mosMen');
    bot.style.display = 'block';

    window.addEventListener('resize', mosDat);
}

function mosDat(){
    
    if(!panMov && banMen == false){
        
        let men = document.getElementsByTagName('nav')[0];
        men.style.display = 'block';
        banMen = true; // Indica que el menú está visible.

    }else if(panMov && banMen == true){
        let men = document.getElementsByTagName('nav')[0];
        men.style.display = 'none';
        banMen = false; // Indica que el menú no está visible.
    }
    
}