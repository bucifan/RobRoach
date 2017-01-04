$.getJSON("https://bucifan-api.azurewebsites.net/osubb")
  .done(function(osubb){ 
      $(".schedule2016").append("<div class='gamesContainer'></div>");
      var wins=0, losses=0,btwins=0,btlosses=0;
      var nxtgame=false;
      for(var i=0;i<osubb.games.length;i++){
          $(".gamesContainer").append("<div id='gameitem"+i+"' class='gameitem' data-opinit='"+osubb.games[i].OppNH+"' );'></div><div id='gamedtl"+i+"' class='hidgamedtls' onclick='toggledtls("+i+");'></div> ");
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
              if(!nxtgame){
                $("#gameitem"+i).attr('style','background:#eef0f0');
                nxtgame=true;
              }
          } else {
             var worl = "";
             if(osubb.games[i].OSUScore>osubb.games[i].OppScore){
                worl = "<b style='color:green'> W </b>";
                wins++;
                if(osubb.games[i].BTG=="1"){
                  btwins++;
                }
             } else {
                worl = "<b style='color:red'> L </b>"; 
                losses++;
                 if(osubb.games[i].BTG=="1"){
                  btlosses++;
                }
             }
             $("#gameitem"+i).append("<span class='schtime' style='color:black' >"+worl+" OSU: " + osubb.games[i].OSUScore + " " + osubb.games[i].OppShort + ": "+osubb.games[i].OppScore+"</span>"); 
          }
      } 
      $("#schhrspan").append(" | "+wins + " - " + losses+" ("+ btwins+" - "+ btlosses +") " );
      $(".scheduleHdr").before("<a href='http://bucifan-empty-webapp.azurewebsites.net/flashcard.html' class='btn btn-default'>OSU Football Schedule</a>");
       $(".scheduleHdr").before("<a href='http://robroach.azurewebsites.net/flashcard.html' class='btn btn-default'>RobRoach Home</a>");
      //alert("games loaded:" + osubb.games.length)
  })
  .fail(function(){alert("get games error")});