<?php


header('Access-Control-Allow-Origin, *');header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Allow-Max-Age: 1728000');
header('Content-Lenght: 0');
header('Content-Type: text/plain');
$con = mysqli_connect("localhost", "root", "", "ionic-php-crud") or die("could not connect D8");

