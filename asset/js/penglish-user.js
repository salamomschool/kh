function myPEn(){
  var un = document.forms["myForm2"]["Uname2"].value;
  var pw = document.forms["myForm2"]["Pass2"].value;
  if (un=="Rithy" && pw=="9647"){
    window.location.href="https://drive.google.com/drive/folders/18w7ZwfdyE62-MYhXq_F8UvBiJXIoKii1?usp=sharing"
  }else if (un=="Samel" && pw=="2108"){
    window.location.href="https://drive.google.com/drive/folders/18w7ZwfdyE62-MYhXq_F8UvBiJXIoKii1?usp=sharing"
  }else if (un=="Nika" && pw=="5957"){
    window.location.href="#"
  }else if (un=="Channy" && pw=="5428"){
    window.location.href="https://drive.google.com/drive/folders/1quQ5t3gS3xFKOUzoZmz-y2k2XDdeaeOS?usp=sharing"
  }else if (un=="Raksmey" && pw=="2575"){
    window.location.href="https://drive.google.com/drive/folders/1SREZ33UnVEcBchQw4tz6oA1BoLOhbm4-?usp=sharing"
  }else if (un=="Chanthy" && pw=="8903"){
    window.location.href="https://drive.google.com/drive/folders/1o9VeLO_N3T6XIdsynqc0ZhtWNrXN68s8?usp=sharing"
  }else if (un=="Sokan" && pw=="6464"){
    window.location.href="https://drive.google.com/drive/folders/1jDNtync24l8-0lgWu8snjQCWVP0-bA-q?usp=sharing"
  }else if (un=="Vanny" && pw=="6408"){
    window.location.href="https://drive.google.com/drive/folders/1sWzN61i8-J_Qnhda0Q1s3ykDZsLN86Sy?usp=sharing"
  }else if (un=="Chanphol" && pw=="7533"){
    window.location.href="#"
  }
}
function pEnglish(){
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";
   }
   document.onkeypress = keyPress;

function keyPress(e){
     var x = e || window.event;
     var key = (x.keyCode || x.which);
     if(key == 13 || key == 3){
      myPEn();
     }
   }