let nombre: string =  'silvana';
nombre =  'Silvana';
const cedula = '1231456121';
//cedula = '1231456121'; no hay como reasignar
let apellido:any = 'Malan';
apellido = 1;
apellido = {};
let edad: number = 1;
//let casado: boolean = 1;
//let edad: number = 1;
//let edad: number = 1;
let usuario = {
    nombre: 'silvana',
    edad: 28
};
class Usuario {
    public nombre: string;
    private edad: number;

   /* constructor(mNombre: string, mEdad: number) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }*/
   constructor (public nombre: string,private _edad:number,){

   }
   get edad(): number{
       return this._edad;
   }
   set edad(nuevaEdad:number){
       //cambiar los datos o transformarlos
       this._edad = nuevaEdad;
   }
    imprimirUsuario(saludo: string):string{
        //template strigs
        return `${saludo}.Mi nombre es: 
        ${this.nombre}, y
        mi edad es: ${this.edad}`;
    }
interface UsuarioTres{
       nombre:string;
       edad:number;
}
let carlos: UsuarioTres = {
       nombre:'carlos',
        edad:18,
    esposa: new Usuario(mNombre: 'carla,mEdad:19')
};
}

//let silvana = new Usuario(mNombre:'silvana',
    //mEdad)