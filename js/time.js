'use strict'

let i=0;
while(i<1000){
    setTimeout(funcionTiempo(), 1000);    
}



function funcionTiempo(){
    var hoy = new Date();
    var time = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    console.log(time)
    i++
}