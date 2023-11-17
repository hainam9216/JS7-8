//Function
//Tổng các số dương trong mảng
function TongSoDuong(DS) {
    var TongDuong = 0;
    for (var i = 0; i < DS.length; i++) {
        if (DS[i] > 0) {
            TongDuong += DS[i]
        }
    };
    return TongDuong;
}

//Đếm có bao nhiêu số dương trong mảng.
function CountPos(DS) {
    var count = 0
    for (var i = 0; i < DS.length; i++) {
        if (DS[i] > 0)
            ++count
    }
    return count
}

//Tìm số nhỏ nhất trong mảng.
function findSmallest(DS) {
    var compareNum = DS[0]
    var smstNum = DS[0]
    for (var i = 0; i < DS.length; i++) {
        compareNum = DS[i]
        if (smstNum >= compareNum) {
            smstNum = compareNum
        }
    }
    return smstNum
}

//Tìm số dương nhỏ nhất trong mảng
function findSmallestPos(DS) {
    var compareNum = DS[0]
    var smstNum = DS[0]
    for (var i = 0; i < DS.length; i++) {
        if (DS[i] > 0) {
            compareNum = DS[i]
            if (smstNum >= compareNum) {
                smstNum = compareNum
            }
        }
    }
    return smstNum
}

//  Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1 
function findLastEven(DS) {
    var LastEven = -1
    for (var i = 0; i < DS.length; i++) {
        if (DS[i] % 2 === 0) {
            LastEven = DS[i]
        }
    }
    return LastEven
}
//  Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị) 
function swapPosition(DS, P1, P2) {
    var tmp //Biến tạm để lưu 1 số
    //2 vị trí cần đổi
    var P1
    var P2
    --P1
    --P2
    if (P1 < P2) {
        tmp = DS[P1]
        DS[P1] = DS[P2]
        DS[P2] = tmp
    } else if (P1 > P2) {
        tmp = DS[P2]
        DS[P2] = DS[P1]
        DS[P1] = tmp
    }
    return DS
}
//  1 4 3 5
// Sắp xếp mảng theo thứ tự tăng dần.
//Sử dụng selection sort
function SelectionSort(DS) {
    var tmp //Biến phụ để đổi vị trí
    for (var i = 0; i < DS.length; i++) {
        for (var j = i; j < DS.length; j++) {
            if (DS[i] > DS[j]) {
                tmp = DS[i]
                DS[i] = DS[j]
                DS[j] = tmp
            }
        }
    }
    return DS
}

// Tìm số nguyên tố đầu tiên trong mảng
/*
Giả sữ n là số cần kiểm tra
B1: Ktra có < 2 k? -> false
B2: Ktra có = 2 k? -> result = 2
B3: cho x = 2
Ktra n có chia hết các số trong khoảng [2,n) 
    Nếu có -> false
    Nếu không -> true
*/
function FindfstPrimeNum(DS) {
    var result = -1;

    for (var i = 0; i < DS.length; i++) {
        if (DS[i] < 2) {
        } else if (DS[i] === 2) {
            result = 2;
            break;
        } else {
            var x = 2;
            while (x < DS[i] && DS[i] % x !== 0) {
                x++;
            }

            if (x === DS[i]) {
                result = DS[i];
                break;
            }
        }
    }

    return result;
}


//Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
function FindInt(DS) {
    //đếm số
    var count = 0
    for (var i = 0; i < DS.length; i++) {
        if (Number.isInteger(DS[i])) {
            count++;
        }
    }
    return count;
}
// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function comparePosNeg(DS) {
    var posCount = 0
    var negCount = 0
    for (var i = 0; i < DS.length; i++) {
        if (DS[i] > 0) {
            posCount++
        } else if (DS[i] < 0) {
            negCount++
        }
    }
    var result = 0
    if (posCount > negCount) {
        result = 1
    } else if (posCount < negCount) {
        result = -1
    }
    return result
}

// Main
//Tạo danh sách số nguyên nhận vào
var DSSoNguyen = []
var SubmitMang = document.getElementById("SubmitMang")

SubmitMang.onclick = function () {
    So = Number(document.getElementById("So").value)
    DSSoNguyen.push(So)
    //Out
    var KhaiBaoMang = document.getElementById("KhaiBaoMang")
    KhaiBaoMang.innerHTML = '<p><strong>Danh sách số nguyên </strong></p>';
    //In ra mảng
    for (var i = 0; i < DSSoNguyen.length; i++) {
        KhaiBaoMang.innerHTML += DSSoNguyen[i] + " ";
    };
    //Xoá thanh input khi đã submit
    document.getElementById("So").value = '';
    return DSSoNguyen
}

//Tổng các số dương trong mảng
var TongSoDuongbtn = document.getElementById("TongSoDuongbtn")
TongSoDuongbtn.onclick = function () {
    var TongDuong = TongSoDuong(DSSoNguyen)
    //Out
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Tổng các số dương ' + TongDuong + '</strong></p>'
}

