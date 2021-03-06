//GLOBAL STUFF
var controller = new ScrollMagic.Controller();
var europeTextScene;

var pathId = 0;
var offset = -120;

var tooltipDataMap = {};

//start positions might be temorary
var startPosEurope = [-100, -100];
var startPosAfrica = [1200, -100];
var startPosAustralia = [1500, 1000];
var startPosSplit = [10, 10];


$(window).on("load", function() {
  reloadResponsiveStuff();


})


$(window).resize(function() {
  reloadResponsiveStuff();

});

function addLonelyTraveler() {

  var northSouthHeight = ($("#europeSvgCont").outerHeight()) + ($("#southSvgCont").outerHeight() + 800);


  console.log("creating lonely ship");
  d3.select(".southDegreeShips").append("div").attr("class", "southGroupLt");

  d3.select(".southGroupLt").append("div").attr("class", "lonelyShip")
    .style("top", "0 px")
    .style("left", responsiveX(1820) + "px");



  new ScrollMagic.Scene({
      triggerElement: "#southDegreeShips",
      duration: northSouthHeight
    })
    // animate color and top border in relation to scroll position
    .setTween(".lonelyShip", {
      top: northSouthHeight + "px",
      ease: CustomEase.create("custom", "M0,0,C0.306,0.176,0.472,0.455,0.496,0.496,0.574,0.63,0.754,0.858,1,1")
    }) // the tween durtion can be omitted and defaults to 1
    .addIndicators({
      name: "LONELY SHIP (duration: 4000)"
    }) // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: "#southDegreeShips",
      duration: northSouthHeight
    })
    // animate color and top border in relation to scroll position
    .setTween(".lonelyShip", {
      opacity: 0,
      ease: Power4.easeIn,
    }) // the tween durtion can be omitted and defaults to 1
    .addIndicators({
      name: "LONELY SHIP (duration: 4000)"
    }) // add indicators (requires plugin)
    .addTo(controller);


  d3.select(".southGroupLt").append("div").attr("class", "lonelyShipStroke")
    .style("top", "0 px")
    .style("left", responsiveX(1820) + "px");

  new ScrollMagic.Scene({
      triggerElement: "#southDegreeShips",
      duration: northSouthHeight
    })
    // animate color and top border in relation to scroll position
    .setTween(".lonelyShipStroke", {
      height: northSouthHeight + "px",
      ease: CustomEase.create("custom", "M0,0,C0.306,0.176,0.472,0.455,0.496,0.496,0.574,0.63,0.754,0.858,1,1"),
    }) // the tween durtion can be omitted and defaults to 1
    .addIndicators({
      name: "LONELY SHIP  STROKE (duration: 4000)"
    }) // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: "#southDegreeShips",
      duration: northSouthHeight
    })
    // animate color and top border in relation to scroll position
    .setTween(".lonelyShipStroke", {
      opacity: 0,
      ease: Power4.easeIn,
    }) // the tween durtion can be omitted and defaults to 1
    .addIndicators({
      name: "LONELY SHIP  STROKE (duration: 4000)"
    }) // add indicators (requires plugin)
    .addTo(controller);



}

function reloadResponsiveStuff() {
  var europeHeight = $("#europeSvgCont").outerHeight();
  var southHeight = $("#southSvgCont").outerHeight();

  $('.europeMap').css('height', europeHeight + "px");
  $('.southMap').css('height', southHeight + "px");
  $('.southDegreeShips').css('height', southHeight + "px");
  $('.atlanticText').css('top', europeHeight / 2 + 1000 + "px");
  $('.triggerAtlanticText').css('top', europeHeight / 2 + 1000 + "px");
  $('.bridgeText').css('top', europeHeight + southHeight + 1000 + "px");






  loadSouthDegrees();
  //controller.removeScene(europeTextScene);

  europeTextScene = new ScrollMagic.Scene({
      triggerElement: "#europeMap",
      duration: europeHeight / 3
    })
    .setPin("#europeT")
    .triggerHook(0.1)

    //.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);

  var europeTextScene = new ScrollMagic.Scene({
      triggerElement: ".triggerAtlanticText",
      duration: europeHeight / 3
    })
    .setPin("#atlanticT")
    .triggerHook(0.2)

    //.addIndicators({name: "1 (duration: 300)"}) // add indicators (requires plugin)
    .addTo(controller);


}

