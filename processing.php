<?php

$data = $_POST['data'];

// $htmlContents = file_get_contents("ministry.html");
// $htmlContents = str_replace("div", $data, $htmlContents);
// echo $htmlContents



$doc = new DOMDocument();
$dataHtml = $doc->loadHTML($data);
$liList = $dataHtml->getElementsByTagName('li');
$liValues = array();

$liValues[] ='<select name="office_name" id="office_name">';
foreach ($liList as $li) {
    $liValues[] = $li->nodeValue;
    $liValues[] = "<option value='".""."'>".$li->nodeValue."<li>";    
}

$htmlContents = file_get_contents("ministry.html");
$htmlContents = str_replace("div", $liValues, $htmlContents);
echo $htmlContents

 



?>