var spd=2;
rotateM();
var ml;

function rotateM(){
    var logo = $("#smlogo");
    TweenLite.set(".cardWrapper", {perspective:400});
    TweenLite.set(".loadingcard", {transformStyle:"preserve-3d"});
    TweenLite.set(".back", {rotationY:-180});
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
    var rty = 180;

    TweenLite.to($(".loadingcard"), spd, {rotationY:180});
    ml = setInterval(function(){
        rty=rty+180;
        TweenLite.to($(".loadingcard"), spd, {rotationY:rty});
    },2100 );
    //setTimeout(function(){ setInterval(function(){TweenLite.to($(".loadingcard"), 2, {rotationY:180});},2100 )},2100);

    $(".cardWrapper").hover(
      function() {
        clearInterval(ml);
        spd=0.5;
        ml = setInterval(function(){
                rty=rty+180;
                TweenLite.to($(".loadingcard"), spd, {rotationY:rty});
             },500 );
      },
      function() {
        clearInterval(ml);
        rty=rty+180;
        TweenLite.to($(".loadingcard"), spd, {rotationY:rty});
        spd=2;
        ml = setInterval(function(){
                rty=rty+180;
                TweenLite.to($(".loadingcard"), spd, {rotationY:rty});
             },2100 );  
      }
    );
}