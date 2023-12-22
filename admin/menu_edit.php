<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Menu Edit</h1>
</div>

<div class="row">
    <div class="col">
        <div class="conten">
            <div class=" ml-sm-3 px-md-4 mb-5">
                <form id="editForm" action="" method="POST" enctype="multipart/form-data">
                    <div class="form-group text-dark">
                        <label for="kode" class="control-label">Kode</label>
                        <input type="text" class="form-control form-control-sm" id="kode" name="kode" required>
                    </div>
                    <div class="form-group">
                        <label for="kategori">Kategori</label>
                        <select class="form-control" id="kategori" name="kategori">
                            <option value="1">Mie</option>
                            <option value="2">Nasi</option>
                            <option value="3">Desert</option>
                            <option value="4">Minuman</option>
                        </select>
                    </div>
                    <label for="" class="control-label">Upload Gambar</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" id="customFile" name="gambar">
                        <label class="custom-file-label" for="customFile">Choose file</label>
                    </div>
                    <br>
                    <br>
                    <div class="form-group  text-dark">
                        <label for="nama" class="control-label">Nama Menu</label>
                        <input type="text" class="form-control form-control-sm" id="nama" name="nama">
                    </div>
                    <div class="form-group  text-dark">
                        <label for="harga" class="control-label">Harga</label>
                        <input type="text" class="form-control form-control-sm" id="harga" name="harga">
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-right">
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>