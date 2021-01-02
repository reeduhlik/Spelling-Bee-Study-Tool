//all of the words
var easyWords = ["resonate", "ravine", "hovel", "sentry", "rendition","enchantment", "servitude", "derelict", "charismatic", "prosthetic", "treatise", "avian", "indifference", "epithet", "petrify", "engineering", "alliance", "discreetly", "enumerate", "implacable", "opinionated", "javelin", "artillery", "stratagem", "austere", "venerable", "oracle", "antiquated", "tenaciously", "cavalcade", "burglarious", "scrumptious", "boulevard",];
var mediumWords = ["opinionated", "javelin", "artillery", "stratagem", "austere", "venerable", "oracle", "antiquated", "tenaciously", "cavalcade", "burglarious", "scrumptious", "boulevard",  "churlish", "mandrill", "ascetic", "gesticulation", "potential", "decrepitude", "promulgate", "recusant", "syncope", "crustacean", "eucalyptus", "remonstrance", "prestidigitation", "tetanus", "pertinacity", "cayenne", "patronymic", "phosphine", "nautilus", "pterodactyl", ];
var hardWords = ["prestidigitation", "tetanus", "pertinacity", "cayenne", "patronymic", "phosphine", "nautilus", "pterodactyl", "aspidistra", "toccata", "gendarme", "phrenologist", "reveille", "ague", "thaumaturge", "vulpine", "catastrophic", "quandary", "collision", "alpinist", "mahogany", "neutron", "perpetrator", "avalanche", "bedlam", "exquisite", "assailant", "inadvertent", "physicist", "aperture", "prodigious", "vagabond", "affectionately", "overweening", "vengeance", "gladiatorial", "semaphore", "inconceivable", "pilgrimage","nuisance", "enervate", "sanctum", "hypotenuse"];
var allWords = ["resonate", "ravine", "hovel", "sentry", "rendition","enchantment", "servitude", "derelict", "charismatic", "prosthetic", "treatise", "avian", "indifference", "epithet", "petrify", "engineering", "alliance", "discreetly", "enumerate", "implacable", "opinionated", "javelin", "artillery", "stratagem", "austere", "venerable", "oracle", "antiquated", "tenaciously", "cavalcade", "burglarious", "scrumptious", "boulevard",  "churlish", "mandrill", "ascetic", "gesticulation", "potential", "decrepitude", "promulgate", "recusant", "syncope", "crustacean", "eucalyptus", "remonstrance", "prestidigitation", "tetanus", "pertinacity", "cayenne", "patronymic", "phosphine", "nautilus", "pterodactyl", "aspidistra", "toccata", "gendarme", "phrenologist", "reveille", "ague", "thaumaturge", "vulpine", "catastrophic", "quandary", "collision", "alpinist", "mahogany", "neutron", "perpetrator", "avalanche", "bedlam", "exquisite", "assailant", "inadvertent", "physicist", "aperture", "prodigious", "vagabond", "affectionately", "overweening", "vengeance", "gladiatorial", "semaphore", "inconceivable", "pilgrimage","nuisance", "enervate", "sanctum", "hypotenuse"];
var mode = mediumWords;
    var secondsRemaining = 21;

