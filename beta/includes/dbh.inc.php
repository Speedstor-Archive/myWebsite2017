<?php

$servername = "localhost";
$dBUsername = "debian-sys-maint";
$dBPassword = "waKFgLEGLbyDR10x";
$dBName = "loginSystem";


$conn = mysqli_connect($servername, $dBUsername, $dBPassword, $dBName);

if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}