d3.csv("data/data.csv", function(error, aData) {
  if (error) {
    throw error;
  }
  aData.forEach(function(d) {
    d.startPos = +d.startPos;
    d.cp1x = +d.cp1x;
    d.cp1y = +d.cp1y;
    d.year1 = +d.year1;

    d.cp2x = +d.cp2x;
    d.cp2y = +d.cp2y;
    d.year2 = +d.year2;

    d.cp3x = +d.cp3x;
    d.cp3y = +d.cp3y;
    d.year3 = +d.year3;

    d.cp4x = +d.cp4x;
    d.cp4y = +d.cp4y;
    d.year4 = +d.year4;

    d.cp5x = +d.cp5x;
    d.cp5y = +d.cp5y;
    d.year5 = +d.year5;

    d.cp6x = +d.cp6x;
    d.cp6y = +d.cp6y;
    d.year6 = +d.year6;

    d.cp7x = +d.cp7x;
    d.cp7y = +d.cp7y;
    d.year7 = +d.year7;

    d.cp8x = +d.cp8x;
    d.cp8y = +d.cp8y;
    d.year8 = +d.year8;

    d.cp9x = +d.cp9x;
    d.cp9y = +d.cp9y;
    d.year9 = +d.year9;

    d.cp10x = +d.cp10x;
    d.cp10y = +d.cp10y;
    d.year10 = +d.year10;

    d.cp11x = +d.cp11x;
    d.cp11y = +d.cp11y;
    d.year11 = +d.year11;

    d.cp12x = +d.cp12x;
    d.cp12y = +d.cp12y;
    d.year12 = +d.year12;

    d.cp13x = +d.cp13x;
    d.cp13y = +d.cp13y;
    d.year13 = +d.year13;

    return d;

  });


  d3.text("data/dataTooltipMapExtended.csv", function(error, raw) {
    var dsv = d3.dsvFormat(';')
    var toolTipData = dsv.parse(raw)
    console.log(toolTipData);









    addExpeditions(aData);

    // $( ".shipPath" ).hover(function() {
    //   $(this).siblings().css({ stroke: "blue" });
    //   console.log("yaaaaaaa");
    // });

    $('.shipPathPseudo').hover(
      function() {
        id = $(this).attr('id');
        $that = $(this).siblings("#" + id); //get real element

        $that.addClass("pathHovering");
        $that.siblings(".shipPath").addClass("pathHovering");
        $that.parent().parent().siblings(".shipPath").addClass("soften");
        //get right line from second data file (tootltip)
        var hoverId = String(($that.parent().parent().attr('id')));
        var hoverNr = hoverId.replace("pathGroup_", "");
        hoverNr = hoverNr;

        d3.select(".tooltipText")
          .html(toolTipData[hoverNr].DURATION + "</br>" + "Captain: "+ toolTipData[hoverNr].CAPTAIN + "</br>" + toolTipData[hoverNr].INFORMATION)
          .style("opacity", 1)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY + 45) + "px")
          .style("visibility", "visible")
          .style("opacity", "1");

        d3.select(".tooltipHeader")
          .html(toolTipData[hoverNr].TITEL + " (" + toolTipData[hoverNr].COUNTRY + ")" )
          .style("opacity", 1)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY) + "px")
          .style("visibility", "visible")
          .style("opacity", "1");


      },
      function() {
        id = $(this).attr('id');
        $that = $(this).siblings("#" + id); //get real element

        $that.removeClass("pathHovering");
        $that.siblings().removeClass("pathHovering");
        $that.parent().parent().siblings().removeClass("soften");

        d3.select(".tooltipText")
          .style("opacity", "0");

        d3.select(".tooltipHeader")
          .style("opacity", "0");

      }
    );



    //SCROLLMAGIC FOR EVERYTHING BUT ANTARCTICA SHIPS
    // new ScrollMagic.Scene({
    //     triggerElement: ".europeMap",
    //     duration: 0
    //   })
    //   .setPin(".europeText", {
    //     pushFollowers: false
    //   })
    //   .addTo(controller)
    //   .triggerHook(0.2);


    // new ScrollMagic.Scene({
    //     triggerElement: ".atlanticMap",
    //     duration: 1000
    //   })
    //   .setPin(".atlanticText", {
    //     pushFollowers: false
    //   })
    //   .addTo(controller)
    //   .triggerHook(0.2);


    new ScrollMagic.Scene({
        triggerElement: ".antarcticaTrigger",
        duration: 10000
      })
      .setPin(".antarcticaMap", {
        pushFollowers: false
      })
      .addTo(controller)
      .triggerHook(0);

    new ScrollMagic.Scene({
        triggerElement: ".antarcticaTrigger",
        duration: 10000
      })
      .setPin(".shipCollection", {
        pushFollowers: false
      })
      .addTo(controller)
      .triggerHook(0);

    new ScrollMagic.Scene({
        triggerElement: ".antarcticaTrigger",
        duration: 10000
      })
      .setPin(".pathCollection", {
        pushFollowers: false
      })
      .addTo(controller)
      .triggerHook(0);

    // new ScrollMagic.Scene({
    //     triggerElement: '.southDegreeDraw',
    //     duration: 2300
    //   })
    //   .setPin(".southDegreeTimeline")
    //   .addTo(controller)
    //   .triggerHook(0.06);
  })
});


