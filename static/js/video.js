var url =  window.location.href ;

$(document).ready(function(){

   var reg = /id=\d/;
   url=(reg.exec(url));
   var list=new Array();
   alert(url);

   if (url == "id=1"){
     list[0]="done2";
   } else if (url == "id=2") {
     list[0]="done3";
     list[1]="done4";
   } else if (url == "id=3") {

   } else if (url == "id=4") {

     list[0]="done5";
   } else if (url == "id=5") {

     list[0]="done1";
   }
   if (list.length == 0) {
     document.write('<div>此种视频可能暂未更新</div>');
   }
   for (var i = 0 ; i < list.length ; i ++) {
     document.write('<div>');
     //    <video src="../../static/video/test1.mp4" controls="controls" height="400">你的设备可能不太支持h5哦 (´・ω・`) </video>
     document.write('<video src="'+list[i]+'"controls="controls" height="349px" width="724px webkit-playsinline="true"">你的设备可能不太支持h5哦 (´・ω・`)</video>');
     document.write('</div>');
    }


});
