
<?php
//this file was used to download all of the audio files
if(isset($_POST['submit'])){
    $number = $_POST["number"];
    download($number);
}

function download($x){
$allWords = ["resonate", "ravine", "hovel", "sentry", "rendition","enchantment", "servitude", "derelict", "charismatic", "prosthetic", "treatise", "avian", "indifference", "epithet", "petrify", "engineering", "alliance", "discreetly", "enumerate", "implacable", "opinionated", "javelin", "artillery", "stratagem", "austere", "venerable", "oracle", "antiquated", "tenaciously", "cavalcade", "burglarious", "scrumptious", "boulevard",  "churlish", "mandrill", "ascetic", "gesticulation", "potential", "decrepitude", "promulgate", "recusant", "syncope", "crustacean", "eucalyptus", "remonstrance", "prestidigitation", "tetanus", "pertinacity", "cayenne", "patronymic", "phosphine", "nautilus", "pterodactyl", "aspidistra", "toccata", "gendarme", "phrenologist", "reveille", "ague", "thaumaturge", "vulpine", "catastrophic", "quandary", "collision", "alpinist", "mahogany", "neutron", "perpetrator", "avalanche", "bedlam", "exquisite", "assailant", "inadvertent", "physicist", "aperture", "prodigious", "vagabond", "affectionately", "overweening", "vengeance", "gladiatorial", "semaphore", "inconceivable", "pilgrimage","nuisance", "enervate", "sanctum", "hypotenuse"];
$url = "http://audio.oxforddictionaries.com/en/mp3/" . $allWords[$x] . "_gb_1.mp3";
header("Location: " . $url);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script
  src="http://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
</head>
<body>
   <form action="download.php" method="post">
           <input type="text" name="number" id="number">
    <input type="submit" name="submit" id="submit">
   </form>
    <script>
    </script>
</body>
</html>