//FUNCTIONS
function addExpeditions(csvData) {

  i = 0;
  while (i < csvData.length) {


    var cp1x = csvData[i].cp1x;
    var cp1y = csvData[i].cp1y;
    var year1 = csvData[i].year1;
    var movement1 = csvData[i].movement1;

    var cp2x = csvData[i].cp2x;
    var cp2y = csvData[i].cp2y;
    var year2 = csvData[i].year2;
    var movement2 = csvData[i].movement2;

    var cp3x = csvData[i].cp3x;
    var cp3y = csvData[i].cp3y;
    var year3 = csvData[i].year3;
    var movement3 = csvData[i].movement3;

    var cp4x = csvData[i].cp4x;
    var cp4y = csvData[i].cp4y;
    var year4 = csvData[i].year4;
    var movement4 = csvData[i].movement4;

    var cp5x = csvData[i].cp5x;
    var cp5y = csvData[i].cp5y;
    var year5 = csvData[i].year5;
    var movement5 = csvData[i].movement5;

    var cp6x = csvData[i].cp6x;
    var cp6y = csvData[i].cp6y;
    var year6 = csvData[i].year6;
    var movement6 = csvData[i].movement6;

    var cp7x = csvData[i].cp7x;
    var cp7y = csvData[i].cp7y;
    var year7 = csvData[i].year7;
    var movement7 = csvData[i].movement7;

    var cp8x = csvData[i].cp8x;
    var cp8y = csvData[i].cp8y;
    var year8 = csvData[i].year8;
    var movement8 = csvData[i].movement8;

    var cp9x = csvData[i].cp9x;
    var cp9y = csvData[i].cp9y;
    var year9 = csvData[i].year9;
    var movement9 = csvData[i].movement9;

    var cp10x = csvData[i].cp10x;
    var cp10y = csvData[i].cp10y;
    var year10 = csvData[i].year10;
    var movement10 = csvData[i].movement10;

    var cp11x = csvData[i].cp11x;
    var cp11y = csvData[i].cp11y;
    var year11 = csvData[i].year11;
    var movement11 = csvData[i].movement11;

    var cp12x = csvData[i].cp12x;
    var cp12y = csvData[i].cp12y;
    var year12 = csvData[i].year12;
    var movement12 = csvData[i].movement12;

    var cp13x = csvData[i].cp13x;
    var cp13y = csvData[i].cp13y;
    var year13 = csvData[i].year13;
    var movement13 = csvData[i].movement13;

    var startPos = csvData[i].startPos;
    if (startPos == 1) {
      startPos = startPosEurope;
    } else if (startPos == 2) {
      startPos = startPosAfrica;
    } else if (startPos == 3) {
      startPos = startPosAustralia;
    } else if (startPos == 0) {
      startPos = startPosEurope;
    }

    var theTimeline = new TimelineMax();
    var endReached = false;

    //scrollmagic



    //create SHIPS
    d3.select(".shipCollection").append("div").attr("class", "ship").attr("id", "ship" + i);

    var createPathDiv = d3.select(".pathCollection").append("div").attr("class", "path").attr("id", "pathGroup_" + i);
    var createdPathSvgGroup = createPathDiv.append("svg").attr("class", "path").attr("id", "pathGroupSvg_" + i);



    if (isNaN(cp1x) == false) {

      var bezierPath = [{
          x: startPos[0] - offset,
          y: startPos[1] - offset
        },
        getMiddlePoints(startPos[0] - offset, startPos[1] - offset, cp1x - offset, cp1y - offset, movement1),
        {
          x: cp1x - offset,
          y: cp1y - offset
        }
      ];

      // var tempDiv = d3.select("#pathCollectionSVG");
      var tempPath = createdPathSvgGroup.append("path").attr("d", "M" + bezierPath[0].x + "," + bezierPath[0].y + " Q" + bezierPath[1].x + "," + bezierPath[1].y + " " + bezierPath[2].x + "," + bezierPath[2].y + "").attr("class", "shipPath").attr("id", "path" + i + "01");
      // var tempPath = createdPathSvgGroup.append("path").attr("d", "M" + bezierPath[0].x + "," + bezierPath[0].y + " Q" + bezierPath[1].x + "," + bezierPath[1].y + " " + bezierPath[2].x + "," + bezierPath[2].y + "").attr("class", "shipPathPseudo").attr("id", "path" + i + "01");
      var tempjqpath = $("path#" + "path" + i + "01");
      pathPrepare(tempjqpath);

      var startingYear = year1 - 1811 - 1;
      var pathDuration = 1;





      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        opacity: 1,
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);


    }


    if (isNaN(cp2x) == false) {
      //console.log("error here?")
      var bezierPath = [{
          x: cp1x - offset,
          y: cp1y - offset
        },
        getMiddlePoints(cp1x - offset, cp1y - offset, cp2x - offset, cp2y - offset, movement2),
        {
          x: cp2x - offset,
          y: cp2y - offset
        }
      ];



      var pathDuration = year2 - year1;
      var startingYear = 0; //to reset delay for the second and on...

      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        delay: startingYear
      })]);


    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year1, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp3x) == false) {
      var bezierPath = [{
          x: cp2x - offset,
          y: cp2y - offset
        },
        getMiddlePoints(cp2x - offset, cp2y - offset, cp3x - offset, cp3y - offset, movement3),
        {
          x: cp3x - offset,
          y: cp3y - offset
        }
      ];

      var pathDuration = year3 - year2;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year2, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp4x) == false) {
      var bezierPath = [{
          x: cp3x - offset,
          y: cp3y - offset
        },
        getMiddlePoints(cp3x - offset, cp3y - offset, cp4x - offset, cp4y - offset, movement4),
        {
          x: cp4x - offset,
          y: cp4y - offset
        }
      ];

      var pathDuration = year4 - year3;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year3, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp5x) == false) {
      var bezierPath = [{
          x: cp4x - offset,
          y: cp4y - offset
        },
        getMiddlePoints(cp4x - offset, cp4y - offset, cp5x - offset, cp5y - offset, movement5),
        {
          x: cp5x - offset,
          y: cp5y - offset
        }
      ];

      var pathDuration = year5 - year4;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year4, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp6x) == false) {
      var bezierPath = [{
          x: cp5x - offset,
          y: cp5y - offset
        },
        getMiddlePoints(cp5x - offset, cp5y - offset, cp6x - offset, cp6y - offset, movement6),
        {
          x: cp6x - offset,
          y: cp6y - offset
        }
      ];

      var pathDuration = year6 - year5;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year5, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp7x) == false) {
      var bezierPath = [{
          x: cp6x - offset,
          y: cp6y - offset
        },
        getMiddlePoints(cp6x - offset, cp6y - offset, cp7x - offset, cp7y - offset, movement7),
        {
          x: cp7x - offset,
          y: cp7y - offset
        }
      ];

      var pathDuration = year7 - year6;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year6, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp8x) == false) {
      var bezierPath = [{
          x: cp7x - offset,
          y: cp7y - offset
        },
        getMiddlePoints(cp7x - offset, cp7y - offset, cp8x - offset, cp8y - offset, movement8),
        {
          x: cp8x - offset,
          y: cp8y - offset
        }
      ];

      var pathDuration = year8 - year7;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year7, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp9x) == false) {
      var bezierPath = [{
          x: cp8x - offset,
          y: cp8y - offset
        },
        getMiddlePoints(cp8x - offset, cp8y - offset, cp9x - offset, cp9y - offset, movement9),
        {
          x: cp9x - offset,
          y: cp9y - offset
        }
      ];

      var pathDuration = year9 - year8;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year8, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp10x) == false) {
      var bezierPath = [{
          x: cp9x - offset,
          y: cp9y - offset
        },
        getMiddlePoints(cp9x - offset, cp9y - offset, cp10x - offset, cp10y - offset, movement10),
        {
          x: cp10x - offset,
          y: cp10y - offset
        }
      ];

      var pathDuration = year10 - year9;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year9, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp11x) == false) {
      var bezierPath = [{
          x: cp10x - offset,
          y: cp10y - offset
        },
        getMiddlePoints(cp10x - offset, cp10y - offset, cp11x - offset, cp11y - offset, movement11),
        {
          x: cp11x - offset,
          y: cp11y - offset
        }
      ];

      var pathDuration = year11 - year10;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year10, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp12x) == false) {
      var bezierPath = [{
          x: cp11x - offset,
          y: cp11y - offset
        },
        getMiddlePoints(cp11x - offset, cp11y - offset, cp12x - offset, cp12y - offset, movement12),
        {
          x: cp12x - offset,
          y: cp12y - offset
        }
      ];

      var pathDuration = year12 - year11;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year11, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    if (isNaN(cp13x) == false) {

      var bezierPath = [{
          x: cp12x - offset,
          y: cp12y - offset
        },
        getMiddlePoints(cp12x - offset, cp12y - offset, cp13x - offset, cp13y - offset, movement13),
        {
          x: cp13x - offset,
          y: cp13y - offset
        }
      ];

      var pathDuration = year13 - year12;
      var startingYear = 0; //to reset delay for the second and on...
      var tempjqpath = addPaths(bezierPath, i, createdPathSvgGroup);

      theTimeline.add([TweenMax.to('#ship' + i, pathDuration, {
        bezier: {
          type: 'quadratic',
          values: bezierPath
        },
        ease: Power3.easeInOut,
        delay: startingYear
      }), TweenMax.to(tempjqpath, pathDuration, {
        strokeDashoffset: 0,
        ease: Power3.easeInOut,
        delay: startingYear
      }, 0)]);
      //ONLY FOR THE LAST
      theTimeline.add(TweenMax.to('#ship' + i, 1911 - year13, {
        left: "+=0px"
      }));
      endReached = true;
      pathId = 0;
    } else {
      if (endReached == false) {
        theTimeline.add(TweenMax.to('#ship' + i, 1911 - year12, {
          left: "+=0px"
        }));
        endReached = true;
        pathId = 0;
      }
    }

    new ScrollMagic.Scene({
        triggerElement: '.antarctica',
        duration: 10000
      })
      .setTween(theTimeline)
      //  .addIndicators({name: "MAPtimeline"})
      .addTo(controller)
      .triggerHook(0.1);



    i++;

  }
}


