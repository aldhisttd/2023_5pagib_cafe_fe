$(document).ready(function () {
    $('#menuInsert').submit(function (event) {
        event.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            type: 'POST',
            url: host + `obat_create.php`,
            data: formData,
            dataType: 'json',
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.status === 200) {
                    alert('Data berhasil ditambahkan');
                    // Reload halaman setelah data berhasil ditambahkan
                    location.reload();
                } else {
                    showError(response.msg);
                }
            },
            error: function (xhr) {
                console.error('Error:', xhr.responseText);
                showError('Terjadi kesalahan. Silakan cek konsol untuk informasi lebih lanjut.');
            },
        });
    });

    // Menampilkan pesan kesalahan
    function showError(message) {
        $('#errorContainer').text(message).show();
    }
});
