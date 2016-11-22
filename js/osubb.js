$.getJSON("https://bucifan-api.azurewebsites.net/osubb")
  .done(function(osubb){ 
      var wins=0, losses=0;
      for(var i=0;i<osubb.games.length;i++){
          $(".schedule2016").append("<div id='gameitem"+i+"' class='gameitem' data-opinit='"+osubb.games[i].OppNH+"' );'></div><div id='gamedtl"+i+"' class='hidgamedtls' onclick='toggledtls("+i+");'></div> ");
          $("#gameitem"+i).append("<span class='schdate'> "+osubb.games[i].date+"</span>");
          var awayTxt="";
          if(osubb.games[i].Loc == "Away"){
            awayTxt="@"; 
          }
          $("#gameitem"+i).append("<span class='schteam'> <img src='/img/bball/"+osubb.games[i].OppImage+"' class='teamimg'/> <span class='homeaway'>"+awayTxt+" </span>" +osubb.games[i].Opp+"</span>");
          if((osubb.games[i].OSUScore==0)&&(osubb.games[i].OppScore==0)){
              $("#gameitem"+i).append("<span class='schtime' id='gamespan"+i+"'  data-at='0' >"+osubb.games[i].Time+"</span>");
              switch(osubb.games[i].TV){
                case "espn":
                  $("#gamespan"+i).append("<img src='/img/bball/espn_s.png' style='height:20px;'>");
                  break;
                case "espn2":
                  $("#gamespan"+i).append("<img src='/img/bball/espn2_s.png' style='height:20px;'>");
                  break;
                case "espn3":
                  $("#gamespan"+i).append("<img src='/img/bball/espn3_s.png' style='height:20px;'>");
                  break;
                case "btn":
                  $("#gamespan"+i).append("<img src='/img/bball/btn_s.png' style='height:20px;'>");
                  break;
                case "cbs":
                  $("#gamespan"+i).append("<img src='/img/bball/cbs_s.png' style='height:20px;'>");
                  break;
                
              }
          } else {
             var worl = "";
             if(osubb.games[i].OSUScore>osubb.games[i].OppScore){
                worl = "<b style='color:green'> W </b>";
                wins++;
             } else {
                worl = "<b style='color:red'> L </b>"; 
                losses++;
             }
             $("#gameitem"+i).append("<span class='schtime' style='color:black' >"+worl+" OSU: " + osubb.games[i].OSUScore + " " + osubb.games[i].OppShort + ": "+osubb.games[i].OppScore+"</span>"); 
          }
      } 
      $("#schhrspan").append(" | "+wins + " - " + losses);
      $(".scheduleHdr").before("<a href='http://bucifan-empty-webapp.azurewebsites.net/flashcard.html' class='btn btn-default'>OSU Football Schedule</a>");
      //alert("games loaded:" + osubb.games.length)
  })
  .fail(function(){alert("get games error")});