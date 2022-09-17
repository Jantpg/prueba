const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btn-calcular')
const pResult = document.querySelector('#result')

btn.addEventListener('mouseover', mouseOverButton)

function btnOnClick() {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}

function mouseOverButton() {
    pResult.innerHTML += "Moused Over! <br>"
}















































// function nombreCompleto(name, lastName) {
//     return name + " " + lastName
// }

// function saludo(name, lastName, nickName) {
//     const completeName = nombreCompleto(name, lastName);

//     console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");   
//     }

//     saludo("Maria", "Payares", "Payi")

// let respuesta

// while (respuesta != '4') {
//     let pregunta = prompt("cuanto es 2 + 2?")
//     respuesta = pregunta;
// }

// const consolas = {
//     nintendo: "switch",
//     Sony: "PLaystation",
//     Microsoft: "Xbob"
// }
// function imprimirElementosObjeto(objeto) {
//     const arr = Object.values(objeto);
//     for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// }



// let myArray = ["pokemon", "digimon", "shaman king"]
// let comida = ["pasticho", "pizza", "cocacola"]
// let consola = {
//     sony: "playstation",
//     nintendo: "wii",
//     microsoft: "xbox"
// }
// function readObject(object) {
//    for (let key in object) {
//     console.log(object[key])  
//     }
//    }

// readObject(consola)




















// let autos = []


// function automovil(marca, modelo, anio) {
//         this.marca = marca;
//         this.modelo = modelo;
//         this.anio = anio;
//     }


// for (let i = 0; i < 3; i++) {
//     let marca = prompt("Ingresa la marca del auto");
//     let modelo = prompt("Ingresa el modelo del auto");
//     let anio = prompt("Ingresa el anio del auto")
//     autos.push(new automovil(marca, modelo, anio));

// for (let i = 0; i < autos.length; i++) {
//    console.log(autos[i])
// }
// }









// let jugador = prompt("Elige tu jugada")
// let oponente = random(1,3)

// if (oponente === 1) {
//     oponente = "tijera"
// } else if (oponente === 2) {
//     oponente = "papel"
// } else {
//     oponente = "piedra"
// }

// resultadoPelea()

// switch(true) {
//     case (jugador === oponente):
//         alert("oponente eligio " + oponente)
//         alert("empate");
//         break;
//     case (jugador === "piedra" && oponente === "tijera"):
//         alert("oponente eligio " + oponente)
//         alert("Ganaste");
//         break;
//     case (jugador === "papel" && oponente === "piedra"):
//         alert("oponente eligio " + oponente)
//         alert("Ganaste");
//         break;
//     case (jugador === "tijera" && oponente === "papel"):
//         alert("oponente eligio " + oponente)
//         alert("Ganaste");
//         break;
//     default:
//         alert("oponente eligio " + oponente)
//         alert("Perdiste");

// }

// function resultadoPelea() {

//     if(jugador === oponente) {
//         alert("oponente eligio " + oponente)
//         alert("empate")
//     } else if(jugador === "piedra" && oponente === "tijera"){
//         alert("oponente eligio " + oponente)
//         alert("Ganaste")
        
//     } else if(jugador === "papel" && oponente === "piedra") {
//         alert("oponente eligio " + oponente)
//         alert("Ganaste")
//     } else if(jugador === "tijera" && oponente === "papel") {
//         alert("oponente eligio " + oponente)
//         alert("Ganaste")
//     } else {
//         alert("oponente eligio " + oponente)
//         alert("Perdiste")
//     }
// }

// function random(min,max) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }