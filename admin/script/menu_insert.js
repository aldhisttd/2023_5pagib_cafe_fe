$(document).ready(function () { 
    populasiKategori();
    function populasiKategori() {

    $.ajax({
        type: "GET",
        url: host + "kategori_read.php", 
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (data) {
            var categories = data.body.data;
            var select = $("#kode_kategori");
            // Kosongkan opsi pemilihan sebelum mengisi kembali
            select.empty();
            // Tambahkan opsi pemilihan untuk setiap kategori
            for (var i = 0; i < categories.length; i++) {
                select.append(`<option value="${categories[i].kode}">${categories[i].nama}</option>`);

            }
        },
    });
}
$('#menuInsert').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host + "menu_create.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
            location.href = host_fe + "admin/?page=menu_data";
        },
    });
  })
});