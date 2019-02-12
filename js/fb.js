/*global $*/
/*global TweenLite*/
var SYear = 2019;
$(".yrseldtls").html("Year: " + SYear);
getGames();

function gohome(){
  location = "/";
}

function prevSYear(){
  SYear--;
  $(".yrseldtls").html("<span class='loadingData'>Loading schedule for year: " + SYear+ "</span>");
  $("#currYearnav").html(SYear);
  getGames();
  
}
function nextSYear(){
    SYear++;
    $(".yrseldtls").html("<span class='loadingData'>Loading schedule for year: " + SYear+ "</span>");
    $("#currYearnav").html(SYear);
    getGames();
}

function loadScheduleItems(){
    var game1 = $("#gameitem0");
    var game2 = $("#gameitem1");
    var game3 = $("#gameitem2");
    var game4 = $("#gameitem3");
    var game5 = $("#gameitem4");
    var game6 = $("#gameitem5");
    var game7 = $("#gameitem6");
    var game8 = $("#gameitem7");
    var game9 = $("#gameitem8");
    var game10 = $("#gameitem9");
    var game11 = $("#gameitem10");
    var game12 = $("#gameitem11");
    var game13 = $("#gameitem12");

    TweenLite.to(game1,1,{opacity:1.0});
    TweenLite.to(game2,1,{opacity:1.0,  delay:.5});
    TweenLite.to(game3,1,{opacity:1.0,  delay:1});
    TweenLite.to(game4,1,{opacity:1.0,  delay:1.5});
    TweenLite.to(game5,1,{opacity:1.0,  delay:2});
    TweenLite.to(game6,1,{opacity:1.0,  delay:2.5});
    TweenLite.to(game7,1,{opacity:1.0,  delay:3});
    TweenLite.to(game8,1,{opacity:1.0,  delay:3.5});
    TweenLite.to(game9,1,{opacity:1.0,  delay:4});
    TweenLite.to(game10,1,{opacity:1.0,  delay:4.5});
    TweenLite.to(game11,1,{opacity:1.0,  delay:5});
    TweenLite.to(game12,1,{opacity:1.0,  delay:5.5});
    TweenLite.to(game13,1,{opacity:1.0,  delay:5.5});
    if( $("#gameitem13").length>0){
         var game14 = $("#gameitem13");
         TweenLite.to(game14,1,{opacity:1.0,  delay:6.0});
    }
    if( $("#gameitem14").length>0){
         var game15 = $("#gameitem14");
         TweenLite.to(game15,1,{opacity:1.0,  delay:6.0});
    }
    $(".loadingData").slideUp(500,function(){$(".loadingData").remove();})
}
function getGames(){
$.getJSON("https://bucifan-api.azurewebsites.net/fbs/"+SYear)
  .done(function(season){ 
      for(var i=0;i<season.games.length;i++){
          $(".yrseldtls").append("<div id='gameitem"+i+"' class='gameitem' data-opinit='"+season.games[i].Opp+"' onclick='toggledtls("+i+");'></div><div id='gamedtl"+i+"' class='hidgamedtls' onclick='toggledtls("+i+");'></div> ");
          $("#gameitem"+i).append("<div class='gameitemleft'><span class='schdate' > "+season.games[i].GameDate+"</span></div><div class='gameitemmid' id='gameid"+i+"'><img src='/img/logos/"+season.games[i].OppImage+"' /></div>");
          $("#gameitem"+i).append("<div class='gameitemright'><span class='schteam'>"+season.games[i].Opp+"</span></div>");

        if((season.games[i].OSUScore!=0)&&(season.games[i].OppScore!=0)){
          var worl = "";
          if(season.games[i].OSUScore>season.games[i].OppScore){
            worl = "<b style='color:green'> W </b>";
          } else {
            worl = "<b style='color:red'> L </b>"; 
          }
          $("#gameid"+i).append("<span class='gresults' style='color:black' >"+worl+" OSU: " + season.games[i].OSUScore + " " + season.games[i].OppShort + ": "+season.games[i].OppScore+"</span>"); 
        }
      }    
      setTimeout(loadScheduleItems, 500);
  })
  .fail(function(){alert("get games error")});
}
