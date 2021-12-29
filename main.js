var mang = [];
document.getElementById("btnMang").onclick = function(){
    var num = Number(document.getElementById("inputMang").value);
    mang.push(num);
    // mang = num.split(",");
    document.getElementById("txtNhap").innerHTML = "👉" +mang;
}

document.getElementById("btnB1").onclick = function(){
    var tong = 0;
    for(var i = 0; i <= mang.length; i++){
        if(mang[i] > 0){
            tong += Number(mang[i]);
        }
    }
    document.getElementById("txtKq1").innerHTML = "Tổng số dương: " +tong;
}

document.getElementById("btnB2").onclick = function(){
    var count = 0;
    for(var i = 0; i <= mang.length; i++){
        if(mang[i] > 0){
            count++
        }
    }

    document.getElementById("txtKq2").innerHTML = "Số dương: "+count;
        
}

document.getElementById("btnB3").onclick = function(){
    var a = mang[0];
    for (var  i = 0; i <= mang.length; i++){
        if(a > mang[i]){
            a = mang[i];
        }
    }
    document.getElementById("txtKq3").innerHTML = "Số nhỏ nhất: "+a;
}

document.getElementById("btnB4").onclick = function(){
    var a = mang[0];
    for (var  i = 0; i <= mang.length; i++){
        if(mang[i] > 0 && a > mang[i]){
            a = mang[i];
        }
    }
    document.getElementById("txtKq4").innerHTML = "Tìm số dương nhỏ nhất: "+a;
}

document.getElementById("btnB5").onclick = function(){
    var a = mang[0];
    for (var  i = 0; i <= mang.length; i++){
        if (mang[i] % 2 == 0){
            a = mang[i];
        }
    if (a % 2 != 0){
        a = -1;
        }
        
    }
    document.getElementById("txtKq5").innerHTML = "Tìm số chẵn: "+a;
}
document.getElementById("btnB6").onclick = function () {
    var a = [];
    var num = 0;
    var s1 = Number(document.getElementById("inputS1").value);
    var s2 = Number(document.getElementById("inputS2").value);
        for (var i = 0; i < mang.length; i++)
        a[i] = mang[i];
        num = a[s1];
        a[s1] = a[s2];
        a[s2] = num;
        document.getElementById("txtKq6").innerHTML = "Mảng sau khi thay đổi :" +a;
}

document.getElementById("btnB7").onclick = function () {
    var a = [];
    var num = 0;
    for (var i = 0; i < mang.length; i++)
        a[i] = mang[i];
    for (var i = 0; i < a.length; i++)
        for (var j = 0; j < mang.length - 1; j++)
            if (a[j] > a[j + 1]) {
                num = a[j];
                a[j] = a[j + 1];
                a[j + 1] = num;
            }
    document.getElementById("txtKq7").innerHTML = "Mảng sau khi sắp xếp: " +a;
}

document.getElementById("btnB8").onclick = function () {
    var num = -1;
    for (var i = 0; i < mang.length; i++)
        if (kiemTra(mang[i]) == 0) {
            num = mang[i];
            break
        }
    document.getElementById("txtKq8").innerHTML = "" +num;

}

function kiemTra(n) {
    if (n < 2)
        return 1;
    else {
        for (var i = 2; i <=n/2; i++)
        if (n % i == 0)
            return 1;
    }
    return 0;
}

var mang2 = [];
document.getElementById("btnMang2").onclick = function () {
    var num2 = Number(document.getElementById("inputMang2").value);
    mang2.push(num2);
    document.getElementById("txtNhap1").innerHTML = " "+mang2;
}
document.getElementById("btnB9").onclick = function () {
    count = 0;
    for (var i = 0; i < mang2.length; i++)
        if (Number.isInteger(mang2[i]) == true)
            count++;

    document.getElementById("txtKq9").innerHTML = "Số nguyên: " +count;
}

document.getElementById("btnB10").onclick = function () {
    var ss1 = 0;
    var ss2 = 0;
    for (var i = 0; i < mang.length; i++) {
        if (mang[i] > 0)
            ss1++;
        else if (mang[i] < 0)
            ss2++;
    }
    if (ss1 > ss2)
        document.getElementById("txtKq10").innerHTML = "Số dương > Số âm";
    else if (ss1 < ss2)
        document.getElementById("txtKq10").innerHTML = "Số âm > Số dương";
    else if (ss1 == ss2)
        document.getElementById("txtKq10").innerHTML = "Số âm = Số dương";
}


