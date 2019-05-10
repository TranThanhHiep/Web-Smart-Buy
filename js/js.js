function Search() {
    var value = $('#input_search').val();
    console.log(value)
    var htmlSearch = `../../theloai/theloai.html?type=` + value;
    $("#output_search").prop("action", htmlSearch);
}
function chon() {
    var chon = document.getElementById("chinhanh").value;
    if (chon == "1") {
        document.getElementById("output").innerHTML = " <ul style='list-style:none;padding:0;color:white'><li>117 Thái Hà, P. Trung Liệt, Q. Đống Đa</li><li>21A Hàng Bài, P. Hàng Bài, Q. Hoàn Kiếm</li><li>283 Hồ Tùng Mậu, P. Cầu Diễn, Q. Nam Từ Liêm</li></ul>";
    }
    else if (chon == "2") {
        document.getElementById("output").innerHTML = "<ul style='list-style:none;padding:0;color:white'><li>177 Khánh Hội, P. 3, Q. 4</li><li>125 Lê Văn Việt, P. Hiệp Phú, Q. 9</li><li>288 Đường 3/2, P. 12, Q. 10</li></ul>";
    }
    else
        document.getElementById("output").innerHTML = "<ul style='list-style:none;padding:0;color:white'><li>314 Đường Nguyễn Trãi, P. 12, TP. Buôn Ma Thuột</li></ul>";

}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function readmore() {
    var x = document.getElementById("info-readmore");
    var y = document.getElementById("btn");
    if (x.style.display == "none") {
        x.style.display = "block";
        y.innerHTML = "Less";
    } else {
        x.style.display = "none";
        y.innerHTML = "More";
    }
}
// function cart(){
//     var x= document.getElementById("check");
//     x.innerHTML=`<div style="background-color:green;color:white"
//      class="button-tragop">
//     <p class="thongso"><b >ĐÃ THÊM</b></p>
//     <i class="fas fa-check-circle"></div>`;
// }

