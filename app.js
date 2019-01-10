function addZer(i){
  if (i < 10) {
  i = "0" + i;
  }
return i;
}

function digit(){
  var date = new Date();
  var h = addZer(date.getHours());
  var m = addZer(date.getMinutes());
  var s = addZer(date.getSeconds());
  var hour = document.querySelector(".hours");
  document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
  hour.style.MozTransform  = "rotate("+(360/60*m)+"deg)";
}
setInterval(digit, 1000);
