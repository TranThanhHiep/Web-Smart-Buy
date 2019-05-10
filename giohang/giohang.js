
var arrUser;

$(document).ready(function () {

    var giohang = window.localStorage.getItem("giohang");
    var giohangArr = [];

    if (giohang) {
        giohangArr = JSON.parse(giohang);
    }



    $.ajax({
        url: "https://www.jasonbase.com/things/7wql.json",
        type: "GET"
    }).done(function (objResponse) {

        arrUser = objResponse.arrayUser;
        applyView(objResponse.arrayUser, giohangArr)

    })


})

function applyView(arrayUser, giohangArr) {
    var tongcong = 0;

    $("#item-giohang").html("");
    $("#soluong-giohang").html("");
    $("#gia-giohang").html("");
    $("#name-giohang").html("");
    $("#tong-giohang").html("");
    $("#tongCong").html("");

    for (var i = 0; i < giohangArr.length; i++) {
        var product = giohangArr[i];

        for (var j = 0; j < arrayUser.length; j++) {
            var user = arrayUser[j];
            if (user.id.toString() == product.id) {
                var htmlString = `<div class="row product">
         <img class"col-lg-3 col-md-6 col-12 " src="${user.href}" alt="">
         <p class="col-lg-4 col-md-6 col-12 name-giohang">${user.name}</p>
         <p class="col-lg-2 col-md-6 col-12 gia-giohang">${user.price}
         <p class="col-lg-2 col-md-6 col-12 soluong-giohang">Số lượng:
          ${product.soluong}
         </p>
         <p class="col-1">
         <button onclick="tangSL(${i})">+</button> 
         <button onclick="giamSL(${i})">-</button>
         <button onclick="huyItem(${i})"><i class="fas fa-times"></i></button></p>
          </p>
         </div>`;
                $("#item-giohang").append(htmlString);
                var htmlTen = ` <p>${user.name}</p>`;
                var htmlGia = ` <p>${user.price}</p>`;
                var htmlSoluong = ` <p>${product.soluong}</p>`;

                $("#soluong-giohang").append(htmlSoluong);
                $("#gia-giohang").append(htmlGia);
                $("#name-giohang").append(htmlTen);
                var a = user.price.split(".");
                var b = "";
                b = a[0] + a[1] + a[2];
                var gia = parseInt(b);
                var tong = gia * product.soluong;
                var htmlTong = ` <p>${tong}</p>`;
                $("#tong-giohang").append(htmlTong);
                tongcong = tongcong + tong;
                
            }
        }
    } var htmltongCong = `<p class="tongCong"><b>${tongcong}</b></p>`;
        $("#tongCong").append(htmltongCong);
}

function tangSL(i) {
    var giohang = window.localStorage.getItem("giohang");
    var giohangArr = [];
    giohangArr = JSON.parse(giohang);
    giohangArr[i].soluong++;
    window.localStorage.setItem("giohang", JSON.stringify(giohangArr));
    applyView(arrUser, giohangArr);

}
function giamSL(i){
    var giohang = window.localStorage.getItem("giohang");
    var giohangArr = [];
    giohangArr = JSON.parse(giohang);
    giohangArr[i].soluong--;
    window.localStorage.setItem("giohang", JSON.stringify(giohangArr));
    applyView(arrUser, giohangArr);
    
}
function huyItem(i) {
    var giohang = window.localStorage.getItem("giohang");
    var giohangArr = [];
    giohangArr = JSON.parse(giohang);
    giohangArr.splice(i,1);
    window.localStorage.setItem("giohang", JSON.stringify(giohangArr));
    applyView(arrUser, giohangArr);
}
function huydonhang() {
    window.localStorage.clear("giohang");
    location.reload();
}
function xacnhandonhang() {
    alert("Bạn đã mua hàng thành công!");
}

