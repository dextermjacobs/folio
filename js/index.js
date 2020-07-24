$(document).ready(function() {
    $('#toggle').on('click', function() {
        $('#photos-random').fadeOut("slow", "linear", function() {
            $('.botui-app-container').addClass("hidden");

        });
    });
});

$(document).ready(function() {
    $('#toggle').on('click', function() {
        $(".list").removeClass("hidden", "slow", "linear");
        $("#grid").removeClass("active", "slow", "linear");
    });
});

$(document).ready(function() {
    $('#toggle').on('click', function() {
        $("#toggle").addClass("active", "slow", "linear");
    });
});




// Change Background
$(document).ready(function() {
    var d = new Date();
    var n = d.getHours();
    if (n > 19 || n < 6)
        // If time is after 7PM or before 6AM, apply night theme to ‘body’
        document.body.className = "night";
    else if (n > 16 && n < 19)
        // If time is between 4PM – 7PM sunset theme to ‘body’
        document.body.className = "sunset";
    else
        // Else use ‘day’ theme
        document.body.className = "day";
});

var viewWidth,
    viewHeight,
    canvas = document.getElementById("canvas"),
    ctx;

// change these settings
var patternSize = 64,
    patternScaleX = 3,
    patternScaleY = 1,
    patternRefreshInterval = 4,
    patternAlpha = 26; // int between 0 and 255,

var patternPixelDataLength = patternSize * patternSize * 4,
    patternCanvas,
    patternCtx,
    patternData,
    frame = 0;

window.onload = function() {
    initCanvas();
    initGrain();
    requestAnimationFrame(loop);
};

// create a canvas which will render the grain
function initCanvas() {
    viewWidth = canvas.width = canvas.clientWidth;
    viewHeight = canvas.height = canvas.clientHeight;
    ctx = canvas.getContext('2d');

    ctx.scale(patternScaleX, patternScaleY);
}

// create a canvas which will be used as a pattern
function initGrain() {
    patternCanvas = document.createElement('canvas');
    patternCanvas.width = patternSize;
    patternCanvas.height = patternSize;
    patternCtx = patternCanvas.getContext('2d');
    patternData = patternCtx.createImageData(patternSize, patternSize);
}

// put a random shade of gray into every pixel of the pattern
function update() {
    var value;

    for (var i = 0; i < patternPixelDataLength; i += 4) {
        value = (Math.random() * 80) | 0;

        patternData.data[i] = value;
        patternData.data[i + 1] = value;
        patternData.data[i + 2] = value;
        patternData.data[i + 3] = patternAlpha;
    }

    patternCtx.putImageData(patternData, 0, 0);
}

// fill the canvas using the pattern
function draw() {
    ctx.clearRect(0, 0, viewWidth, viewHeight);

    ctx.fillStyle = ctx.createPattern(patternCanvas, 'repeat');
    ctx.fillRect(0, 0, viewWidth, viewHeight);
}

function loop() {
    if (++frame % patternRefreshInterval === 0) {
        update();
        draw();
    }

    requestAnimationFrame(loop);
}

// Viedo Player Button overlay

$('video').parent().click(function () {
  if($(this).children("video").get(0).paused){        $(this).children("video").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children("video").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});



// NEW NEW NEW 10.02.2019
class Demo {
  constructor() {
    this.initCursor();
    this.initHovers();
  }

  initCursor() {
    const { Back } = window;
    this.outerCursor = document.querySelector(".circle-cursor--outer");
    this.innerCursor = document.querySelector(".circle-cursor--inner");
    this.outerCursorBox = this.outerCursor.getBoundingClientRect();
    this.outerCursorSpeed = 0;
    this.easing = Back.easeOut.config(1.7);
    this.clientX = -100;
    this.clientY = -100;
    this.showCursor = false;

    const unveilCursor = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      TweenMax.set(this.outerCursor, {
        x: this.clientX - this.outerCursorBox.width / 2,
        y: this.clientY - this.outerCursorBox.height / 2
      });
      setTimeout(() => {
        this.outerCursorSpeed = 0.2;
      }, 100);
      this.showCursor = true;
    };
    document.addEventListener("mousemove", unveilCursor);

    document.addEventListener("mousemove", e => {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    });

    const render = () => {
      TweenMax.set(this.innerCursor, {
        x: this.clientX,
        y: this.clientY
      });
      if (!this.isStuck) {
        TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });
      }
      if (this.showCursor) {
        document.removeEventListener("mousemove", unveilCursor);
      }
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  }

  initHovers() {
    const handleMouseEnter = e => {
      this.isStuck = true;
      const target = e.currentTarget;
      const box = target.getBoundingClientRect();
      this.outerCursorOriginals = {
        width: this.outerCursorBox.width,
        height: this.outerCursorBox.height
      };
      TweenMax.to(this.outerCursor, 0.2, {
        x: box.left,
        y: box.top,
        width: box.width,
        height: box.height,
        opacity: 0.4,
        borderColor: "#000"
      });
    };

    const handleMouseLeave = () => {
      this.isStuck = false;
      TweenMax.to(this.outerCursor, 0.2, {
        width: this.outerCursorOriginals.width,
        height: this.outerCursorOriginals.height,
        opacity: 0.2,
        borderColor: "#000"
      });
    };

    const mainNavHoverTween = TweenMax.to(this.outerCursor, 0.3, {
      backgroundColor: "#000",
      ease: this.easing,
      paused: true,
      opacity: 0.2,
    });

    const mainNavMouseEnter = () => {
      this.outerCursorSpeed = 0;
      TweenMax.set(this.innerCursor, { opacity: 0 });
      mainNavHoverTween.play();
    };

    const mainNavMouseLeave = () => {
      this.outerCursorSpeed = 0.2;
      TweenMax.set(this.innerCursor, { opacity: 1 });
      mainNavHoverTween.reverse();
    };

    const mainNavLinks = document.querySelectorAll(".page a, .page img");
    mainNavLinks.forEach(item => {
      item.addEventListener("mouseenter", mainNavMouseEnter);
      item.addEventListener("mouseleave", mainNavMouseLeave);
    });
  }
}

const demo = new Demo();


// $(document).ready(function(){
//
//     $(".botui").scroll(function(){
//         if($(this).scrollTop() > 10){
//             $(".botui-message").css({"opacity" : "0"})
//         }
//         else {
//             $(".botui-message").css({"opacity" : "1"})
//         }
//     })
// })
