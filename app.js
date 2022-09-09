function convertRoma() {
  let number = +prompt("sayi giriniz");
  let firstNumber = number;
  let convertData = "";
  if (number > 3000 || number ==""){
      console.log("sayi 3000'den kucuk , 0 dan büyük olmalı");
      return;
      
  }
while (number > 999){
  number = number - 1000
  convertData = convertData + "M"
}
if (number >= 900){
  number = number - 900
  convertData = convertData + "CM"
}
if (number >= 500){
  number = number - 500
  convertData = convertData + "D"
}
if (number >= 400){
  number = number - 400
  convertData = convertData + "CD"
}
while (number > 99){
  number = number - 100
  convertData = convertData + "C"
}
if (number >= 90){
  number = number - 90
  convertData = convertData + "XC"
}
if (number >= 50){
  number = number - 50
  convertData = convertData + "L"
}

if (number >= 40){
  number = number - 40
  convertData = convertData + "XL"
}
while (number > 9){
  number = number - 10
  convertData = convertData + "X"
}
if (number == 9){
  number = number - 9
  convertData = convertData + "IX"
}
if (number >= 5){
  number = number - 5
  convertData = convertData + "V"
}
if (number == 4){
  number = number - 4
  convertData = convertData + "IV"
}
while (number > 0){
  number = number - 1
  convertData = convertData + "I"
}
console.log(`Girilen sayı: ${firstNumber} , Roma rakamı karşılığı: ${convertData}`);
}

convertRoma();
