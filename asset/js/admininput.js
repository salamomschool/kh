function myFunction(){
    var un = document.forms["myForm"]["Uname"].value;
    var pw = document.forms["myForm"]["Pass"].value;
    if(un=="Kosal" && pw=="3226"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Nonya" && pw=="3199"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Lomorng" && pw=="0797"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Sophea" && pw=="9528"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Vannear" && pw=="2133"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Tuonsok" && pw=="7259"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Morkath" && pw=="3643"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }else if (un=="Sopheaktra" && pw=="7400"){
      window.location.href="https://drive.google.com/drive/folders/1_IVGxf13HZKsByxEXivYDXrJQB1pV4Oz?usp=sharing"
    }
    
  }
 function momAdmin(){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
 }
 var modal = document.getElementById("myModal");
 window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
document.onkeypress = keyPress;

function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
    momAdmin();
  }
}