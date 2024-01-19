$(document).ready(function () {
    var pageSize = 6; // Jumlah kartu per halaman
    var currentIndex = 0;
    var cards = $(".card");

    function showCards(startIndex) {
        cards.hide();
        for (var i = startIndex; i < startIndex + pageSize && i < cards.length; i++) {
            cards.eq(i).show();
        }
    }

    function nextCardPage() {
        var nextPageIndex = currentIndex + pageSize;
        if (nextPageIndex < cards.length) {
            currentIndex = nextPageIndex;
            showCards(currentIndex);
        }
    }

    function prevCardPage() {
        var prevPageIndex = currentIndex - pageSize;
        if (prevPageIndex >= 0) {
            currentIndex = prevPageIndex;
            showCards(currentIndex);
        }
    }

    function readDataAndRenderCards(categoryFilter) {
        $("#dataMenu").empty();
        $.ajax({
            type: "GET",
            url: host + "menu_read.php", // Ganti dengan endpoint atau nama file yang benar
            dataType: "json",
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log("Data from server:", data);

                var menu = data.body.data; // Nama variabel sudah diperbaiki
                console.log("Menu data:", menu);

                // Clear existing cards
                $("#dataMenu").empty();

                for (var i = 0; i < menu.length; i++) {
                    var typeClass = menu[i].type ? menu[i].type.toLowerCase() : '';

                    // Check if a category filter is provided, and only show items matching the filter
                    if (!categoryFilter || menu[i].type === categoryFilter) {
                        $("#dataMenu").append(`
                            <div class="col-md-4 ${typeClass}">
                                <div class="card mb-4 shadow-sm">
                                    <img src="${host}${menu[i].gambar}" class="card-img-top" alt="" style="object-fit: cover; height: 170px" />
                                    <div class="card-body">
                                        <h5 class="card-title" style="font-family: 'Open Sans', sans-serif; text-align: center;">${menu[i].nama}</h5>
                                        <p class="card-text" style="font-size: 16px; color: #555;">Harga: Rp. ${menu[i].harga}</p>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <div class="btn-group">
                                                <a href="?page=detail&kode=${menu[i].kode}" class="btn btn-sm btn-dark">Detail</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `);
                    }
                }

                // Update cards and show the first page
                cards = $(".card");
                currentIndex = 0;
                showCards(currentIndex);
            },
            complete: function () {
                // Activate the next and previous buttons
                $("#nextBtn").on("click", function () {
                    nextCardPage();
                });

                $("#prevBtn").on("click", function () {
                    prevCardPage();
                });
            },
            error: function (error) {
                console.error("Error fetching data:", error);
            },
        });
    }

    // Call the readDataAndRenderCards function when the page is loaded
    readDataAndRenderCards();
});
