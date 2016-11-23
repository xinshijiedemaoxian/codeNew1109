var qrcode = new QRCode(document.getElementById("qrcode"), {});
//判断移动端与pc端
/*function browserRedirect() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        $(".button").on("touchstart", function (e) {
            makeCode();
        })
    } else {
        $(".button").on("click", function (e) {
            makeCode();
        });
    }
}*/
function enableSubmit(bool){
    if(bool){
        $(".button").removeClass("buttonG").addClass("buttonB");
    }
    else {
        $(".button").addClass("buttonG").removeClass("buttonB");
    }
}
function v_submitbutton(){
    for(f in flags) if(!flags[f]) {
        enableSubmit(false);
        return;
    }
    enableSubmit(true);
}
var flags = [false,false,false,false];
function v_ident(){
    var ident = $("#identifier").val();
    if(ident.length==0) {
        $(".hintIdent").html("不得为空");
        flags[0]=false;
    }else{
        $(".hintIdent").html("");
        flags[0] = true;
    }
    v_submitbutton();
}
function v_address(){
    var address = $("#address").val();
    if(address.length==0) {
        $(".hintAdr").html("不得为空");
        flags[1]=false;
    }else{
        $(".hintAdr").html("");
        flags[1] = true;
    }
    v_submitbutton();
}
function v_bank(){
    var bank = $("#bank").val();
    if(bank.length==0) {
        $(".hintBank").html("不得为空");
        flags[2]=false;
    }else{
        $(".hintBank").html("");
        flags[2] = true;
    }
    $(".verify").css({"border-color":"#cdcdcd"});
    v_submitbutton();
}
function v_desc(){
    var desc = $("#desc").val();
    if(desc.length==0) {
        $(".hintDesc").html("不得为空");
        flags[3]=false;
    }else{
        $(".hintDesc").html("");
        flags[3] = true;
    }
    $(".verify").css({"border-color":"#cdcdcd"});
    v_submitbutton();
}
function adaptValue(){
    if(flags[0],flags[1],flags[2],flags[3]){
        makeCode()
    }

}
$(function () {
    v_submitbutton();
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
    setTimeout("hechen()",250);
    //hechen();
    setTimeout("time()",100);
}
function time(){
    $("#result_content").show(200);
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
    mainCtx.fillRect(0, 0, 276, 305);
    var mainc = document.getElementById("main");
    var codeImg = new Image();
    codeImg.src = $("#qrcode").children("img")[0].src;
    mainCtx.drawImage(codeImg, 10, 10);
    if ($("#desc").val()) {
        mainCtx.font = "16px Arial";
        mainCtx.fillStyle = "#1c1c1c";
        mainCtx.lineWidth = 1;
        mainCtx.textAlign="start";
        mainCtx.textAlign = "center"; //设置文本的水平对对齐方式
        mainCtx.fillText($("#desc").val(), 138, 295)
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