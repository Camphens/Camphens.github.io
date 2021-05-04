document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      switch(anchor.getAttribute("href")){
        case "#about":
          $('.slide').css("-webkit-transform" , "translateX(0%)");
          $('.slide').css("transform" , "translateX(0%)");

          $('.projects').css("opacity" , "0");
          $('.projects').css("-webkit-transition" , "opacity 500ms");
          $('.projects').css("transition" , "opacity 500ms");

          $('.about').css("opacity" , "1");
          $('.about').css("-webkit-transition" , "opacity 800ms 500ms");
          $('.about').css("transition" , "opacity 800ms 500ms");

          $('.projects-slide').css("height" , "calc(100vh - 135px)");
          $('.projects-slide').css("overflow" , "hidden");
          break;
        
        case "#projects":
          $('.slide').css("-webkit-transform" , "translateX(-100%)");
          $('.slide').css("transform" , "translateX(-100%)");

          $('.projects').css("opacity" , "1");
          $('.projects').css("-webkit-transition" , "opacity 800ms 500ms");
          $('.projects').css("transition" , "opacity 800ms 500ms");

          $('.about').css("opacity" , "0");
          $('.about').css("-webkit-transition" , "opacity 500ms");
          $('.about').css("transition" , "opacity 500ms");

          $('.projects-slide').css("height" , "fit-content");
          $('.projects-slide').css("overflow" , "auto");
          break;
        
        default:
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
      }
  });
});