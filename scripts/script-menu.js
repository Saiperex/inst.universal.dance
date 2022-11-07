const btnmenu=document.getElementById("btn-menu");
var estado=0;
resolucion();
document.getElementById("texto").style.display="none";
var label= document.querySelectorAll("label");
for(let i=0;i<label.length;i++)
{
    label[i].style.display="none";
}

function resolucion()
{  
    var ancho=window.screen.width;
    if(ancho>400)
    {
        document.getElementById("contenedor-menu").style.width="4%";
    }
    else
    {
        document.getElementById("contenedor-menu").style.width="14%";
    }
}

function estadobtn()
{
    if(estado==0)
    {
        estado=1;
    }
    else
    {
        estado=0;
    }
}
function menu ()
{
    if(window.screen.width>400)
    {
        if(estado==0)
        {
            document.getElementById("contenedor-menu").style.width="4%";
        }
        else
        {
            document.getElementById("contenedor-menu").style.width="14%";
        
        }
    }
    else
    {
        if(estado==0)
        {
            document.getElementById("contenedor-menu").style.width="14%";
        }
        else
        {
            document.getElementById("contenedor-menu").style.width="44%";
        
        }
    }
    document.getElementById("contenedor-menu").style.transition="all 500ms"
}
function letrasFooter()
{
    if (estado==0)
    {
        document.getElementById("texto").style.display="none";
    }
}
function letrasAparecen()
{
    if(estado==1)
    {
        document.getElementById("texto").style.display="block";
    }
}
function listaOcultar()
{
   if(estado==0)
   {
        for(let i=0;i<label.length;i++)
        {
            label[i].style.display="none";
        }
   }
   else
   {
        for(let i=0;i<label.length;i++)
        {
            label[i].style.display="block";
        }
   }
}
function escondermostrarMenu(evento)
{
    estadobtn();
    menu ();
    letrasFooter();
    listaOcultar();
    setTimeout(letrasAparecen,500);
}
btnmenu.onclick=escondermostrarMenu;