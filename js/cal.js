var calendarUrl = "https://calendar.google.com/calendar/ical/bucifan%40gmail.com/private-531ebe4bc8de406c1eaf2132085f1be1/basic.ics";
$.get(calendarUrl).then(function (data) {
  // parse the ics data
  var jcalData = ICAL.parse(data.trim());
  var comp = new ICAL.Component(jcalData);
  var eventComps = comp.getAllSubcomponents("vevent");
  // console.log(JSON.stringify(eventComps));
  // map them to FullCalendar events
  var events = $.map(eventComps, function (item) {
    if (item.getFirstPropertyValue("class") == "PRIVATE") {
        return null;
    }
    else {
        return {
            "title": item.getFirstPropertyValue("summary") + ";",
            "start": item.getFirstPropertyValue("dtstart").toJSDate(),
            "end": item.getFirstPropertyValue("dtend").toJSDate(),
            "location": item.getFirstPropertyValue("location")
        };
    }
  });

  // refresh the control
  //calendarCtrl.fullCalendar('destroy');
  $(".calendar").fullCalendar({
    events: events,
    timeFormat: "H:mm",
    displayEventEnd: true,
    eventRender: function (event, element) {
        // console.log(element);
        // append location
        if (event.location != null && event.location != "") {
            element.append("<span>" + event.location + "</span>");
        }
    },
    header: {
        left: 'title',
        center: '',
        right: 'today,month,basicWeek,listDay prev,next'
    }
  });
});