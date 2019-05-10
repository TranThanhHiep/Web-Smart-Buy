$(document).ready(function () {
    var url = window.location.href;
    var arrString = url.split("?");

    var parametersString = arrString[1];
    var paramsObj = getParamsObjFromString(parametersString);
    $.ajax({
        url: "https://www.jasonbase.com/things/7wql.json",
        type: "GET"
    }).done(function (objResponse) {

        var arrayUser = objResponse.arrayUser;

        for (var i = 0; i < arrayUser.length; i++) {
            var user = arrayUser[i];

            var htmlString = `<div class="item col-lg-3 col-md-4 col-sm-6">
            <a href="../detail/detail.html?id=${user.id}">
           <div> <img src="${user.href}">
           <h5 class="name">${user.name}</h5>
           <p class="gia">${user.price}</p>
           <div class="info-hidden">
               <h5 class="name">${user.name}</h5>
               <p class="gia">${user.price}</p>
               <p class="thongso"> <b>Thông số kĩ thuật</b></p>
               <p class="thongso">${user.detail1}</p>
               <p class="thongso">${user.detail2}</p>
               <p class="thongso">${user.detail3}</p> </div>
           </div></a> </div>`;
            var hmtlInfo = `<h4>${user.title1}</h4>
           <p>${user.info1}</p>
           <img src="${user.img1}">
           `;
            var hmtlInfo2 = `
           <h4>${user.title2}</h4>
           <p>${user.info2}</p>
           <img src="${user.img2}">
           <h4>${user.title3}</h4>
           <p>${user.info3}</p>
           <img src="${user.img3}">
           <h4>${user.title4}</h4>
           <p>${user.info4}</p>
           <img src="${user.img4}">
           <h4>${user.title5}</h4>
           <p>${user.info5}</p>
           <img src="${user.img5}">
           `;


            if (user.type.toString() == paramsObj.type & user.brand.toString() == paramsObj.brand) {

                $("#brand-item").append(htmlString);
                var type = "";

                if (user.type == "dienthoai") {
                    type = "ĐIỆN THOẠI";
                }
                if (user.type == "laptop") {
                    type = "LAPTOP";
                }
                if (user.type == "tivi") {
                    type = "TIVI";
                }
                if (user.type == "mayanh") {
                    type = "MÁY ẢNH";
                }
                if (user.type == "phukien") {
                    type = "PHỤ KIỆN";
                }
                if (user.type == "diengiadung") {
                    type = "ĐIỆN GIA DỤNG";
                }
                var brand = user.brand;
                if (user.brand == "tainghe") {
                    brand = "tai nghe";
                }
                if (user.brand == "pinduphong") {
                    brand = "pin dự phòng";
                }
                if (user.brand == "noicomdien") {
                    brand = "nồi cơm điện";
                }
                if (user.brand == "lovisong") {
                    brand = "lò vi sóng";
                }
                if (user.brand == "mayxaysinhto") {
                    brand = "máy xay sinh tố";
                }

                $("#info-item").html(hmtlInfo);
                $("#info-readmore").html(hmtlInfo2);


            }

        } $("#href-type").append(type);
        $("#href-brand").append(brand);

    })
    function getParamsObjFromString(paramsString) {
        var arrStr = paramsString.split("&");
        var obj = {};

        for (var i = 0; i < arrStr.length; i++) {
            var str = arrStr[i];
            var arr = str.split("=");
            obj[arr[0]] = arr[1];
        }
        return obj;
    }

})