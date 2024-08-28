const saludo: string = "Hola mundo";
console.log(saludo);

let nombre: string = "Cosme";
let edad: number = 30;
let esActivo: boolean = true;
nombre = "Fulano";
const PI = 3.14;

console.log(nombre, PI);

//Funciones TS

//tipo de dato en los parametros
//Parametros opcionales
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Harry"));
console.log(greet("Hermione", "Hola"));

function saludar(): void {
  console.log("Hola, Typescript");
}

saludar();

function sumar(a: number, b: number): number {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado);

function saludando(nombre: string, saludo?: string) {
  return saludo ? `${saludo}, ${nombre}` : `Hola ${nombre}`;
}

console.log(saludando("Pepito"));
console.log(saludando("Pepito", "Buenas tardes"));

//Valores predeterinados
function multiplicar(a: number, b: number = 2): number {
  return a * b;
}

const producto = multiplicar(5);
console.log(multiplicar(5, 4));
console.log(producto);

//Funciones anónimas
const dividir = function (a: number, b: number): number {
  return a / b;
};

console.log(dividir(10, 2));

//Funciones flecha
const restar = (a: number, b: number): number => a - b;

console.log(restar(20, 2));

//Interfaces

interface Usuario {
  nombre: string;
  edad: number;
}

interface Producto {
  nombre: string;
  precio: number;
}

const usuario: Usuario = {
  nombre: "Pepito",
  edad: 45,
};

//Clases
class Persona {
  constructor(public nombre: string, public edad: number) {}
  presentarse(): string {
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const persona = new Persona("Cosme", 40);
console.log(persona.presentarse());

class GestorUsuarios {
  private usuarios: Usuario[] = [];
  agregarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }
  listarUsuarios(): Usuario[] {
    return this.usuarios;
  }
}

//Uso de las clases
const gestorUsuarios = new GestorUsuarios();
gestorUsuarios.agregarUsuario({ nombre: "Cosme", edad: 28 });
gestorUsuarios.agregarUsuario({ nombre: "Fulano", edad: 18 });
gestorUsuarios.agregarUsuario({ nombre: "Fulanito", edad: 51 });
gestorUsuarios.agregarUsuario({ nombre: "Homero", edad: 48 });

console.log("Usuarios: ");
gestorUsuarios.listarUsuarios().forEach((usuario) => {
  console.log(`Nombre: ${usuario.nombre}, Edad ${usuario.edad} `);
});

//Ejercicios

//1. Crear una función que reciba un un parametro del tipo string y devuelva la cantidad de caracteres

function cantChars(input: string): number {
  return input.length;
}

const miString = "Hola, Cosme!";
const charCont = cantChars(miString);
console.log(charCont);
console.log(miString.toUpperCase());

//3. que tome un array de números y devuelva la suma de todos los elementos.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma = 0;
numeros.forEach((numero) => {
  suma += numero;
});
console.log(suma);

//4. que tome un array de objetos de tipo Persona y devuelva un nuevo arreglo con solo los nombres de cada persona.

const personax = [
  { nombre: "Ana", edad: 28 },
  { nombre: "Juan", edad: 34 },
  { nombre: "Luis", edad: 25 },
];

const nombres = personax.map((persona) => persona.nombre);
console.log(nombres);
