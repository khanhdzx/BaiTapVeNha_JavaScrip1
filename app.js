// bài tập về nhà gồm 7 bài :
// bài tập 1 

// let a = prompt("Nhập vào a");
// let b = prompt("Nhập vào b");
// if(a%b ==0){
//     alert("a chia hết cho b")
// }
// else alert ("a không chia hết cho b")


// bài tập 2
//  let a = Number(prompt("Nhập số tuổi"));
//  if(a == 16){
//     alert("ok đủ tuổi vào lớp 10 rồi cu")
//  }else if ( a> 16){
//     alert("lớn rồi vào lớp 10 chôn bố à")
//  }else{
//     alert("Tao kêu nhập tuổi chứ ko kêu nhập linh tinh Cút Ngay !!!")
//  }


// bài tập 3


// let a = Number(prompt("Kiểm tra số nguyên"));
// if(isNaN(a)){
//     alert("Ngu đấy là chữ ko phải số cmm ")
// }
// else{
// if(a>0){
//     alert("Lớn hơn 0")
// }else{
//     alert("Nhỏ hơn 0")
// }
// }



// bài tập 4

// let a= prompt("Nhập a");
// let b= prompt("Nhập b");
// let c= prompt("Nhập c");
// if(a>b){
//     if(a>c){
//         alert(" a là số lớn nhất")
//     }else alert("c là số lớn nhất")
// }else if(b>c){
//     alert("b là số lớn nhất")
// }else alert( "c là số lớn nhất")


// bài tập 5
//  let a = Number(prompt("Nhập điểm 1"));
//  let b = Number(prompt("Nhập điểm 2"));;
//  let d = (a+b)/2;
//  alert("Điểm trung bình " + d);
//  if(d>8){
//     alert("giỏi lắm con trai của ta")
//  }else
//  if(d>6.5){
//     alert("khá lắm cháu :)) ")
//  }else
//  if( d> 5){
//     alert("Trung bình lần sau cố gắng")
//  }else
//  if(d>4){
//     alert("yếu :v")
//  }else{
//     alert("sao mày ngu vậy thế hả")
//  }

// bài tập 6


// let doanhSo =prompt("Doanh số bán hàng tỷ đông của anh khánh :)) ");
// if (doanhSo>100){
//     alert("lãi về tay hahhah")
// }else if(doanhSo>80){
//     alert("đạt yêu cầu nói chung cũng đc :(( ")
// }else if (doanhSo>60){
//     alert("Lỗ rồi huhu")
// }else alert ("kinh doanh gì nữa mày nghỉ mm đi")



// bài tập 7



// let canNang = Number(prompt("Nhập cân nặng"));
// let chieuCao = Number(prompt("Nhập chiều cao"));
// let bmi = canNang / (chieuCao * chieuCao);
// if( bmi< 18){
//     alert("Thiếu cân rồi ăn nhiều vào mày")
// }else if(bmi<25.0){
//     alert("Bình thường ăn uống điều độ lắm")
// }else if(bmi>=30.0){
//     alert("Thừa cân rồi ăn ít thôi ")
// }else{
//     alert("Mày béo gần như con lợn rồi đấy")
// }









// bài tập 1 đang làm trên lớp

// let a = Number(prompt("Nhập một số bất kỳ"));
// if(a>=0 && a<=4.5){
//     alert("Nửa dưới của 9")
// }
//     else if (a>4.5 && a<=9){
//     alert("Nửa trên của 9")
// }
// else{
//     alert("Không nằm trong khoảng từ 0-9")
// }




// bài tập 2


// let x = Number(prompt("Nhập vào số x"));
// let n = Number(prompt("Nhập vào số n"));
// if(x>=0 && x<=n/2){
//     alert(`nằm trong khoảng bé hơn của [0-${n}]`)
// }
// else if( x>n/2 && x<=n){
//     alert(`nằm trong khoảng lớn hơn của [0-${n}]`)
// }else{
//     alert(`không nằm trong khoảng từ [o-${n}]`)
// }


// bài tập 3


// let x = Number(prompt("nhập vào số x kiểm tra chẵn lẻ"));
// if ( x% 2==0){
//     alert("số chẵn")
// }
// else {
//     alert("số lẻ")
// }


