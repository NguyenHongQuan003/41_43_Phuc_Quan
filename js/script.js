$(document).ready(function() {
    $('#toggle').click();
})

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Kiểm tra form đăng ký

function kiemTraEmailDK() {
    let mail = $("#email_dk").val();
    let regexmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z])+\.)com$/;
    if (!regexmail.test(mail)) {
        alert("Email ví dụ: nhquan2622003@gmail.com");
        $("#email_dk").focus();
        return false;
    }
    alert("Emai chính xác");
    return true;
}

function kiemTraUserName() {
    let hoten = $("#username_dk").val();
    let regexHoten = /^[A-Z][a-zA-Z0-9]/;
    if (!regexHoten.test(hoten)) {
        alert("UserName bắt đầu là kí tự và viết in hoa");
        $("#username_dk").focus();
        return false;
    }
    alert("UserName chính xác");
    return true;
}

function kiemTraSDT() {
    let sodt = $("#tel_dk").val();
    let regexSdt = /^0[345789]\d{8}/;
    if (!regexSdt.test(sodt)) {
        alert("Số điện thoại gồm 10 số và bắt đầu bằng đầu số 03, 04, 05, 07, 08, 09");
        $("#tel_dk").focus();
        return false
    }
    alert("SĐT chính xác");
    return true;
}

function kiemTraMK() {
    let mk = $("#pass_dk").val();
    let mauKT = /[a-zA-Z0-9]{6,}/;
    if (!mauKT.test(mk)) {
        alert("Nhập ít nhất 6 kí tự, không kí tự đặc biệt");
        $("#pass_dk").focus();
        return false;
    }
    alert("MK chính xác");
    return true;
}

function kiemTraNLMK() {
    if ($("#verify-pass_dk").val() != $("#pass_dk").val()) {
        alert("Mật khẩu không khớp, nhập lại");
        $("#verify-pass_dk").focus();
        return false;
    }
    alert("MK trùng khớp");
    return true;
}



var i = 1;
$("#Save").click(function () {
    if (kiemTraEmailDK() == true && kiemTraUserName() == true && kiemTraSDT() == true && kiemTraMK() == true && kiemTraNLMK() == true) {
        alert("Đăng ký thành công");
        row = "<tr>";
        row += "<th>" + (i++) + "</th>";
        row += "<th>" + $("#username_dk").val() + "</th>";
        row += "<th>" + $("#email_dk").val() + "</th>";
        row += "<th>" + $("#tel_dk").val() + "</th>";
        row += "<th>" + $("#pass_dk").val() + "</th>";
        row += "</tr>";
        $("#danhSach").append(row);
    }
})



// Kiem tra form đăng nhập

function kiemTraEmailDN(){
    let mail = $("#email_dn").val();
    var regexmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z])+\.)com$/;
    if (!regexmailDN.test(mailDN)) {
        alert("Email ví dụ: nhquan2622003@gmail.com");
        $("#email_dn").focus();
        return false;
    }
    alert("Emai chính xác");
    return true;
}

function kiemTraMatKhauDN(){
    let mauKT=/[a-zA-Z0-9]{6,}/;
    if(!mauKT.test($("#pass_dn").val())){
        alert("Mật khẩu từ 6 ký tự, không kí tự đặc biệt");
        $("#pass_dn").focus();
        return false;
    }
    alert("Mật khẩu chính xác");
    return true;
}

function kiemTra_DangNhap(){
    if(kiemTraEmailDN() == true && kiemTraMatKhauDN() == true)
        alert("Đăng nhập thành công");
}



