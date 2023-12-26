<main role="main" class="col-lg-7 px-md-2">
    <!-- title -->
    <div class="row mt-3">
        <div class="col">
            <h3>Menu Insert</h3>
        </div>
    </div>
    <!-- form -->
    <div class="row mt-2">
        <div class="col">
            <form id="menuInsert" action="2023_5pagib_cafe_fe/uploads" method="POST" enctype="multipart/form-data">
                <div class="form-group">
                    <label for="kode">Kode</label>
                    <input type="text" class="form-control" name="kode" id="kode" required/>
                </div>
                <div class="form-group">
                    <label for="nama">Nama</label>
                    <input type="text" class="form-control" name="nama" id="nama" required/>
                </div>
                <div class="form-group">
                    <label for="kode_kategori">Kode Kategori</label>
                    <input type="text" class="form-control" name="kode_kategori" id="kode_kategori" required/>
                </div>
                <div class="form-group">
                    <label for="gambar">Gambar</label>
                    <input type="file" class="form-control" name="gambar" id="gambar" accept="image/*" required/>
                </div>
                <div class="form-group">
                    <label for="harga">Harga</label>
                    <input type="number" class="form-control" name="harga" id="harga" required/>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                </div>
            </form>

            <!-- Tambahkan elemen untuk pesan kesalahan atau umpan balik -->
            <div id="formFeedback"></div>
        </div>
    </div>  
</main>
