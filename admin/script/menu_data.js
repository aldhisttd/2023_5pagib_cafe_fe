$(document).ready(function () {
    // api read
    $.ajax({
        type: "GET",
        url: host + "menu_read.php",
        dataType: "json",
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            console.log(data);
            var dataMenu = data.body.data;
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
                        <button id="hapus" class="btn btn-danger" value="` +
                        dataMenu[i].kode +
                        `">Hapus
                        </button>
                        <button id="edit" class="btn btn-primary">
                            <a class="text-light" href="../obat_edit/menu_edit.php?kode=` +
                        dataMenu[i].kode +
                        `">Edit</a>
                            </button>
                        </td>
                    </tr>
                    `
                );
            }
        },
    });

    // api hapus
    $(document).on("click", "#hapus", function () {
        var kode = $(this).val();

        if (confirm("Yakin ingin hapus data dengan kode=" + kode + "?")) {
            $.ajax({
                type: "POST",
                url: host + "menu_delete.php",
                data: { kode: kode },
                dataType: "json",
                async: true,
                cache: false,
                contentType: false,
                processData: false,
                success: function (response) {
                    alert(response.msg);
                },
            });
        }
    });
});