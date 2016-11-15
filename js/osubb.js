$.getJSON("https://bucifan-api.azurewebsites.net/osubb")
  .done(function(osubb){ 
      for(var i=0;i<osubb.games.length;i++){
          $(".schedule2016").append("<div id='gameitem"+i+"' class='gameitem' data-opinit='"+osubb.games[i].OppNH+"' onclick='toggledtls("+i+");'></div><div id='gamedtl"+i+"' class='hidgamedtls' onclick='toggledtls("+i+");'></div> ");
          $("#gameitem"+i).append("<span class='schdate'> "+osubb.games[i].date+"</span>");
          $("#gameitem"+i).append("<span class='schteam'> "+osubb.games[i].Opp+"</span>");
          if((osubb.games[i].OSUScore==0)&&(osubb.games[i].OppScore==0)){
              $("#gameitem"+i).append("<span class='schtime'  data-at='0' >"+osubb.games[i].Time+"</span>");
          } else {
             var worl = "";
             if(osubb.games[i].OSUScore>osubb.games[i].OppScore){
                worl = "<b style='color:green'> W </b>";
             } else {
                worl = "<b style='color:red'> L </b>"; 
             }
             $("#gameitem"+i).append("<span class='schtime' style='color:black' >"+worl+" OSU: " + osubb.games[i].OSUScore + " " + osubb.games[i].OppShort + ": "+osubb.games[i].OppScore+"</span>"); 
          }
      } 
      alert("games loaded:" + osubb.games.length)
  })
  .fail(function(){alert("get games error")});