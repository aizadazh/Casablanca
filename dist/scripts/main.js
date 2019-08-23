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
  // Menu
  

    const anchors = document.querySelectorAll('a[href*="#"]');
        for (let anchor of anchors) {
            anchor.addEventListener("click", function(e) {
            e.preventDefault();
        
            const blockID = anchor.getAttribute("href");
        
            if (anchor.getAttribute("href") === "#") {
                document.querySelector("body").scrollIntoView({
                behavior: "smooth",
                block: "start"
                });
            } else {
                document.querySelector("" + blockID).scrollIntoView({
                behavior: "smooth",
                block: "start"
                });
            }
  });
}
    $('.nav-btn').on('click', function(e) {
        e.preventDefault();
        $('.main-nav').toggleClass('main-nav-active');
    })

    $('.nav-list a').click(function() {
        if ( $('.main-nav').hasClass('main-nav-active')) {
            $('.main-nav').removeClass('main-nav-active');
            $('.nav-btn').removeClass('nav-btn-active');
        }
    })
    $('body').click(function(e) {
        $('.main-nav').removeClass('main-nav-active');
        $('.nav-btn').removeClass('nav-btn-active');        
    })
    $('.main-nav').click(function(e) {
        e.stopPropagation();
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $('.main-nav').removeClass('main-nav-active');
            $('.nav-btn').removeClass('nav-btn-active');
        }
    });
    $('.nav-btn').on('click', function(e) {
        e.preventDefault;
        $(this).toggleClass('nav-btn-active');
    });
  })
  
  
  
  
  