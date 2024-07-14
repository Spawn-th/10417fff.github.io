var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop;
   if (st > lastScrollTop){
       // 아래로 스크롤
       document.body.classList.add("scroll-down");
       document.body.classList.remove("scroll-up");
   } else {
      // 위로 스크롤
      document.body.classList.remove("scroll-down");
      document.body.classList.add("scroll-up");
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
