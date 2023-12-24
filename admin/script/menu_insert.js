$(document).ready(function () {
    $('#menuInsert').submit(function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: "http://localhost/2023_5pagib_cafe_fe/dummy/menu_insert.php",
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {
                console.log(response);
                alert('Data berhasil ditambahkan');
            },
            error: function (error) {
                console.error('Error:', error.responseText);
                alert('Terjadi kesalahan. Silakan cek konsol untuk informasi lebih lanjut.');
            },
        });
    });
});
