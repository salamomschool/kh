  function mySloginEn(){
    var un = document.forms["myForm2"]["Uname2"].value;
    var pw = document.forms["myForm2"]["Pass2"].value;
    if(un=="Veasna" && pw=="9659"){
      window.location.href="https://drive.google.com/drive/folders/1kBxmjXAxFprmGv2OyfnbcLTQ3Jy0wqde?usp=sharing"
    }else if (un=="Samel" && pw=="2108"){
      window.location.href="https://drive.google.com/drive/folders/1kBxmjXAxFprmGv2OyfnbcLTQ3Jy0wqde?usp=sharing"
    }else if (un=="Sokra" && pw=="4554"){
      window.location.href="https://drive.google.com/drive/folders/1kBxmjXAxFprmGv2OyfnbcLTQ3Jy0wqde?usp=sharing"
    }
    
  }
  function sEnglish(){
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "block";
   }
   var modal = document.getElementById("myModal");
   var modal2 = document.getElementById("myModal2");
   window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    } else if(event.target == modal2){
      modal2.style.display = "none";
    }
  }