function getMiddlePoints(x1, y1, x2, y2, movement) {
  if (x1 == x2 && y1 == y2) {
    var middlePoints = {
      x: x1,
      y: y1
    };
    return middlePoints;
  }
  if (movement == "ship") {
    //get distance
    var a = x1 - x2;
    var b = y1 - y2;
    var distanceToMiddle = (Math.sqrt(a * a + b * b)) / 1.2;
    //console.log("shiping");

    //get thirdPoint
    var nx = x2 - x1;
    var ny = y2 - y1;


    if (y1 > 700 && y2 > 700 && x1 < x2) {
      distanceToMiddle /= Math.sqrt(nx * nx + ny * ny) * 1;
    } else {
      distanceToMiddle /= Math.sqrt(nx * nx + ny * ny) * -1;
    }

    if (y1 > 250 && y1 < 300 && y2 > 500 && y2 < 540) {
      distanceToMiddle /= Math.sqrt(nx * nx + ny * ny) * 1;

    }
    //   else {
    //     distanceToMiddle /= Math.sqrt(nx * nx + ny * ny) * -1;
    //   }
    // }
    // else {
    //   if (x1<x2) {
    //     distanceToMiddle /= Math.sqrt(nx * nx + ny * ny) * -1;
    //   }
    //   else {
    //     distanceToMiddle /= Math.sqrt(nx * nx + ny * ny) * 1;
    //   }
    // }

    //change 1 for left/right?
    //get middlePoint
    var middlePoints = {
      x: x1 + nx / 2 - ny * distanceToMiddle,
      y: y1 + ny / 2 + nx * distanceToMiddle
    };



  } else {

    //console.log("footing");
    var middlePoints = {
      x: ((x1 + x2) / 2),
      y: ((y1 + y2) / 2)
    };


  }
  return middlePoints;

}

