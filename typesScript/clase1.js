var nombre = 'silvana';
nombre = 'Silvana';
var cedula = '1231456121';
//cedula = '1231456121'; no hay como reasignar
var apellido = 'Malan';
apellido = 1;
apellido = {};
var edad = 1;
//let casado: boolean = 1;
//let edad: number = 1;
//let edad: number = 1;
var usuario = {
    nombre: 'silvana',
    edad: 28
};
var Usuario = /** @class */ (function () {
    /* constructor(mNombre: string, mEdad: number) {
         this.nombre = mNombre;
         this.edad = mEdad;
     }*/
    function Usuario(nombre, _edad) {
        this.nombre = nombre;
        this._edad = _edad;
    }
    Object.defineProperty(Usuario.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (nuevaEdad) {
            //cambiar los datos o transformarlos
            this._edad = nuevaEdad;
        },
        enumerable: true,
        configurable: true
    });
    Usuario.prototype.imprimirUsuario = function (saludo) {
        //template strigs
        return saludo + ".Mi nombre es: \n        " + this.nombre + ", y\n        mi edad es: " + this.edad;
    };
    return Usuario;
}());
var carlos = {
    nombre: 'carlos',
    edad: 18,
    esposa: new Usuario(mNombre, 'carla,mEdad:19'),
};
//let silvana = new Usuario(mNombre:'silvana',
//mEdad)
