(function() {
  function a(a) {
    try {
      var c = new URL(a.src || "http://unknown-src").origin;
      b.includes(c) || (a.parentElement.removeChild(a), console.log("REMOVED AD:", c))
    } catch (a) {
      console.log("ERROR REMOVING AD:", a)
    }
  }
  const b = ["https://disqus.com", document.origin];
  window.setInterval(function() {
    for (var b of document.getElementsByTagName("iframe")) a(b)
  }, 300)
})();
window.setInterval(function yt() {
  if (document.URL.indexOf("advertisements", "advertisement", "ads.google", "servlet", "proxy") != -1) {
    history.back()
  } else {}
}, 300);
if (document.URL.indexOf("youtube.com") != -1) {
  const clear = (() => {
    const defined = v => v !== null && v !== undefined;
    const timeout = setInterval(() => {
      const ad = [...document.querySelectorAll('.ad-showing')][0];
      if (defined(ad)) {
        const video = document.querySelector('video');
        if (defined(video)) {
          video.currentTime = video.duration;
        }
      }
    }, 500);
    return function() {
      clearTimeout(timeout);
    }
  })();
} else {
  function yt1() {
    let vid = document.getElementsByTagName("video")[0];
    vid.childElement.remove();
  }
  window.setInterval(yt1, 300);
}
var classes = document.getElementsByClassName('fs-close-button fs-close-button-sticky');

function press() {
  Rate.click()
}
var Rate = classes[0];
window.setInterval(press, 300);
