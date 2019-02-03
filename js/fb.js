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
  $(".currYearnav").html(SYear);
  getGames();
  
}
function nextSYear(){
    SYear++;
    $(".yrseldtls").html("<span class='loadingData'>Loading schedule for year: " + SYear+ "</span>");
    $(".currYearnav").html(SYear);
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
    $(".loadingData").slideUp(500,function(){$(".loadingData").remove();})
}
function getGames(){
$.getJSON("https://bucifan-api.azurewebsites.net/fbs/"+SYear)
  .done(function(season){ 
      for(var i=0;i<season.games.length;i++){
          $(".yrseldtls").append("<div id='gameitem"+i+"' class='gameitem' data-opinit='"+season.games[i].Opp+"' onclick='toggledtls("+i+");'></div><div id='gamedtl"+i+"' class='hidgamedtls' onclick='toggledtls("+i+");'></div> ");
          $("#gameitem"+i).append("<div class='gameitemleft'><span class='schdate'> "+season.games[i].GameDate+"</span></div><div class='gameitemmid'><img src='/img/logos/"+season.games[i].OppImage+"' /></div>");
          $("#gameitem"+i).append("<div class='gameitemright'><span class='schteam'>"+season.games[i].Opp+"</span></div>");
          //if(i==11){
        //      for(var j=0;j<4;j++){ 
        //        $("#gamedtl"+i).append("<img src='/img/screwblueBrutusStompTSUN.gif'/>");
        //      }
        //  }
        //  if((games.y2017[i].OSUScore==0)&&(games.y2017[i].OppScore==0)){
        //      $("#gameitem"+i).append("<span class='schtime'  data-at='0' >"+games.y2017[i].Start+"</span>");
        //  } else {
        //     var worl = "";
         //    if(games.y2017[i].OSUScore>games.y2017[i].OppScore){
        //        worl = "<b style='color:green'> W </b>";
         //    } else {
         //       worl = "<b style='color:red'> L </b>"; 
         //    }
        //     $("#gameitem"+i).append("<span class='schtime' style='color:black' >"+worl+" OSU: " + games.y2017[i].OSUScore + " " + games.y2017[i].OppShort + ": "+games.y2017[i].OppScore+"</span>"); 
        //     $("#gamedtl"+i).append("<div style='float:left'><b> Total Yards: </b> " + games.y2017[i].tyards + "<br/><b> Passing Yards: </b> " + games.y2017[i].pyards + "<br/><b> Rushing Yards: </b> " + games.y2017[i].ryards + "<br/></div>");
        //     $("#gamedtl"+i).append("<div style='float:right'><b> Average Yards per play: </b> " + games.y2017[i].ypp + "<br/><b> Yards given up: </b> " + games.y2017[i].ygivenup + "<br/><br/></div>");
        //     $("#gamedtl"+i).append("<br/><div style='width:100%;text-align:left;display:block'><b> Notes: </b> " + games.y2017[i].mynotes + "<br/></div>");
          }
          
      //} 
      //alert("games loaded:" + games.y2016.length)
      setTimeout(loadScheduleItems, 500);
  })
  .fail(function(){alert("get games error")});
}
