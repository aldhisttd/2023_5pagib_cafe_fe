$(document).ready(function () {
    var getUrlParameter = function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i = 0; i < sURLVariables.length; i++) {
            sParameterName = sURLVariables[i].split("=");

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
            }
        }
        return false;
    };

    var kode = getUrlParameter("kode");

    // menampilkan detail menu
    $.ajax({
        type: "GET",
        url: host + "menu_read_one.php?kode=" + kode,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            var data = response.body.data;

            // Display details using a list
            $('#detail-menu').append(`
                <div class="py-5 text-center">
                    <h2>Detail</h2>
                </div>

                <div class="row">
                    <div class="col-md-4 order-md-2 mb-4">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Produk Detail</span>
                        </h4>
                        <ul class="list-group mb-3">
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Nama Menu</h6>
                                    <small class="text-muted" id="nama"> `+data.nama+`</small>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Harga</h6>
                                    <small class="text-muted" id="harga"> Rp. `+data.harga+`</small>
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 class="my-0">Kategori</h6>
                                    <small class="text-muted" id='Kode_kategori'>`+data.nama_kategori+`</small>
                                </div>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-primary btn-lg btn-block">Masukkan Ke Keranjang</button>
                    </div>
                    <div class="col">
                        <img src="`+ host +data.gambar+`" width="450px" height="450px"alt="">
                        <form class="needs-validation" novalidate="">
                            <div class="row">
                                <div class="col">
                                    <label for="exampleFormControlTextarea1"></label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Deskripsi"></textarea>
                                    <br>
                                    <div class="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary btn-lg btn-block">Belanja Sekarang</button>
                        </form>
                    </div>
                </div>
            `);
        },
    });
});
