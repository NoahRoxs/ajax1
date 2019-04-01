<?php
$voornaam        = $_GET['voornaam'];
$achternaam      = $_GET['achternaam'];
$leeftijd        = $_GET['leeftijd'];
$email           = $_GET['email'];

echo "<h3>Response Demo Form</h3>";
echo "You submitted the following information<br><ul>";
echo "<li>Voornaam: <strong>    $voornaam </strong></li>";
echo "<li>Achternaam: <strong>  $achternaam </strong>";
echo "<li>Leeftijd: <strong>    $leeftijd </strong> </li>";
echo "<li>Email: <strong>      $email </strong> </li>";
echo "</li></ul></h4>";
?>
