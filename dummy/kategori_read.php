<?php
$res = [
    "status" => 200,
    "msg" => "Data berhasil diambil",
    "body" => [
        "data" => [
            [
                "kode" => "1",
                "nama_kategori" => "Makanan",
            ],
            [
                "kode" => "2",
                "nama_kategori" => "Minuman",
            ],
        ]
    ]
];

echo json_encode($res);
?>
