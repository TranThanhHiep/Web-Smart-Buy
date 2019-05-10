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

            var htmlString = `<div class="item col-lg-3 col-md-4 col-sm-6 col-xs-12">
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


            if (user.type.toString() == paramsObj.type) {
                var type = "";
                if (user.type =="dienthoai") {
                    type = "ĐIỆN THOẠI";
                }
                if (user.type =="laptop") {
                    type = "LAPTOP";
                }
                if (user.type =="tivi") {
                    type = "TIVI";
                }
                if (user.type =="mayanh") {
                    type = "MÁY ẢNH";
                }
                if (user.type =="phukien") {
                    type = "PHỤ KIỆN";
                }
                if (user.type =="diengiadung") {
                    type = "ĐIỆN GIA DỤNG";
                }

                $("#theloai-item").append(htmlString);
            }

        }

        var headerString = `<a href="../theloai/theloai.html?type=${paramsObj.type}"> 
        <h2>${type}</h2></a> 
        <h4>Tất cả các mặt hàng </h4>  
        <div class="clear-float"></div>`
        $("#header-infor").append(headerString);
        $("#href-type").append(type);
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