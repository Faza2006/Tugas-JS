<?php

require_once "connector.php";

$data = stripslashes(file_get_contents("php://input"));
$dataOrder = json_decode($data,true);


$idorder = $dataOrder['idorder'];
$idbarang = $dataOrder['idbarang'];
$jumlah = 1;
$harga = $dataOrder['harga'];
$barang = $dataOrder['barang'];
$idpelanggan = $dataOrder['idpelanggan'];
$pelanggan = $dataOrder['pelanggan'];
$alamat = $dataOrder['alamat'];

$sql = "INSERT INTO tblorderdetail VALUES (NULL,$idorder,$idbarang,$jumlah,$harga,'$barang',$idpelanggan,'$pelanggan','$alamat')";
// $result = mysqli_query($con, $sql);

if ($result = mysqli_query($con ,$sql)) {
    echo "Success";
}else {
    echo "Failed";
}