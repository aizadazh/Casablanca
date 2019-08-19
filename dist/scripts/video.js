function videoPlay() {
  document.getElementById("video").innerHTML = "<div id='player'></div>";
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
      height: '420',
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




