<?php
$res = [
    "status" => 200,
    "msg" => "Data berhasil diambil",
    "body" => [
        "data" => [
            [
                "kode" => "01",
                "gambar" => "soto.jpg",
                "nama_menu" => "Soto Lamongan",
                "harga" => 10.999
            ],
            [
                "kode" => "02",
                "gambar" => "nasigorg.jpg",
                "nama_menu" => "Nasi Goreng",
                "harga" => 15.999
            ],
        ]
    ]
];

echo json_encode($res);
?>
