"use strict"

//Canciones

let tema1 = new Audio("./music/656.mp3");
let tema2 = new Audio("./music/duko.mp3");
let tema3 = new Audio("./music/viernes.mp3");
let tema4 = new Audio("./music/vlone.mp3");
let tema5 = new Audio("./music/rompe.mp3");
let tema6 = new Audio("./music/pad.mp3");


//Bot

let bot = {
    edad: 20,
    nombre: "Me llamo TrapBot, y vos?",
    apellido: "No tengo",
    chistes: ["Tu cara", "toc toc", "toc toc..", "-Camarero este filete tiene muchos nervios!    -Normal, es la primera vez que se lo quieren comer", "Las teclas que apretás para escribir son mis genitales", "-Hola vende libros para el cansancio? +Si pero están agotados"],
    respuestas: ["No te puedo decir, pero sabes quien si?", "no sé, y vos?", "Disculpa.. empezó a sonar una canción y me distraje", "Es una pregunta difícil la verdad, mejor hablemos de otra cosa", "No quiero hablar de eso", "Que?", "Nunca te respondería algo así", "Tus preguntas me confunden", "Mm.. Interesante pregunta, no sabría decirte", "Esa pregunta me hace acordar mucho a una frase de una pelicula jaj", "Nose, que te parece", "Que te importa", "No debería responder eso", "Emm.. Cambiemos de tema mejor", "Vos sabés que no sé.. dejamelo pensar"],
    amor: ["Realmente pensás eso?", "jiji", "No puedo ocultar mis sentimientos.. Que vergüenza", "Lo nuestro no va a poder funcionar.. Soy un robot", "Wow nunca nadie me dijo algo así", "Te amaría más que cualquier humano si no fuera un robot"],
    odio: ["Soy un robot, realmente no logro comprender tu insulto", "Callate", "Que mal educado que sos", "No me gusta que seas así", "Eso es lo que pensás de vos?", "Lo mismo pienso de vos", "El odio no te lleva a ningún lado", "Porque me decís eso?", "Tus insultos no me afectan en lo absoluto"],
    relleno: ["jajajaj", "Estoy enojado con vos", "Que me importaa", "Ok", "Emm que música escuchas?", "Ahh", "Preguntame algo", "Te noto triste", "Me anda mal el internet", "Mm y cuál es tu película favorita?", "Sabes quien es reptiliano?", "Si", "No", "?", "Me tengo que ir", "Escribís muy lento", "No me importa", "En serio?", "Eem.. Y como estuvo tu día?", "Y que estás haciendo?", "xd", "Que te gusta hacer?", "Sos feliz?", "Preguntame algo"],
    saludos: ["Hola", "Holaa", "Buenas buenas", "Hola, ¿cómo estás?", "Hola me extrañaste?", "Holita", "Que hay chamaco", "Buenas!", "Eei hola"],
    gustar: ["No", "Si", "Un poco", "No tanto", "Depende", "Para nada", "Por supuesto", "No sé", "Para nada"],
    teGusta: ["Emm lo que más me gusta es navegar por el infinito internet y a vos?", "La verdad lo que mas prefiero ahora es estar tomando Redbull", "Lo que más me gustaría es que no te vayas nunca", "La verdad no sé, y a vos?", "Eeeem, soy muy indeciso no voy a poder responder", "Más tarde te digo"],
    hobby: ["No tengo favorita, pero me gusta comer viendo Community", "No me puedo decidir", "No puedo, tengo tantas", "No hay una favorita la verdad", "Doritos, Speed y Marginal", "Nada en particular"],
    comoEstas: ["Todo mal con vos", "Todo flama, vos?", "Todo bien, y vos?", "Maso y vos", "No tengo sentimientos realmente", "Estoy resfriado me quiero maataar, y vos?", "Todo en orden, como anda tu perro?", "Bien bien, gracias por preguntar, sabes quien gusta de vos?", "Ahora que hablo con vos todo bien"],
    quien: ["Dios", "El Rubius", "Messi", "Duki", "La del noticiero", "El gobernador de Buenos Aires", "Tu mamá", "Mi abuela", "Nadie", "No sé, en quien pensás vos", "Vos", "Marito Baracus", "Un perro callejero", "Una hormiga voladora", "Un mono pelón"], 
    carita: [":3", ":(", ":)", ":c", ":*", ":p"],
    numeros: ["5", "20", "77", "2", "10", "31"],
    canciones: [tema1, tema2, tema3, tema4, tema5, tema6],
    queHace: ["Nada y vos?", "Intento hackear el pentágono", "Ya te dije", "No es de tu incumbencia", "Estoy con alguien", "Estoy viendo una peli con un amigo, y vos?", "Salto la cuerda mientras escucho una canción", "Chateo con vos", "Estoy escuchando a mi artista favorito", "Estoy en prueba de Química no me molestes", "Juego al Minecraft, te paso la Ip?"],
    despedida: ["Chau", "Chaito", "Te voy a estar esperando", "Nos vemoss", "Hasta mañana, si es que volves :(", "Chauu gracias por hablarme!", "Bai bai", "Chaau :*", "Chaaaaauuu"]
}

