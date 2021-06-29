// DESAFIO DOM:
    //Frases aleatorias de bienvenida, que se podra visualizar en nuestro HTML

    //Declaro la variable con array
    const frasesAleatorias=new Array()

    //1° frase
    frasesAleatorias[0] = "¡ Hola astronauta, bienvenid@ !";
    //2° frase
    frasesAleatorias[1] = "TIP: Haz tu propia estrategia ;)";
    //3° frase
    frasesAleatorias[2] = "¿ Listo para la proxima aventura ?";
    //4° frase
    frasesAleatorias[3] = "¡ Suerte ! La vas a necesitar!";
    //5° frase
    frasesAleatorias[4] = "¡ Demuestra tu destreza en la galaxia !";

    //longitud de las frases aleatorias
    var frasesLongitud = frasesAleatorias.length;

    //-------------------------
    function mostrarFrases() {
    const numAleatorio=Math.round(Math.random()*(frasesLongitud-1));

        //que aparezcan las frases aleatorias de bienvenida en:
    document.getElementById("home__frases").innerHTML=frasesAleatorias[numAleatorio];
    }

