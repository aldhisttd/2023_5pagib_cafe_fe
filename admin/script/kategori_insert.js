const host =
    'http://localhost' +
    window.location.pathname.replace('kategori_insert.php', '');

$(document).ready(function () {
    $('#myForm').submit(function (event) {
        event.preventDefault();

        var formData = $('#myForm').serialize();

        $.ajax({
            type: 'POST',
            url: host + 'input_kategori.php',
            data: formData,
            success: function (response) {
                console.log(response);
                alert('Data berhasil ditambahkan');
            },
            error: function (error) {
                console.error(error);
            },
        });
    });
});