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
            <form id="menuInsert">
                <div class="form-group">
                    <label for="kode">Kode</label>
                    <input type="text" class="form-control" name="kode" id="kode"  />
                </div>
                <div class="form-group">
                    <label for="nama">Nama</label>
                    <input type="text" class="form-control" name="nama" id="nama" />
                </div>
                <div class="form-group">
                    <label for="gambar">Kode Kategori</label>
                    <select class="form-control" id="kode_kategori" name="kode_kategori">
                    </select>
                </div>
                <div class="form-group">
                    <label for="gambar">Gambar</label>
                    <input type="file" class="form-control" name="gambar" id="gambar" accept="image/*" />
                </div>
                <div class="form-group">
                    <label for="harga">Harga</label>
                    <input type="number" class="form-control" name="harga" id="harga" />
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </div>  
</main>
