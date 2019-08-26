$(document).ready(function(){
// Video section
function videoPlay() {
    document.getElementById("video__section").innerHTML = "<div id='player'></div>";
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  var player;
  
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '450',
        width: '100%',
        videoId: 'liJVSwOiiwg',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
  }
  
  function onPlayerReady(event) {
    event.target.playVideo();
  }
  var done = false;
  
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 5000);
        done = true;
    }
  }  
  function stopVideo() {
    player.stopVideo();
  }

// Work section
let categories = document.querySelectorAll(".work__section_categories button");
let works = document.querySelectorAll(".work");

categories.forEach(category => {
    category.addEventListener("click", function() {
      categories.forEach(e => (e.className = ""));
      this.className = "active";
  
      works.forEach(work => {
        if (work.className !== "work hidden") {
          work.className = "work hidden";
        }
        if (work.getAttribute("data-category") === category.value) {
          work.className = "work";
        } else if (category.value === "all") {
          work.className = "work";
        }
      });
    });
  });
});
  
  
  