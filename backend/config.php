<?php

header('Acess-Control-Allow-Origin: *');
header('Acess-Control-Allow-Methods: POST, GET, DELETE, PUT, OPTIONS');
header('Acess-Control-Allow-Headers: token, Content-Type');
header('Acess-Control-Allow-Max-Age: 1728000');
header('Content-Lenght: 0');
header('Content-Type: text/plain');
$con = mysqli_connect("localhost", "root", "", "ionic-php-crud") or die("could not connect D8");
