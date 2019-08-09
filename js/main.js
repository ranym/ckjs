var x=document.getElementById("texte");
function change(){
    event.preventDefault();
    if (x.style.fontWeight=="bold"){
        x.style.fontWeight="normal";
}else
x.style.fontWeight="bold";
}
function fonte(){
    x.style.fontSize=document.getElementById("fs").value;
}
function ital(){
    event.preventDefault();
    if (x.style.fontStyle=="italic"){
        x.style.fontStyle="normal";
}else
x.style.fontStyle="italic";
}
function under(){
    event.preventDefault();
    if (x.style.textDecoration=="underline"){
        x.style.textDecoration="none";
}else
x.style.textDecoration="underline";
}
function val(){
    x.style.fontFamily=document.getElementById("vl").value;
}