function getMiddlePointsWalking(x1, y1, x2, y2) {
  var middlePoints = {
    x: ((x1 + x2) / 2),
    y: ((y1 + y2) / 2)
  };
  return middlePoints;
}

function addPaths(bezierPath, i, pathGroupSvg) {
  pathGroupSvg.append("path").attr("d", "M" + bezierPath[0].x + "," + bezierPath[0].y + " Q" + bezierPath[1].x + "," + bezierPath[1].y + " " + bezierPath[2].x + "," + bezierPath[2].y + "").attr("class", "shipPath").attr("id", "path" + i + "_" + pathId);
  pathGroupSvg.append("path").attr("d", "M" + bezierPath[0].x + "," + bezierPath[0].y + " Q" + bezierPath[1].x + "," + bezierPath[1].y + " " + bezierPath[2].x + "," + bezierPath[2].y + "").attr("class", "shipPathPseudo").attr("id", "path" + i + "_" + pathId);
  var tempjqpath = $("path#" + "path" + i + "_" + pathId);
  pathPrepare(tempjqpath);
  pathId++;
  return tempjqpath;

}

function pathPrepare($el) {
  var lineLength = $el[0].getTotalLength();
  $el.css("stroke-dasharray", lineLength);
  $el.css("stroke-dashoffset", lineLength);

}

