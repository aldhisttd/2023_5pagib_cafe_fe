$(document).ready(function () {
    // Fungsi untuk memuat data kategori
    function loadKategoriData() {
        $.ajax({
            type: "GET",
            url: "http://localhost/2023_5pagib_cafe_fe/dummy/kategori_read.php",
            dataType: "json",
            success: function (response) {
                var dataKategori = response.body.data;

                // Hapus data yang ada
                $("#dataKategori").empty();

                // Muat ulang data kategori setelah penghapusan berhasil
                for (var i = 0; i < dataKategori.length; i++) {
                    $("#dataKategori").append(
                        `
                        <tr>
                            <td>` +
                        (i + 1) +
                        `</td>
                            <td>` +
                        dataKategori[i].kode +
                        `</td>
                            <td>` +
                        dataKategori[i].nama_kategori +
                        `</td>
                            <td>
                                <button class="btn btn-danger delete-btn" data-kode="` +
                        dataKategori[i].kode +
                        `">Hapus</button>
                                <button class="btn btn-primary edit-btn">
                                    <a class="text-light" href="../obat_edit/kategori_edit.php?kode=` +
                        dataKategori[i].kode +
                        `">Edit</a>
                                </button>
                            </td>
                        </tr>
                        `
                    );
                }

                // Reset berhasil, berikan alert tambahan
                alert("Data kategori berhasil diambil");
            },
            error: function (xhr, status, error) {
                console.error("AJAX Error: " + status, error);
            }
        });
    }

    // Fungsi untuk menangani klik tombol hapus
    function handleDeleteButtonClick() {
        $(document).on("click", ".delete-btn", function () {
            var kode = $(this).data("kode");

            if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
                $.ajax({
                    type: "POST",
                    url: "http://localhost/2023_5pagib_cafe_fe/dummy/kategori_delete.php",
                    data: { kode: kode },
                    dataType: "json",
                    success: function (response) {
                        alert(response.msg);
                        if (response.status === 200) {
                            // Muat ulang data kategori setelah penghapusan berhasil
                            loadKategoriData();
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error("AJAX Error: " + status, error);
                    }
                });
            }
        });
    }

    // Panggil fungsi loadKategoriData saat memuat halaman
    loadKategoriData();

    // Panggil fungsi handleDeleteButtonClick untuk menangani klik tombol hapus
    handleDeleteButtonClick();
});
