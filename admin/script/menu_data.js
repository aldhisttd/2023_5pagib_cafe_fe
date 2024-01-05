$(document).ready(function () {
    readData();
    // api read
    function readData() {
        $("#menuTable").empty();
        $.ajax({
            type: "GET",
            url: host + "menu_read.php",
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                var dataMenu = data.body.data;
                for (var i = 0; i < dataMenu.length; i++) {
                    $("#menuTable").append(
                        `
                    <tr>
                        <td>` + (i + 1) + `</td>
                        <td>` + dataMenu[i].kode + `</td>
                        <td>` + dataMenu[i].nama + `</td>
                        <td>` + dataMenu[i].kode_kategori + `</td>
                        <td>` + dataMenu[i].nama_kategori + `</td>
                        <td> <img src="` + host + dataMenu[i].gambar + `" width="100" /> </td>
                        <td>` + dataMenu[i].harga + `</td>
                        <td> 
                        <button id="hapus" class="btn btn-danger" value="` + dataMenu[i].kode + `">Hapus </button>
                        <button id="edit" class="btn btn-primary">
                            <a class="text-light" href="?page=menu_edit&kode=` + dataMenu[i].kode + `">Edit</a>
                        </button>
                        </td>
                    </tr>
                    `
                    );
                }
            },
        });
    }
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
                success: function (response) {
                    alert(response.msg);
                    readData();
                },
            });
        }
    });
});