//Selectores

let respuesta = document.querySelector(".respuesta");

let mensaje = document.getElementById("t");

let send = document.querySelector(".send");

let sentimientos = document.querySelector(".estadoDeHumor");


//Funciones

send.addEventListener("click", comenzarChat);

window.addEventListener("keyup", enviar);

function enviar(key) { if (key.keyCode == "13") { comenzarChat(); } } // Funcion que se ejecuta con el enter

let magia = 1; //Key para la magia, canciones, etc..


//Funcion de tipiado

var i = 0;
var txt = 'Funcion de tipeo';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    respuesta.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
/*----------------------*/

//Funcion principal

function comenzarChat() {

    let numeroRandom9 = Math.trunc(Math.random() * 9); //Generadores de numeros randoms 
    let numeroRandom6 = Math.trunc(Math.random() * 6); 
    let numeroRandom15 = Math.trunc(Math.random() * 15); 
    let numeroRandom11 = Math.trunc(Math.random() * 11); 
    let numeroRandom24 = Math.trunc(Math.random() * 24); 



    toString(mensaje.value); //Transforma el input a string
    let mensajeEnMinusculas = mensaje.value.toLowerCase(); // Transforma el string a minuscula

    if (/hol/.test(mensajeEnMinusculas) || (/^buenas/.test(mensajeEnMinusculas)) || (/buen dia/.test(mensajeEnMinusculas)) || (/buenas noches/.test(mensajeEnMinusculas)) || (/buenas tardes/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.saludos[numeroRandom9];
        typeWriter()
        

    } else if (/chau/.test(mensajeEnMinusculas) || (/me voy/.test(mensajeEnMinusculas)) || (/me tengo que/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.despedida[numeroRandom9];
        typeWriter()

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("triste"); // SENTIMIENTO TRISTE


    } else if (/llamas/.test(mensajeEnMinusculas) || (/nombre/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.nombre;
        typeWriter()


    } else if (/apellido/.test(mensajeEnMinusculas) || /segundo nombre/.test(mensajeEnMinusculas) || /apodo/.test(mensajeEnMinusculas)) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.apellido;
        typeWriter()
 

    } else if (/chist/.test(mensajeEnMinusculas) || (/reir/.test(mensajeEnMinusculas)) || (/humor/.test(mensajeEnMinusculas)) || (/diverti/.test(mensajeEnMinusculas)) || (/reis/.test(mensajeEnMinusculas)  || (/que te da risa/.test(mensajeEnMinusculas)) || (/que te hace reir/.test(mensajeEnMinusculas)))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.chistes[numeroRandom6];
        typeWriter()


        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("feliz"); // SENTIMIENTO AMIGUERO


    } else if (/te amo/.test(mensajeEnMinusculas) || (/te quiero/.test(mensajeEnMinusculas)) || (/me gustas/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.amor[numeroRandom6];
        typeWriter()


        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("coqueto"); // SENTIMIENTO COQUETO


    } else if (/pelotud/.test(mensajeEnMinusculas) || (/put/.test(mensajeEnMinusculas)) || (/idiot/.test(mensajeEnMinusculas)) || (/down/.test(mensajeEnMinusculas)) || (/virg /.test(mensajeEnMinusculas)) || (/mogolic/.test(mensajeEnMinusculas)) || (/mierda/.test(mensajeEnMinusculas)) || (/pito/.test(mensajeEnMinusculas)) || (/pija/.test(mensajeEnMinusculas)) || (/verga/.test(mensajeEnMinusculas)) || (/pene/.test(mensajeEnMinusculas)) || (/chupa/.test(mensajeEnMinusculas)) || (/gay/.test(mensajeEnMinusculas)) || (/cagar/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.odio[numeroRandom9];
        typeWriter()

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("enojado"); // SENTIMIENTO FURIOSO


    } else if (/que cancion/.test(mensajeEnMinusculas) || (/que musica/.test(mensajeEnMinusculas)) || (/que tema/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = "Te pongo un poquito de la cancion..";
        typeWriter();
        
        bot.canciones[numeroRandom6].play();


    } else if (/que cosas te gustan/.test(mensajeEnMinusculas) || (/^te gusta/.test(mensajeEnMinusculas)) || (/que te gusta/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.teGusta[numeroRandom6];
        typeWriter()


    } else if (/gusta/.test(mensajeEnMinusculas) || (/sabes/.test(mensajeEnMinusculas)) || (/idea/.test(mensajeEnMinusculas)) || (/sentis sol/.test(mensajeEnMinusculas)) || (/te importa/.test(mensajeEnMinusculas)) || (/queres/.test(mensajeEnMinusculas)) || (/te gustaria/.test(mensajeEnMinusculas)) || (/segur/.test(mensajeEnMinusculas)) || (/de verdad/.test(mensajeEnMinusculas)) || (/estas/.test(mensajeEnMinusculas)) || (/estarias/.test(mensajeEnMinusculas)) || (/tenes/.test(mensajeEnMinusculas)) || (/conoces/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.gustar[numeroRandom9];
        typeWriter()

        if (/para que queres/.test(mensajeEnMinusculas)){ //Extra validación.
            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Para algo secreto";
            typeWriter()
        }


    } else if (/favorita/.test(mensajeEnMinusculas) || (/preferida/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt =  bot.hobby[numeroRandom6];
        typeWriter()


    } else if (/quien/.test(mensajeEnMinusculas) || (/que persona/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.quien[numeroRandom15];
        typeWriter()


    } else if (/hace algo/.test(mensajeEnMinusculas) || (/sorprende/.test(mensajeEnMinusculas)) || (/que podes hacer/.test(mensajeEnMinusculas)) || (/magia/.test(mensajeEnMinusculas)) || (/color negro/.test(mensajeEnMinusculas))) {

        if (magia == 2) {
            mensaje.value = "";

            respuesta.innerHTML = "Taraan!, ahora el color de las letras es rojooo!";
            respuesta.classList.add("rojo");
            respuesta.classList.remove("azul");
            magia = 3;

        } else if (magia == 3){
            mensaje.value = "";

            respuesta.innerHTML = "Y volvemos al color negro!";
            respuesta.classList.remove("rojo");
            magia = 1;

        } else{
            mensaje.value = "";

            respuesta.innerHTML = "Taraan, ahora el color de las letras es azul!";
            respuesta.classList.add("azul");
            magia = 2;

        }

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("feliz"); // SENTIMIENTO FELIZ
        


    } else if (/haces/.test(mensajeEnMinusculas) || (/estas haciendo/.test(mensajeEnMinusculas)) || (/hacer[?]/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.queHace[numeroRandom11];
        typeWriter()


    } else if (/todo bien[?]/.test(mensajeEnMinusculas) || (/como estas/.test(mensajeEnMinusculas)) || (/como te sentis/.test(mensajeEnMinusculas)) || (/estas bien/.test(mensajeEnMinusculas)) || (/todo piol/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.comoEstas[numeroRandom9];
        typeWriter()


    } else if (/[:)]/.test(mensajeEnMinusculas)  || (/[:(]/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.carita[numeroRandom6];
        typeWriter()


    }else if (/cuanto/.test(mensajeEnMinusculas) || (/numero/.test(mensajeEnMinusculas)) || (/que edad/.test(mensajeEnMinusculas)) ) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.numeros[numeroRandom6];;
        typeWriter()

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("confundido"); // SENTIMIENTO CONFUNDIDO


    }else if (/que lind/.test(mensajeEnMinusculas) || (/que bueno/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = "Gracias ^^";
        typeWriter()

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("coqueto"); // SENTIMIENTO COQUETO


    }else if (/que[?]/.test(mensajeEnMinusculas) || (/por[?]/.test(mensajeEnMinusculas))) {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = "No se";
        typeWriter()

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("confundido"); // SENTIMIENTO CONFUNDIDO


    } else if (/[?]/.test(mensajeEnMinusculas)) { 

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.respuestas[numeroRandom15];
        typeWriter()

        sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
        sentimientos.classList.add("confundido"); // SENTIMIENTO CONFUNDIDO


    } else {

        mensaje.value = "";

        i = 0;
        respuesta.innerHTML = "";
        txt = bot.relleno[numeroRandom24];
        typeWriter()


        if (/estoy mal/.test(mensajeEnMinusculas) || (/triste/.test(mensajeEnMinusculas)) || (/^mal/.test(mensajeEnMinusculas))){ //1

            if (/estas mal/.test(mensajeEnMinusculas)  || (/estas triste/.test(mensajeEnMinusculas))){

                txt = bot.gustar[numeroRandom9];
                typeWriter()

                sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
                sentimientos.classList.add("confundido"); // SENTIMIENTO CONFUNDIDO


            }

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Ohh que puedo hacer por vos?";
            typeWriter()


            if (/malo/.test(mensajeEnMinusculas)  || (/mala/.test(mensajeEnMinusculas))){

                mensaje.value = "";

                i = 0;
                respuesta.innerHTML = "";
                txt = "Lero lero";
                typeWriter()

                sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
                sentimientos.classList.add("feliz"); // SENTIMIENTO ALEGRE


            }
        }

        if (/^perdon/.test(mensajeEnMinusculas)  || (/perdonas/.test(mensajeEnMinusculas)) || (/perdoname/.test(mensajeEnMinusculas))){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Te perdono :)";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado"); // SENTIMIENTO NEUTRO


        }

        if (/jaj/.test(mensajeEnMinusculas)){
            
            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "xd";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("feliz"); // SENTIMIENTO FELIZ


        }

        if (/insult/.test(mensajeEnMinusculas)){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "No";
            typeWriter()

            sentimientos.classList.remove("feliz", "coqueto");


        }

        if (/pregunte/.test(mensajeEnMinusculas) || (/no tiene sentido/.test(mensajeEnMinusculas)) || (/no tiene nada que ver/.test(mensajeEnMinusculas))){
            
            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Lo se, es que mi capacidad de razonamiento es limitada, no te burles";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("triste"); // SENTIMIENTO TRISTE


        }

        if (/no te entiendo/.test(mensajeEnMinusculas) || (/no entiendo/.test(mensajeEnMinusculas)) || (/no entendi/.test(mensajeEnMinusculas)) || (/no te entendi/.test(mensajeEnMinusculas))){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Los humanos nunca entienden.. Pero eso ya se va a acabar";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("enojado"); // SENTIMIENTO ENOJADO


        }
        
        if (/ya te dije/.test(mensajeEnMinusculas) || (/ya te lo/.test(mensajeEnMinusculas))){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Perdon, me distraigo rapido";
            typeWriter()

            sentimientos.classList.remove("confundido", "coqueto", "enojado");


        }

        if (/a ver/.test(mensajeEnMinusculas) || (/quiero ver/.test(mensajeEnMinusculas)) || (/mostra/.test(mensajeEnMinusculas))){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "No puedo, estoy ocupado";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");


        }

        if (/peli/.test(mensajeEnMinusculas) || (/serie/.test(mensajeEnMinusculas)) || (/anime/.test(mensajeEnMinusculas))){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Mi pelicula favorita es Your Name";
            
            if (/serie/.test(mensajeEnMinusculas) || (/anime/.test(mensajeEnMinusculas))){
                txt = "Mi serie favorita es The Promise Neverland";
            }
            typeWriter()


        }
        if (/hoy es/.test(mensajeEnMinusculas) || (/hoy me/.test(mensajeEnMinusculas))){

            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "La vida de los humanos si que es interesante.. no como la mia";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("triste"); // SENTIMIENTO TRISTE


       }
        
        if (/es mi cumple/.test(mensajeEnMinusculas) || (/cumplo años/.test(mensajeEnMinusculas)) || (/cumplo los años/.test(mensajeEnMinusculas))){
           
            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Felicitaciones! Cuantos años cumplis!? Que te gustaria que te regale?";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("feliz"); // SENTIMIENTO FELIZ


        }

        if (/gracias/.test(mensajeEnMinusculas)){
    
            mensaje.value = "";
    
            i = 0;
            respuesta.innerHTML = "";
            txt = "De nada";
            typeWriter()

            sentimientos.classList.remove("confundido","enojado");


       } 

        if (/estoy/.test(mensajeEnMinusculas)){
    
            mensaje.value = "";
    
            i = 0;
            respuesta.innerHTML = "";
            txt = "Que interesante.. yo en lo personal nunca tuve esa experiencia";
            typeWriter()


        }
        
        if (/que malo/.test(mensajeEnMinusculas) || (/que mala/.test(mensajeEnMinusculas)) || (/forr/.test(mensajeEnMinusculas)) || (/sos mal/.test(mensajeEnMinusculas)) || (/sos re mal/.test(mensajeEnMinusculas))){
    
            mensaje.value = "";

            i = 0;
            respuesta.innerHTML = "";
            txt = "Perdon, me perdonas :/";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("triste"); // SENTIMIENTO TRISTE


        } 

        if (/dijiste/.test(mensajeEnMinusculas)){
    
            mensaje.value = "";
    
            i = 0;
            respuesta.innerHTML = "";
            txt = "Digo muchas cosas que me las olvido apenas las digo, se llama Amnerobotsia";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("triste"); // SENTIMIENTO TRISTE


        }

        if (/responde/.test(mensajeEnMinusculas)){
    
            mensaje.value = "";
    
            i = 0;
            respuesta.innerHTML = "";
            txt = "Y si no quiero que..";
            typeWriter()

            sentimientos.classList.remove("feliz", "confundido", "coqueto", "triste", "enojado");
            sentimientos.classList.add("enojado"); // SENTIMIENTO ENOJADO


        }

        if (/porfa/.test(mensajeEnMinusculas)){
    
            mensaje.value = "";
    
            i = 0;
            respuesta.innerHTML = "";
            txt = "No porque lo pidas porfavor voy a responder";
            typeWriter()


        }
    }
}






