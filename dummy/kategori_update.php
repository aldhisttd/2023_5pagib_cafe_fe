<?php
$res = [
    "status" => 200,
    "msg" => "Data berhasil diperbarui",
    "body" => [
        "data" => [
            [
                "kode" => "1",
                "nama_kategori" => "Makanan",
            ],
        ]
    ]
];

echo json_encode($res);
?>
