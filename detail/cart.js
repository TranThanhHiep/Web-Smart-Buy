var url = window.location.href;
    var arrString = url.split("?");
    var parametersString = arrString[1];
    var objid=parametersString.split("=");
    var stringid=objid[1];
    var getid=parseInt(stringid);

    function buy() {
        var giohang = window.localStorage.getItem("giohang");
    
        // chua co gio hang
        // tao moi gio hang voi thong tin product vua mua
        if (!giohang) {
            console.log("chua co gio hang, them moi");
            var giohangArr = [{
                id: getid,
                soluong: 1
            }];
            window.localStorage.setItem("giohang", JSON.stringify(giohangArr));
        }
        // da co gio hang trong localStorage
        // them vao gio hang 
        else {
            console.log("da co gio hang, them sp vao gio hang");
            var giohangArr = JSON.parse(giohang);
    
            var indexFromGiohangArr = getIndexFromGiohangArray(giohangArr, getid);
    
            if (indexFromGiohangArr >= 0) {
                // tang so luong
                giohangArr[indexFromGiohangArr].soluong++;
            } else {
                // tao mot object moi va them vao mang gio hang
                var product = {
                    id: getid,
                    soluong: 1
                }
                giohangArr.push(product);
            }
    
            window.localStorage.setItem("giohang", JSON.stringify(giohangArr));
        }
    }
    
    function getIndexFromGiohangArray(giohangArr, getid) {
        for(var i=0; i<giohangArr.length; i++) {
            if (giohangArr[i].id == getid) {
                return i;
            }
        }
        return -1;
    }
 