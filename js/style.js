var qrcode = new QRCode(document.getElementById("qrcode"), {});
// function browserRedirect() {
//     if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
//         $(".button").on("touchstart", function (e) {
//             makeCode();
//         })
//     } else {
//         $(".button").on("click", function (e) {
//             makeCode();
//         });
//     }
// }
$(function () {
    $("#desc").focus(function () {
        $("#desc").val("")
    });
    // browserRedirect();
    $(".button").on("click", function (e) {
        makeCode();
    });
});
function makeCode() {
    clearTimeout(hechen());
    var name = $("#companyname").val();
    var identifier = $("#identifier").val();
    var address = $("#address").val();
    var bank = $("#bank").val();
    var elText = $("#text").val();
    elText = "1:" + name + "\r\n2:" + identifier + "\r\n3:" + address + "\r\n4:" + bank + "\r\n";
    var elText2 = "公司名称:北京华夏聚龙自动化股份公司\r\n纳税人识别号:911101097481361512\r\n地址：北京市丰台区南四环西路188号" + "（总部基地）十区27号楼电话:010-52256809\r\n开户行及账号:交通银行北京丰台支行110061242018010079265";
    qrcode.makeCode(elText);
    setTimeout("hechen()",300);
    //hechen();
    $("#result_content").show(350);
}

function closeResult() {
    $("#result_content").hide(200)
}
$("#text").on("blur", function () {
        makeCode();
}).on("keydown", function (e) {
    if (e.keyCode == 13) {
        makeCode();
    }
});
function hechen() {
    var mainCtx = getCanvasContext("main");
    var maxWidth = mainCtx.width;
    var maxHeight = mainCtx.height;
    mainCtx.fillStyle = "#fff";
    mainCtx.fillRect(0, 0, 276, 290);
    var mainc = document.getElementById("main");
    var codeImg = new Image();
    codeImg.src = $("#qrcode").children("img")[0].src;
    mainCtx.drawImage(codeImg, 10, 10);
    if ($("#desc").val()) {
        mainCtx.font = "16px Arial";
        mainCtx.fillStyle = "#1c1c1c";
        mainCtx.lineWidth = 1;
        mainCtx.fillText($("#desc").val(), 10, 285)
    }
    var imageData = mainc.toDataURL("image/jpg");
    document.getElementById("myimage").src = imageData;
}
function getCanvasContext(id) {
    return document.getElementById(id).getContext("2d")
}
function setWidthHeight(img, maxWidth, maxHeight) {
    var imgWidth = img.width;
    var imgHeight = img.height;
    if (imgWidth <= maxWidth && imgHeight <= maxHeight) {
    }
};