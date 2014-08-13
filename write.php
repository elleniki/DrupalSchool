<?php
$filename = 'test.txt';
$somecontent = $_POST['name'] . "\n" . $_POST['e-mail'] . "\n" . $_POST['message']. "\n";
if(is_writable($filename)){
  $all_notes = file_get_contents($filename);
  $fh2 = fopen($filename, 'w');
  $check = fwrite($fh2, $somecontent . "\n" . $all_notes);
  if ($check !== FALSE) {
    echo "Information was saved sucessfully";
  }
  else {
    echo "The file can't be saved";
  }
  fclose($fh2);
}
else {
  echo "The file isn't available";
}
?>