<?php
$res = [
    "status" => 200,
    "msg" => "Data berhasil dihapus",
    "body" => [
        "data" => [
            [
                "kode" => "01",
            ],
            [
                "kode" => "02",
            ],
        ]
    ]
];

echo json_encode($res);
?>