$("#easy").on("click", function() {
    mode = easyWords;
    pickedWord = pickWord(mode);
    $(this).css("background", "#00FF00");
    $("#medium").css("background", "#d3d3d3");
    $("#hard").css("background", "#d3d3d3");
    $("#all").css("background", "#d3d3d3");
             var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
          sound.play();
    secondsRemaining = 21;
    return pickedWord;
});
$("#medium").on("click", function() {
    mode = mediumWords;
     pickedWord = pickWord(mode);
    $(this).css("background", "#00FF00");
        $("#easy").css("background", "#d3d3d3");
    $("#hard").css("background", "#d3d3d3");
    $("#all").css("background", "#d3d3d3");
          var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
          sound.play();
          secondsRemaining = 21;
    return pickedWord;
});
$("#hard").on("click", function() {
    mode = hardWords;
    pickedWord = pickWord(mode);
    $(this).css("background", "#00FF00");
        $("#medium").css("background", "#d3d3d3");
    $("#easy").css("background", "#d3d3d3");
    $("#all").css("background", "#d3d3d3");
             var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
          sound.play();
    secondsRemaining = 21;
    return pickedWord;
});
$("#all").on("click", function() {
    mode = allWords;
    pickedWord = pickWord(mode);
    $(this).css("background", "#00FF00");
        $("#medium").css("background", "#d3d3d3");
    $("#hard").css("background", "#d3d3d3");
    $("#easy").css("background", "#d3d3d3");
             var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
          sound.play();
    secondsRemaining = 21;
    return pickedWord;
});
//pick a word
var pickedWord = pickWord(mode);
var attemptedWords = 0;
var correctWords = 0;
function   pickWord(mode) {
            var random = Math.floor(Math.random() * mode.length);

            return mode[random];
  
}
    
         var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
          sound.play();
    secondsRemaining = 21;


$("input[type = 'text']").keypress(function(event){

    
    if(event.which === 13) {
            $("#next").fadeIn(700);
        $("h5").fadeOut(0);
        var word = $(this).val();
        $("#direction1").fadeOut(700);
        $("#direction2").fadeOut(700);
        if(word === pickedWord) {
            $("p").first().html("You correctly spelled the word <br><span> " + word + "</span>");
            $("p").css("color", "limegreen");
            $("p").fadeIn(1000);

            

            attemptedWords++;
            correctWords++;
            var percentage = Math.floor(correctWords/attemptedWords * 100);
            $("h3").first().text("Your percentage is "+  percentage + "% (" + correctWords + "/" + attemptedWords + ")");
        } else {
                        $("p").css("color", "red");

            $("p").first().html("Incorrect!  The word is spelled <br> <span>" + pickedWord + "</span>");
                        $("p").fadeIn(1000);
            attemptedWords++;
             var percentage = Math.floor(correctWords/attemptedWords * 100);
             $("h3").first().text("Your percentage is "+  percentage + "% (" + correctWords + "/" + attemptedWords + ")");
        }
    }
});


$("#next").on("click", function() {
        $("input").val("");
        console.log(pickedWord);
    pickedWord = pickWord(mode);
            var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
          sound.play();
    secondsRemaining = 21;
    console.log(pickedWord);
    $("p").fadeOut( 0);
    $("#next").fadeOut(0);
    $("h3").css("paddingRight", "150px");
                $("h5").css("fontSize", "30px");
    $("h5").css("color", "white");
    
    secondsRemaining = 21;
        var wait = setTimeout($("h5").fadeIn(1500), 1000);
    resetTimer();
            
});


$("#audio").on("click", function() {

  //play sound of word
    var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		})
    sound.play();


})
 
if(correctWords = attemptedWords){
    $("h6").css("display", "block");
} else{
$("h6").css("display", "none");
}
     var resetTimer = setInterval(function(){ 
           //if(secondsRemaining > 0) {
    secondsRemaining--; 
          // }
    if(secondsRemaining > 9) {
    $("h5").html("Time Remaining: 0:" + secondsRemaining);
    } else if(secondsRemaining === 0 ) {
          $("h5").html("TIME UP!!!");
        $("h5").css("color", "#ff0000")
    }
     if(secondsRemaining < 0) {
                pickedWord = pickWord(mode);
                var sound =  new Howl({
  		src: ['audio/' + pickedWord + '_gb_1.mp3']
		});
        sound.play();
        secondsRemaining = 21;
                         $("h5").css("fontSize", "30px");
    $("h5").css("color", "white");
     }
         if(secondsRemaining < 10 && secondsRemaining > 0) {
             $("h5").html("Time Remaining: 0:0" + secondsRemaining);
             
         }
 }, 1000);


                               