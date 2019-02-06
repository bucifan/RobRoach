$(document).ready(function(){
    $(".contactFooter").append("<br/> ua:" + navigator.userAgent );

    var lastMv = new moment("11/26/2011");
    var tdy = new moment();
    var daysFlMv = tdy.diff(lastMv, 'days');
    $(".lastMv").html("It has been <span style='color:maroon'>"+daysFlMv+"</span> days since TTUN last beat Ohio State!")
    console.log("M:" + daysFlMv);
    
/*  preload([
    '/img/rer-u.png',
    '/img/rer-ur.png',
    '/img/rer-ul.png',
    '/img/rer-r.png',
    '/img/rer-l.png',
    '/img/rer-dl.png',
    '/img/rer-dr.png',
  ]); 
  
  var pwidth = window.innerWidth ||
            html.clientWidth  ||
            body.clientWidth  ||
            screen.availWidth;

  var pheight = window.innerHeight ||
             html.clientHeight  ||
             body.clientHeight  ||
             screen.availHeight;
  var hheight = parseInt(pheight/2);
  var hwidth = parseInt(pwidth/2)   
   $(document).mousemove(function(e){
      //changeImg(e.pageX,e.pageY,750,250,1050,600,'mepic');
      changeImg(e.pageX,e.pageY,hheight,400,hwidth,420,'mepic');
     
   }); */
});


function changeImg(x,y,cblf,cbtp,cbrt,cbbt,iid)
{
       $('#xyc').html(x+', '+y +' | '+cblf+', '+cbtp+', '+cbrt+', '+cbbt+', '+iid);
      if((x<cblf)&&(y<cbtp))
      { $("#"+iid).attr('src', '/img/rer-ul.png');}
      if(((x>cblf-1)&&(x<cbrt+1))&&(y<cbtp))
      { $("#"+iid).attr('src', '/img/rer-u.png');}
      if((x>cbrt)&&(y<cbbt))
      { $("#"+iid).attr('src', '/img/rer-ur.png');}
      
      // middle zones
      if(((y>cbtp)&&(y<cbbt))&&(x<cblf))
      { $("#"+iid).attr('src', '/img/rer-l.png');}
      if(((y>cbtp)&&(y<cbbt))&&((x>cblf-1)&&(x<cbrt+1)))
      { $("#"+iid).attr('src', '/img/rer.png');}
      if(((y>cbtp)&&(y<cbbt))&&(x>cbrt))
      { $("#"+iid).attr('src', '/img/rer-r.png');}
      
      //bottom zones
      if((x<cblf)&&(y>cbbt))
      { $("#"+iid).attr('src', '/img/rer-dr.png');}
      if(((x>cblf-1)&&(x<cbrt+1))&&(y>cbbt))
      { $("#"+iid).attr('src', '/img/rer-d.png');}
      if((x>cbrt)&&(y>cbbt))
      { $("#"+iid).attr('src', '/img/rer-dl.png');}

}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}

function popgoblow(){
     $(".goblow-body").html("");
     var rdm = Math.floor((Math.random() *  30)); 
     $(".goblow-body").append("<img src='/img/goblow/goblow ("+rdm+").jpg' style='max-width:500px;box-shadow:5px 5px 5px white;' id='goblowimg'/>");
     $("#goblowmodal").modal('show');
}
function gotoLinkedIn(){
    location.href="https://www.linkedin.com/in/roberoach/";
}