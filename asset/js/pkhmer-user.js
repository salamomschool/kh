function myPKh(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="Vanna" && pw=="4641"){
      window.location.href="https://drive.google.com/drive/folders/18w7ZwfdyE62-MYhXq_F8UvBiJXIoKii1?usp=sharing"
    }else if (un=="Saykim" && pw=="8585"){
      window.location.href="https://drive.google.com/drive/folders/1quQ5t3gS3xFKOUzoZmz-y2k2XDdeaeOS?usp=sharing"
    }else if (un=="Ratana" && pw=="3739"){
      window.location.href="https://drive.google.com/drive/folders/1H_DzS4ZKMZfixkI0OGWS3LRDLcFA6TIw?usp=sharing"
    }else if (un=="Soklim" && pw=="9656"){
      window.location.href="#"
    }else if (un=="Sokanharith" && pw=="7764"){
      window.location.href="https://drive.google.com/drive/folders/1fc40WKL-zQsUdAL5nggAeL5jmgH-l8nn?usp=sharing"
    }else if (un=="Kanha" && pw=="2208"){
      window.location.href="https://drive.google.com/drive/folders/1o9VeLO_N3T6XIdsynqc0ZhtWNrXN68s8?usp=sharing"
    }else if (un=="Thida" && pw=="0267"){
      window.location.href="https://drive.google.com/drive/folders/1jDNtync24l8-0lgWu8snjQCWVP0-bA-q?usp=sharing"
    }else if (un=="Theary" && pw=="3665"){
      window.location.href="https://drive.google.com/drive/folders/18w7ZwfdyE62-MYhXq_F8UvBiJXIoKii1?usp=sharing"
    }else if (un=="Raksa" && pw=="1231"){
      window.location.href="https://drive.google.com/drive/folders/1SREZ33UnVEcBchQw4tz6oA1BoLOhbm4-?usp=sharing"
    }else if (un=="Mouyteang" && pw=="8226"){
      window.location.href="https://drive.google.com/drive/folders/18w7ZwfdyE62-MYhXq_F8UvBiJXIoKii1?usp=sharing"
    }else if (un=="Channa" && pw=="5783"){
      window.location.href="https://drive.google.com/drive/folders/1H_DzS4ZKMZfixkI0OGWS3LRDLcFA6TIw?usp=sharing"
    }else if (un=="Chanthen" && pw=="2173"){
      window.location.href="https://drive.google.com/drive/folders/1o9VeLO_N3T6XIdsynqc0ZhtWNrXN68s8?usp=sharing"
    }else if (un=="Bopha" && pw=="4902"){
      window.location.href="#"
    }else if (un=="Vuth" && pw=="1554"){
      window.location.href="https://drive.google.com/drive/folders/1sWzN61i8-J_Qnhda0Q1s3ykDZsLN86Sy?usp=sharing"
    }else if (un=="Sokngim" && pw=="6291"){
      window.location.href="https://drive.google.com/drive/folders/1jDNtync24l8-0lgWu8snjQCWVP0-bA-q?usp=sharing"
    }
  }
  function pKhmer(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
   }
   var modal = document.getElementById("myModal");
   var modal2 = document.getElementById("myModal2");

   window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if (event.target == modal2){
      modal2.style.display = "none";
    }
  }
document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
    myPKh();
  }
}