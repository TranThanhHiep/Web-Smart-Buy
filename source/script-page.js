$(document).ready(function () {
 var urlString = "https://raw.githubusercontent.com/TranThanhHiep/dbjson/master/db.json"

    $.ajax({
        url: urlString,
        type: "GET",
    }).done(function (objResponse) {

        var arrayUser = objResponse.arrayUser;
      for (var i = 0; i < arrayUser.length; i++) {
            var user = arrayUser[i];
            var htmlString = `<div class="item col-lg-3 col-md-4 col-sm-6">
            <a href="../detail/detail.html?id=${user.id}">
               <div > <img src="${user.href}">
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
            if (user.type=="dienthoai" & user.brand == "iphone") {
                $("#dt-iphone").append(htmlString);
            }
            else if (user.type=="dienthoai" & user.brand == "samsung") {
                $("#dt-samsung").append(htmlString);
            }
            else if (user.type=="dienthoai" & user.brand == "sony") {
                $("#dt-sony").append(htmlString);
            }
            else if (user.type=="laptop" & user.brand == "asus"){
                $("#laptop-asus").append(htmlString);
            }
            else if (user.type=="laptop" & user.brand == "dell"){
                $("#laptop-dell").append(htmlString);
            }

            else if (user.type=="laptop" & user.brand == "hp"){
                $("#laptop-hp").append(htmlString);
            }
            else if (user.type=="tivi" & user.brand == "sony"){
                $("#tivi-sony").append(htmlString);
            }
            else if (user.type=="tivi" & user.brand == "lg"){
                $("#tivi-lg").append(htmlString);
            }
            else if (user.type=="tivi" & user.brand == "samsung"){
                $("#tivi-samsung").append(htmlString);
            }
            else if (user.type=="mayanh" & user.brand == "canon"){
                $("#mayanh-canon").append(htmlString);
            }
            else if (user.type=="mayanh" & user.brand == "nikon"){
                $("#mayanh-nikon").append(htmlString);
            }
            else if (user.type=="mayanh" & user.brand == "sony"){
                $("#mayanh-sony").append(htmlString);
            }
            else if (user.type=="phukien" & user.brand == "tainghe"){
                $("#phukien-tainghe").append(htmlString);
            }
            else if (user.type=="phukien" & user.brand == "loa"){
                $("#phukien-loa").append(htmlString);
            }
            else if (user.type=="phukien" & user.brand == "pinduphong"){
                $("#phukien-pinduphong").append(htmlString);
            }
            else if (user.type=="diengiadung" & user.brand == "mayxaysinhto"){
                $("#diengiadung-mayxaysinhto").append(htmlString);
            }
            else if (user.type=="diengiadung" & user.brand == "noicomdien"){
                $("#diengiadung-noicomdien").append(htmlString);
            }
            else if (user.type=="diengiadung" & user.brand == "lovisong"){
                $("#diengiadung-lovisong").append(htmlString);
            }
       
        }
    })


})
