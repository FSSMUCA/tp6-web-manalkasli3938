<?php
$etablissement = "Université XYZ";
$module = "Développement Web";
$annee = 2024;


$a = 12;
$b = 8;

$addition = $a + $b;
$multiplication = $a * $b;
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Informations PHP</title>
</head>
<body>
    <h1>Informations Générales</h1>

    <p><strong>Établissement :</strong> <?php echo $etablissement; ?></p>
    <p><strong>Module :</strong> <?php echo $module; ?></p>
    <p><strong>Année :</strong> <?php echo $annee; ?></p>

    <h2>Exemples de Variables Numériques</h2>
    <p>A = <?php echo $a; ?></p>
    <p>B = <?php echo $b; ?></p>

    <h2>Résultats des Opérations</h2>
    <p><?php echo "$a + $b = $addition"; ?></p>
    <p><?php echo "$a × $b = $multiplication"; ?></p>

    <a href="index.html">Retour à la calculatrice</a>
</body>
</html>
