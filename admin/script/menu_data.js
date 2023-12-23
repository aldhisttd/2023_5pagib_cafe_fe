$(document).ready(function () {
    // Fungsi untuk memuat data menu
    function loadMenuData() {
        $.ajax({
            type: "GET",
            url: "http://localhost/2023_5pagib_cafe_fe/dummy/menu_read.php",
            dataType: "json",
            success: function (response) {
                var dataMenu = response.body.data;

                // Hapus data yang ada
                $("#dataMenu").empty();

                // Muat ulang data menu setelah penghapusan berhasil
                for (var i = 0; i < dataMenu.length; i++) {
                    $("#dataMenu").append(
                        `
                        <tr>
                            <td>` +
                        (i + 1) +
                        `</td>
                            <td>` +
                        dataMenu[i].kode +
                        `</td>
                            <td>
                            <img src="../assets/img/` +
                        dataMenu[i].gambar +
                        `" width="100" />
                            </td>
                            <td>` +
                        dataMenu[i].nama_menu +
                        `</td>
                            <td>` +
                        dataMenu[i].harga +
                        `</td>
                            <td>
                            <button class="btn btn-danger delete-btn" data-kode="` +
                        dataMenu[i].kode +
                        `">Hapus</button>
                            <button class="btn btn-primary edit-btn">
                                <a class="text-light" href="../obat_edit/menu_edit.php?kode=` +
                        dataMenu[i].kode +
                        `">Edit</a>
                                </button>
                            </td>
                        </tr>
                        `
                    );
                }

                // Reset berhasil, berikan alert tambahan
                alert("Data berhasil diambil");
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
                    url: "http://localhost/2023_5pagib_cafe_fe/dummy/menu_delete.php",
                    data: { kode: kode },
                    dataType: "json",
                    success: function (response) {
                        alert(response.msg);
                    },
                    error: function (xhr, status, error) {
                        console.error("AJAX Error: " + status, error);
                    }
                });
            }
        });
    }

    // Panggil fungsi loadMenuData saat memuat halaman
    loadMenuData();

    // Panggil fungsi handleDeleteButtonClick untuk menangani klik tombol hapus
    handleDeleteButtonClick();
});
