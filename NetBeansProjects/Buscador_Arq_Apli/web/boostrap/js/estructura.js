/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Persona(nombre, email, fechnac){
    this.nombre=nombre;
    this.email=email;
    this.fechnac=fechnac;
    this.duplcarPersona= function(){
        var otrapersona=new Persona(this.nombre, this.email, this.fechnac);
        return otrapersona;
    }
    
}
function Departamento(nombre){
    this.nombre=nombre;
    this.trabajadores=new Array();
    this.asignarPersonas=function (objPersona){
        this.conper=0;
        this.trabajadores[conper]=objPersona;
        this.conper++;
    }
    this.buscarPersona=function (objPersona){
        var valreturn=1;
        for (i=0;i<this.trabajadores; i++){
            if (this.trabajadores[i].nombre===objPersona.nombre){
                return i;
            }
        }
    }
}