// bài tập 4


// let chieuCao = Number(prompt("Nhập chiều cao"));
// let canNang = Number(prompt("Nhập cân nặng"));
// let BMI = canNang / ((chieuCao/100)*(chieuCao/100));
// if (BMI>=16){
//     alert(`BMI là`+ BMI)
//     alert("Mày là bộ xương khô à")
// }
// else if ( BMI>=16 && 18.5){
//     alert(`BMi là`+ BMI)
//     alert("Mày là idol hàn quốc à")
// }
// else if ( BMI >=18 && 25){
//     alert(`BMi là`+ BMI)
//     alert("Mày đẹp trai quá đấy")
// }
// else if (BMI > 25 && 30){
//     alert(`BMI là`+ BMI)
//     alert("Mày béo quá rồi đấy")
// }
// else  if (BMI<30){
//     alert(`BMI là`+ BMI)
//     alert("Thôi không cần giảm nữa đâu")
// }



// bài tập 5




// let a = Number(prompt("Nhập điểm môn hóa"));
// let b = Number(prompt("Nhập điểm môn toán"));
// let c = Number(prompt("Nhập điểm môn lý"));
// let d= Number(prompt("Nhập điểm môn văn"));
// let e = Number(prompt("Nhập điểm môn anh"));
// let tong = a+b+c+d+e;
// let dtb = tong/5*10;
// alert("Phần trăm điểm trung bình của các môn là " + dtb+"%")
// if (dtb>=90){
// alert("được vào lớp A ")
// }
// else if(dtb>=80){
//     alert("được vào lớp B")
// }
// else if(dtb>=70){
//     alert("được vào lớp C")
// }
// else if(dtb>=60){
//     alert("được vào lớp D")
// }
// else if(dtb>=40){
//     alert("được vào lớp E")
// }
// else if(dtb<40){
//     alert("được vào lớp F")
// }



// bài tập 6

//     let nam = +prompt("Nhập năm")
//   if (parseInt(nam) > 0){  //Kiểm tra năm có lớn hơn 0 và có là số nguyên ko
//       if (nam % 4 == 0){
//           if (nam %100 ==0){
//               if (nam % 400 == 0){
//                   alert(nam +"" + " Là năm nhuận") // năm chia hết cho 4, 100, 400 là năm nhuận
//               } else {
//                   alert(nam + " " + " Không là năm nhuận")
//               }
//           } else {
//               alert(nam + " "+ "Là năm nhuận") // năm chia hết cho 4 và 100 nhưng ko chia hết cho 400 là năm Nhuận
//           }
//       }else {
//           alert(nam + " " + "Không là năm nhuận")
//       }
//   } else {
//       alert("nhập lại năm đi mày")
//   }






// bài tập 7\





// let chieuCao =Number(prompt("Nhập chiều cao"));
// if(chieuCao<150){
//     alert("Mày là người lùn à")
// }else if(chieuCao>150 && 169){
//     alert("Trông mày cũng tạm tạm")
// }else if(chieuCao>=170){
//     alert("Mày trông cũng được")
// }
// else{
//     alert("nhập cho đúng v")
// }




// bài tập 8



// let a= Number(prompt("Nhập vào số a "));
// let b= Number(prompt("Nhập vào số b"));
// if(a>b){
//     console.log("số lớn hơn là số a = " + a)
// }
// else if( b<a){
//     console.log("số lớn hơn là số b =" + b )
// }



// bài tập 9


// let a = Number(prompt("Nhập vào số a"));
// let b = Number(prompt("Nhập vào số b"));
// let vip = prompt("nhập dấu phép tính để tính toán ");
// switch (vip){
//     case "+" : console.log(a+b )
//         break;
//         case "-": console.log(a-b)
//         break;
//         case "%" : console.log(a%b)
//         break;
//         case "*" : console.log(a*b)
//         break;
//         case "/" : console.log(a/b)
//         break;
//         case "**" : console.log(a**b)
//         break;
// }


// bài tập 12

// let ngay= Number(prompt("Nhập ngày sinh của bạn"));
// let thang= Number(prompt("Nhập tháng sinh của bạn"));
// switch (ngày){
//     case 0:
//         ngay = "bạch dương"

// }