function responsiveY(degreeSouth) {
  var cordFullHeight = 80;
  var pixFullHeight = $("#southSvgCont").outerHeight();
  var calculatedHeight = Math.round(pixFullHeight / cordFullHeight * degreeSouth);
  //console.log("heo" + calculatedHeight);
  return calculatedHeight;

}

function responsiveX(yearSouth) {
  var startYear = 1400;
  var endYear = 1900;
  var yearFullWidth = endYear - startYear;
  var yearSouthInTimeline = yearSouth - startYear;
  var pixFullWidth = $("#southDegreeShips").innerWidth();
  var calculatedWidth = Math.round(pixFullWidth / yearFullWidth * yearSouthInTimeline);
  //console.log("heooo" + pixFullWidth);
  return calculatedWidth;

  //breite/yearFullWidth*year
}

function clearSouthDegree() {
  $(".southDegreeShips").empty();
}

function addSouthShip(data) {
  ix = 0;
  while (ix < data.length) {
    console.log(data[ix].date);

    d3.select(".southDegreeShips").append("div").attr("class", "sdGroup").attr("id", "southGroup" + String(ix))


    d3.select("#southGroup" + String(ix)).append("div").attr("class", "sdShip").attr("id", "southShip" + String(ix))
      .style("top", "0 px")
      .style("left", responsiveX(data[ix].date) + "px");

    new ScrollMagic.Scene({
        triggerElement: "#southDegreeShips",
        duration: responsiveY(data[ix].south)
      })
      // animate color and top border in relation to scroll position
      .setTween("#southShip" + String(ix), {
        top: responsiveY(data[ix].south) + "px",
        ease: CustomEase.create("custom", "M0,0,C0.306,0.176,0.472,0.455,0.496,0.496,0.574,0.63,0.754,0.858,1,1")
      }) // the tween durtion can be omitted and defaults to 1
      .addIndicators({
        name: "2 (duration: 300)"
      }) // add indicators (requires plugin)
      .addTo(controller);


    d3.select("#southGroup" + String(ix)).append("div").attr("class", "sdStroke").attr("id", "southStroke" + String(ix))
      .style("top", "0 px")
      .style("left", responsiveX(data[ix].date) + "px");

    new ScrollMagic.Scene({
        triggerElement: "#southDegreeShips",
        duration: responsiveY(data[ix].south)
      })
      // animate color and top border in relation to scroll position
      .setTween("#southStroke" + String(ix), {
        height: responsiveY(data[ix].south) + "px",
        ease: CustomEase.create("custom", "M0,0,C0.306,0.176,0.472,0.455,0.496,0.496,0.574,0.63,0.754,0.858,1,1")
      }) // the tween durtion can be omitted and defaults to 1
      .addIndicators({
        name: "2 (duration: 300)"
      }) // add indicators (requires plugin)
      .addTo(controller);

    // new ScrollMagic.Scene({
    //     triggerElement: "#southDegreeShips",
    //     duration: responsiveY(data[ix].south)
    //   })
    //   .setPin("#southShip" + String(ix))
    //   .addIndicators({
    //     name: "1 (duration:"+data[ix].south
    //   }) // add indicators (requires plugin)
    //   .addTo(controller);
    //
    //
    // new ScrollMagic.Scene({
    //     triggerElement: "#southDegreeShips",
    //     triggerHook:    0.4,
    //     duration: 0
    //   })
    //   .setClassToggle("#southShip" + String(ix), "on") // add class toggle
    //   .addIndicators({
    //     name: "1 (duration:"+data[ix].south
    //   }) // add indicators (requires plugin)
    //   .addTo(controller);

    ix++;
  }



}

