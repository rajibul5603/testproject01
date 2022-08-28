<?php

$data = $_POST['data'];

$doc = new DOMDocument();
$doc->loadHTML($data);
$liList = $doc->getElementsByTagName('li');
$liValues = array();

  $liValues[] ='<select name="office_name" id="office_name">';
foreach ($liList as $li) {
    $liValues[] = $li->nodeValue;
    $liValues[] = "<option value='".""."'>".$li->nodeValue."<li>";    
}
 
echo json_encode($liValues);



?>