 console.log ("Hola! Bienvenido a este test de preguntas de cultura general")

const preguntas = [
   {
    pregunta:("¿Cuál es el país más grande y el más pequeño del mundo?"),
   opciones: ["Rusia y Vaticano", "China y Nauru","Estados Unidos y Malta"],
   respuestaUsuario: "Estados Unidos y Malta",
//    respuestaCorrecta: "Rusia y Vaticano"
  } , 
  {
    pregunta:("¿Cuál es el libro más vendido en el mundo después de la Biblia?"),
  opciones: ["El Principito", "Cien años de Soledad","Don Quijote de la Mancha"],
  respuestaUsuario: "Don Quijote de la Mancha",
//   respuestaCorrecta: "Don Quijote de la Mancha"
 } , 

 {
    pregunta:("Cuántos decimales tiene el número pi π"),
  opciones: ["Dos", "Mil","Infinitos"],
  respuestaUsuario: "Dos",
//   respuestaCorrecta: "Infinitos"
 } , 

 {
  pregunta:("La sal común está formada por dos elementos, ¿cuáles son?"),
  opciones: ["Cristal y sodio.", "Sodio y carbono","Sodio y cloro"],
  respuestaUsuario: "Cristal y sodio",
//   respuestaCorrecta: "Sodio y cloro"
 } , 

 {
    pregunta:("¿Cuánto tiempo tarda la luz del Sol en llegar a la Tierra?"),
 opciones: ["1 día", "12 horas","8 minutos","12 minutos"],
 respuestaUsuario: "8 minutos",
//  respuestaCorrecta: "8 minutos"
} , 

{
    pregunta:("¿En qué periodo de la prehistoria fue descubierto el fuego?"),
 opciones: ["Neolítico", "Edad de piedra","Edad de los metales","Paleolítico"],
 respuestaUsuario: "Paleolítico",
//  respuestaCorrecta: "Paleolítico"
} , 
  
{
 pregunta:("¿Cuál es la montaña más alta del continente americano?"),
 opciones: ["Monte Everest", "Aconcagua","Monte Fuji"],
 respuestaUsuario: "Monte Everest",
//  respuestaCorrecta: "Aconcagua"
} , 

{
    pregunta:("¿Cuáles son los nombres de los tres reyes magos?"),
    opciones: ["Gaspar, Nicolas y Nataniel", "Gaspar, Melchor y Baltazar","Abraham, Noé y Moises"],
    respuestaUsuario: "Gaspar, Melchor y Baltazar",
    // respuestaCorrecta: "Gaspar, Melchor y Baltazar"
   } , 
   
  
   {
    pregunta:(" ¿Qué juego fue creado por el profesor de educación física James Naismith?"),
    opciones: ["Ping-pong", "Voleibol","Fútbol","Basquetbol"],
    respuestaUsuario: "Ping-pong",
    // respuestaCorrecta: "Basquetbol"
   } , 

   {
    pregunta:("La sigla OTAN significa:"),
    opciones: ["Orden Territorial para Almacenes y Negocios", "Organización del Tratado del Atlántico Norte","Organización Tripartita de América del Norte",],
    respuestaUsuario: "Organización del Tratado del Atlántico Norte",
    // respuestaCorrecta: "Organización del Tratado del Atlántico Nortel"
   } , 

 ];

const respuestaCorrecta =[
    "Rusia y Vaticano","Don Quijote de la Mancha","Infinitos","Sodio y cloro","8 minutos","Paleolítico","Aconcagua","Gaspar, Melchor y Baltazar","Basquetbol", "Organización del Tratado del Atlántico Nortel"
]

let respuestaUsuario = [
    "Estados Unidos y Malta","Don Quijote de la Mancha","Dos","Cristal y sodio","8 minutos","Paleolítico", "Monte Everest","Gaspar, Melchor y Baltazar","Ping-pong","Organización del Tratado del Atlántico Norte",
]




const solucion = preguntas.map ((pregunta, indice ) =>{
    console.log ("pregunta", pregunta)
    console.log ("indice",indice)
    // console.log ("respuestausuario",respuestaUsuario)
    if (pregunta.respuestaCorrecta === respuestaCorrecta [indice]){
        return "Respuesta correcta"
    }else{
        return "Respuesta incorrecta" 
    }
}
)
console.log (solucion)
 
