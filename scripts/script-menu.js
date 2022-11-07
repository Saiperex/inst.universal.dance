const btnmenu=document.getElementById("btn-menu");
var estado=0;
document.getElementById("contenedor-menu").style.width="4%";
document.getElementById("texto").style.display="none";
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
    if(estado==0)
    {
        document.getElementById("contenedor-menu").style.width="4%";
    }
    else
    {
        document.getElementById("contenedor-menu").style.width="14%";
  
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
   var label= document.querySelectorAll("label");
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
listaOcultar();