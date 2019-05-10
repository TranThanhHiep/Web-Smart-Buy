var arrayUser;
$(document).ready(function () {
    var url = window.location.href;
    var arrString = url.split("?");

    var parametersString = arrString[1];

    var paramsObj = getParamsObjFromString(parametersString);

    $.ajax({
        url: "https://www.jasonbase.com/things/7wql.json",
        type: "GET"
    }).done(function (objResponse) {

        arrayUser = objResponse.arrayUser;

        for (var i = 0; i < arrayUser.length; i++) {
            var user = arrayUser[i];
            var htmlImg = `<img src="${user.href}">`;
            var htmlString = `<h6> <b>Thông số kĩ thuật</b></h6>
                <p> ${user.detail1}</p>
                <p> ${user.detail2}</p>
                <span> ${user.detail3}</span>
                <h6><b> Đặc điểm nổi bật </b></h6>
                <p>${user.detail4}</p>
                <p>${user.detail5}</p>
                <span>${user.detail6}</span>`;
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

            var htmlPrice = `${user.price}`;
            var htmlStar = `<h2><b>${user.name}</b></h2>`;
            if (user.id.toString() == paramsObj.id) {
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

                $("#detail-item").html(htmlString);
                $("#detail-img").html(htmlImg);
                $("#info-item").html(hmtlInfo);
                $("#info-readmore").html(hmtlInfo2);
                $("#item-star").html(htmlStar);
                $("#gia-item").html(htmlPrice);
                $("#href-type").append(type);
                $("#href-brand").append(brand);
                $("#href-name").append(user.name);
                break;
            }

        }
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