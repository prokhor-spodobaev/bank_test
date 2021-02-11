<?php 

//recieved values
$date = date_create($_POST['date']);
$deposit_sum = $_POST['deposit_sum'];
$years = $_POST['years'];
$isadd = $_POST['isadd'];
$replenishment_sum = $_POST['replenishment_sum'];

//calculations

$sumadd = $replenishment_sum * $isadd;

$sumn = 0;
$sump = $deposit_sum;
$current_date = $date;
$percent = 0.1;


for ($month = 1; $month <= 12 * $years ; $month++) { 
    $daysn = $current_date->format('t');  // days in month
    $daysy = 365 + $current_date->format('L');  // days in year
    $sumn = $sump + ($sump + $sumadd) * $daysn * ($percent / $daysy);  // sum for current month
    $sump = $sumn;  // updating sum for previous month
    $current_date->add(new DateInterval('P'.$month.'M'));  // adding one month
}

$result = round($sump);

//output
echo $result;

?>