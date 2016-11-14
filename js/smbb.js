setTimeout(rotateM, 500);

function rotateM(){
    var logo = $("#smlogo");
    TweenLite.set(".cardWrapper", {perspective:800});
    TweenLite.set(".loadingcard", {transformStyle:"preserve-3d"});
    TweenLite.set(".back", {rotationY:-180});
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});

    $(".cardWrapper").hover(
      function() {
        TweenLite.to($(this).find(".card"), 1.2, {rotationY:180, ease:Back.easeOut});
      },
      function() {
        TweenLite.to($(this).find(".card"), 1.2, {rotationY:0, ease:Back.easeOut});  
      }
    );
}