function addTooltipsSouth() {
  var tooltipHeader = d3.select("body").append("div")
    .attr('class', 'tooltipHeader');

  var tooltipText = d3.select("body").append("div")
    .attr('class', 'tooltipText');

}
//SOUTH DEGREE

function loadSouthDegrees() {

    d3.text("data/data_southDegreeExtended.csv", function(error, raw) {
      var dsv = d3.dsvFormat(';')
      var data = dsv.parse(raw)
      console.log(data);

    if (error) throw error;

    data.forEach(function(d) {
      d.date = +d.date;
      d.south = +d.south;
      return d;
    });






    //console.log(data[0]);
    //html version first tests://////////////////////////////////
    clearSouthDegree();
    //console.log(data);
    addSouthShip(data);
    addLonelyTraveler();
    addTooltipsSouth();




    $('.sdGroup').hover(
      function() {
        $(this).find(".sdStroke").addClass("sdStrokeHovering");
        $(this).find(".sdShip").addClass("sdStrokeHovering");

        //$(this).siblings().addClass("pathHovering");
        //$(this).parent().parent().siblings().addClass("soften");
        //get right line from second data file (tootltip)
        var hoverId = String(($(this).attr('id')));
        var hoverNr = hoverId.replace("southGroup", "");
        console.log(hoverNr);

        d3.select(".tooltipText")
          .html("Captain: "+ data[hoverNr].captain + "</br>" + data[hoverNr].information)
          .style("opacity", 1)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY + 45) + "px")
          .style("visibility", "visible")
          .style("opacity", "1");

        d3.select(".tooltipHeader")
          .html(data[hoverNr].country + " - " + data[hoverNr].south + "˚- " + data[hoverNr].date)
          .style("opacity", 1)
          .style("left", (event.pageX) + "px")
          .style("top", (event.pageY) + "px")
          .style("visibility", "visible")
          .style("opacity", "1");


      },
      function() {
        $(this).find(".sdStroke").removeClass("sdStrokeHovering");
        $(this).find(".sdShip").removeClass("sdStrokeHovering");

        $(this).siblings().removeClass("pathHovering");
        $(this).parent().parent().siblings().removeClass("soften");

        d3.select(".tooltipText")
          .style("opacity", "0");

        d3.select(".tooltipHeader")
          .style("opacity", "0");

      }
    );



    //
    // // x.domain(data.map(function(d) { return d.date; }));
    // // y.domain([0, d3.max(data, function(d) { return d.south; })]);
    //
    // g.selectAll(".bar")
    //   .data(data)
    //   .enter().append("line")
    //   .attr("class", "graphLine")
    //   .attr("x1", function(d) {
    //     return x(d.date);
    //   })
    //   .attr("y1", function(d) {
    //     return y(0);
    //   })
    //   .attr("x2", function(d) {
    //     return x(d.date);
    //   })
    //   .attr("y2", function(d) {
    //     return y(d.south);
    //   })
    //   .attr("marker-end", "url(#circle)");





  });
};
