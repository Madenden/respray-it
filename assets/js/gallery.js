$(document).ready(function () {
    let folderPath = 'assets/images/gallery_page/furniture/';
    $.ajax({
        url: folderPath,
        success: function () {
            alert('aa')
        },
        error: function(e) {
            console.log(e + " error");
        }
    });
});