alert("INSPIRED IN TRUE EVENTS");

var vp = document.getElementById("canvasVillaPlatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown",moverLucia);
cantidad = aleatorio(0,5);
var xlucia = 150;
var ylucia = 150;


//ARRAYS

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array ();

var xPollo = new Array();
var yPollo = new Array();


//DEFINIR QUE LAS IMAGENES APARESCAN EN UN ORDEN

var fondo = {
    url:"tile.png",
    cargaOK: false
};

var vaca = {
    url:"vaca.png",
    cargaOK: false
};

var cerdo = {
    url:"cerdo.png",
    cargaOK: false
}

var pollo = {
    url:"pollo.png",
    cargaOK: false
}

var lucia = {
    url:"lucia2.png",
    cargaOK: false

}

//INGRESAR OBJETO IMAGEN//
//CARGAR LA IMAGEN A UNA VARIABLE//
//EVENTO DIBUJAR IMAGEN EN EL CANVAS//

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load",cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load",cargarVacas); 

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);

lucia.imagen = new Image();
lucia.imagen.src = lucia.url;
lucia.imagen.addEventListener("load",cargarLucia);

//FUNCIONES CARGAS IMAGENES

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    quedarseQuietos();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    quedarseQuietos();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    quedarseQuietos();
}

function cargarLucia()
{
    lucia.cargaOK = true;
    dibujar();
}

// FUCNIÓN QUEDARSE QUIETOS

function quedarseQuietos()
{
    if(vaca.cargaOK == true)
        {
            for(v=0; v<10; v++)
            {
                var x = aleatorio(0,6);
                var y = aleatorio(0,6);
                x = x*0.6
                y = y*0.65

                xVaca[v]=x;
                yVaca[v]=y;
            }
        }
  
    if(cerdo.cargaOK == true)
    {
        for(v=0; v<10; v++)
        {
            var x = aleatorio(0,6);
            var y = aleatorio(0,6);
            x = x*0.45
            y = y*0.35
            xCerdo[v]=x;
            yCerdo[v]=y;

        }
    }
  
    if(pollo.cargaOK == true)

    for(v=0; v<10;v++)
    {
        var x = aleatorio(0,6);
        var y = aleatorio(0,6);
        x = x*0.23
        y = y*0.85
        xPollo[v]=x;
        yPollo[v]=y;
    }  

}

// FUNCIÓN MOVERSE

function moverLucia(evento)
{
    var movimiento = 10;
    var teclas = {UP:38, DOWN: 40, LEFT: 37, RIGTH:39};

    switch(evento.keyCode)
    {
        case teclas.UP:
            ylucia=ylucia-movimiento;
            cargarLucia();
            dibujarLucia(xlucia,ylucia);
        break;

        case teclas.DOWN:
            ylucia=ylucia + movimiento;
            cargarLucia();
            dibujarLucia(xlucia,ylucia);
        break;

        case teclas.LEFT:
            xlucia=xlucia-movimiento;
            cargarLucia();
            dibujarLucia(xlucia,ylucia);
        break;

        case teclas.RIGTH:
            xlucia=xlucia+movimiento;
            cargarLucia();
            dibujarLucia(xlucia,ylucia);
        break;
    }
        
}

// FUNCIÓN DIBUJAR

function dibujar()
{
    if(fondo.cargaOK == true)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
  
    if(vaca.cargaOK == true)
    {
        for(v=0; v<10; v++)
        {
            var x = aleatorio(0,6);
            var y = aleatorio(0,6);
            papel.drawImage(vaca.imagen,xVaca[v],yVaca[v]);
        }
    }
  
    if(cerdo.cargaOK == true)
    {
        for(v=0; v<10; v++)
        {
            var x = aleatorio(0,6);
            var y = aleatorio(0,6);
            papel.drawImage(cerdo.imagen,xCerdo[v],yCerdo[v]);

        }
    }
  
    if(pollo.cargaOK == true)
    {
        papel.drawImage(pollo.imagen,xPollo[v],yPollo[v]); 
    }  
 
}

function dibujarLucia(x,y)
{
 papel.drawImage(lucia.imagen,xlucia,ylucia);
}


//FUNCIÓN RANDOM
function aleatorio(min,max)
{
    var z; 
    z = Math.floor(Math.random()*(500-0+1))+0;
    return z;
}