document.getElementById("screen").style.display = "none";
setTimeout(function(){
document.getElementById("preloader").style.display = "none";
document.getElementById("screen").style.display = "block";
},2000);
$("title").ready(function(){$(".Facebook,.Support,.Youtube,.Information").hide();});
$(".icon1").click(function(){$(".Support").show();document.getElementById("icon1").style.transform = "scale(1.4)";window.scrollTo(0, 0);});
$(".icon2").click(function(){$(".Facebook").show();document.getElementById("icon2").style.transform = "scale(1.4)";window.scrollTo(0, 0);});
$(".icon3").click(function(){$(".Home").show();window.scrollTo(0, 0);});
$(".icon4").click(function(){$(".Youtube").show();document.getElementById("icon4").style.transform = "scale(1.4)";window.scrollTo(0, 0);});
$(".icon5").click(function(){$(".Information").show();document.getElementById("icon5").style.transform = "scale(1.4)";window.scrollTo(0, 0);});
$(".direction").click(function(){$(".maps").slideToggle(100);});
$(".icon1,.icon2,.icon3,.icon4").click(function(){
                                                   $(".Information").hide();
                                                   document.getElementById("icon5").style.transform = "scale(1)";
                                                   });
$(".icon1,.icon2,.icon3,.icon5").click(function(){
                                                   $(".Youtube").hide();
                                                   document.getElementById("icon4").style.transform = "scale(1)";
                                                   });
$(".icon1,.icon2,.icon4,.icon5").click(function(){
                                                   $(".Home").hide();
                                                   
                                                   });
$(".icon1,.icon3,.icon4,.icon5").click(function(){
                                                   $(".Facebook").hide();
                                                   document.getElementById("icon2").style.transform = "scale(1)";
                                                   });
$(".icon2,.icon3,.icon4,.icon5").click(function(){
                                                   $(".Support").hide();
                                                  document.getElementById("icon1").style.transform = "scale(1)";
                                                   });
                                                  
var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");
function loadVideo(iframe) {
  $.getJSON(reqURL + iframe.getAttribute('cid') + "&api_key=8bwwlljmtoiscsogior2ydu7phfapwa1hvwvkxkr&order_by=pubDate&order_dir=desc&count=27",
    function(data) {
      var videoNumber = (iframe.getAttribute('vnum') ? Number(iframe.getAttribute('vnum')) : 0);
      console.log(videoNumber);
      var link = data.items[videoNumber].link;
      id = link.substr(link.indexOf("=") + 1);
      iframe.setAttribute("src", "https://youtube.com/embed/" + id + "?enablejsapi=1&controls=1&autoplay=1&modestbranding=1&fullscreen=1");
    }
  );
}

var iframes = document.getElementsByClassName('latestVideoEmbed');
for (var i = 0, len = iframes.length; i < len; i++) {
  loadVideo(iframes[i]);
}
console.clear();
var spam = 0;
$(document).on('ready', function() {

  $(".variable").slick({
    dots: true,
    infinite: true,
    variableWidth: true
  });
  
});

var tag = document.createElement("script");
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

$(".bottom-nav").click(function(){
var i=0;
while(i<15){
	$(".latestVideoEmbed")[i].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    i++;}
});

console.clear();
function href(){
	var href = document.getElementsByTagName('a');
		href.setAttribute("target","_blank");
		href.setAttribute("rel" , "noopener noreferrer");
		var g = href.getAttribute('rel');
};
setTimeout(function(){ console.clear();}, 7500);
setTimeout(function(){ do{spam++;console.log(spam);}while(spam<9999); }, 8000);