//Đếm có bao nhiêu số dương trong mảng.
var CountPosbtn = document.getElementById("CountPosbtn")
CountPosbtn.onclick = function () {
    var SoDuong = CountPos(DSSoNguyen)
    //Out
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Có ' + SoDuong + ' số dương</strong></p>'
}

// Tìm số nhỏ nhất trong mảng 
var FindSmallestBtn = document.getElementById("FindSmallestBtn")
FindSmallestBtn.onclick = function () {
    var SoNhoNhat = findSmallest(DSSoNguyen)
    //Out
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Số nhỏ nhất là ' + SoNhoNhat + ' </strong></p>'
}

//Tìm số dương nhỏ nhất trong mảng
var FindSmallestPosBtn = document.getElementById("FindSmallestPosBtn")
FindSmallestPosBtn.onclick = function () {
    var SoDuongNhoNhat = findSmallestPos(DSSoNguyen)
    //Out
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Số dương nhỏ nhất là ' + SoDuongNhoNhat + ' </strong></p>'
}

//Tìm chẵn cuối cùng
var FindLastEvenBtn = document.getElementById("FindLastEvenBtn")
FindLastEvenBtn.onclick = function () {
    var LastEven = findLastEven(DSSoNguyen)
    //Out
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Số chẵn cuối cùng là ' + LastEven + ' </strong></p>'
}

//  Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị) 
var SwapPositionBtn = document.getElementById("SwapPositionBtn")
SwapPositionBtn.onclick = function () {
    var pos1 = document.getElementById("PositionToChange1").value
    var pos2 = document.getElementById("PositionToChange2").value
    //Out
    //Kiểm tra dữ liệu
    if (pos1 - 1 < 0 || pos2 - 1 < 0 || pos1 > DSSoNguyen.length || pos2 > DSSoNguyen.length) {
        var Fresult = document.getElementById("Fresult")
        Fresult.innerHTML = '<p><strong>Lỗi  </strong></p>';

    } else {
        swapPosition(DSSoNguyen, pos1, pos2)
        var Fresult = document.getElementById("Fresult")
        Fresult.innerHTML = '<p><strong>Danh sách số nguyên là </strong></p>';
        //In ra mảng
        for (var i = 0; i < DSSoNguyen.length; i++) {
            Fresult.innerHTML += DSSoNguyen[i] + " ";
        };
    }
}

// Sắp xếp mảng theo thứ tự tăng dần.
var SortBtn = document.getElementById("SortBtn")
SortBtn.onclick = function () {
    //Out
    SelectionSort(DSSoNguyen)
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Danh sách đã sắp xếp là: </strong></p>';
    //In ra mảng
    for (var i = 0; i < DSSoNguyen.length; i++) {
        Fresult.innerHTML += DSSoNguyen[i] + " ";
    };

}
// Tìm số nguyên tố đầu tiên trong mảng
var FindfstPrimeBtn = document.getElementById("FindfstPrimeBtn")
FindfstPrimeBtn.onclick = function () {
    var Kq = FindfstPrimeNum(DSSoNguyen)
    //Lấy xử lí dữ liệu
    //Out
    var Fresult = document.getElementById("Fresult")
    Fresult.innerHTML = '<p><strong>Số nguyên tố đầu tiên ' + Kq + ' </strong></p>'
}
//  Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?

//Tạo danh sách số thực nhận vào
var DSSoThuc = []
var SubmitFloatBtn = document.getElementById("SubmitFloatBtn")
SubmitFloatBtn.onclick = function () {
    //Lấy dữ liệu
    NumFloat = Number(document.getElementById("NumFloat").value)
    DSSoThuc.push(NumFloat)
    //Out
    var FloatResult = document.getElementById("FloatResult")
    FloatResult.innerHTML = '<p><strong>Danh sách số thực </strong></p>';
    //In ra mảng
    for (var i = 0; i < DSSoThuc.length; i++) {
        FloatResult.innerHTML += DSSoThuc[i] + " ";
    };
    //Xoá thanh input khi đã submit
    document.getElementById("NumFloat").value = '';
    //đếm số nguyên
    var countInt = FindInt(DSSoThuc)
    //Out
    FloatResult.innerHTML += '<p><strong>Có ' + countInt + ' số nguyên</strong></p>'
}

// So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
var SoSanhDuongAmBtn = document.getElementById("SoSanhDuongAmBtn")
SoSanhDuongAmBtn.onclick = function () {
    // SoSanh
    var Kq = comparePosNeg(DSSoNguyen)
    //Out
    var Fresult = document.getElementById("Fresult")
    if (Kq === 1) {
        Fresult.innerHTML = '<p><strong>Số dương nhiều hơn </strong></p>'
    } else if (Kq === -1) {
        Fresult.innerHTML = '<p><strong>Số âm nhiều hơn </strong></p>'
    } else {
        Fresult.innerHTML = '<p><strong>Số âm và số dương bằng nhau </strong></p>'
    }

}