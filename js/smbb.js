rotateM();

function rotateM(){
    var logo = $("#smlogo");
    TweenLite.set(".cardWrapper", {perspective:400});
    TweenLite.set(".loadingcard", {transformStyle:"preserve-3d"});
    TweenLite.set(".back", {rotationY:-180});
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
    var rty = 180;
    TweenLite.to($(".loadingcard"), 2, {rotationY:180});
    setInterval(function(){
        rty=rty+180;
        TweenLite.to($(".loadingcard"), 2, {rotationY:rty});
      
    },2100 );
    //setTimeout(function(){ setInterval(function(){TweenLite.to($(".loadingcard"), 2, {rotationY:180});},2100 )},2100);

    $(".cardWrapper").hover(
      function() {
        TweenLite.to($(this).find(".loadingcard"), 1.2, {rotationY:180});
      },
      function() {
        TweenLite.to($(this).find(".loadingcard"), 1.2, {rotationY:360});  
      }
    );
}