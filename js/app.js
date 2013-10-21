// General
$(document).ready(function(){
  // Take care of rollout caption boxes
  $('.caption-rollover').click(function(e){
    e.preventDefault();
    window.clearTimeout($(this).data('rolloverTimeout'));
    $(this).toggleClass('closed');
  });
  $('.caption-rollover').hover(function(e){
    window.clearTimeout($(this).data('rolloverTimeout'));
    $(this).removeClass('closed');
  }, function(e){
    var that = this;
    var rolloverTimeout = window.setTimeout(function(){
      $(that).addClass('closed');
    }, 500);
    $(this).data('rolloverTimeout', rolloverTimeout);
  });
  
  // Make pull quotes parallax-ey
  $(window).scroll(function(){
    $('.pull-quote.parallax').each(function(){
      var offset = window.scrollY - $(this).offset().top;
      $(this).css('background-position', "center " + offset + "px");
    });
  });
  
  // Make hover container work
  $(window).mousemove(function(event){
    $('#hover-container').css('top',event.pageY).css('left',event.pageX+10).css('right','auto');
    // Don't let it move off the right side of the screen
    if($('#hover-container').position().left + $('#hover-container').width() + 10 > $(window).width())
    {
      $('#hover-container').css('right','10px').css('left','auto');
    }
  });
});

var TOOLTIP_TIMER;
function showTooltip()
{
  if(TOOLTIP_TIMER)
    window.clearTimeout(TOOLTIP_TIMER)
  $('#hover-container').addClass('visible');
}
function hideTooltip()
{
  if(TOOLTIP_TIMER)
    window.clearTimeout(TOOLTIP_TIMER)
  TOOLTIP_TIMER = window.setTimeout(function(){
    $('#hover-container').removeClass('visible');
  },500);
}

// Day 1
var USFUNDING_COLORS = ["#1B1D18", "#879C04", "#D7E86F", "#84B6C2", "#0B677C"];
var USFUNDING_DATA = {
  "ZA" : {
    "name" : "South Africa",
    "hlegality" : 4,
    "data" : {
      "2012" : {
        "population" : 52386000,
        "funding" : 469969000
      },
      "2011" : {
        "population" : 51949000,
        "funding" : 535319000,
      },
      "2010" : {
        "population" : 51452000,
        "funding" : 545969000,
      },
      "2009" : {
        "population" : 50890000,
        "funding" : 523282000,
      }
    }
  },
  "KE" : {
    "name" : "Kenya",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 43178000,
        "funding" : 468760000
      },
      "2011" : {
        "population" : 42028000,
        "funding" : 498760000
      },
      "2010" : {
        "population" : 40909000,
        "funding" : 528760000
      },
      "2009" : {
        "population" : 39825000,
        "funding" : 530850000
      }
    }
  },
  "NG" : {
    "name" : "Nigeria",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 169000000,
        "funding" : 441227000
      },
      "2011" : {
        "population" : 164000000,
        "funding" : 471227000
      },
      "2010" : {
        "population" : 160000000,
        "funding" : 471227000
      },
      "2009" : {
        "population" : 155000000,
        "funding" : 467173000
      }
    }
  },
  "TZ" : {
    "name" : "Tanzania",
    "hlegality" : 0,
    "data" : {
      "2012" : {
        "population" : 47783000,
        "funding" : 327039000
      },
      "2011" : {
        "population" : 46355000,
        "funding" : 336254000
      },
      "2010" : {
        "population" : 44973000,
        "funding" : 336254000
      },
      "2009" : {
        "population" : 43640000,
        "funding" : 329921000
      }
    }
  },
  "UG" : {
    "name" : "Uganda",
    "hlegality" : 0,
    "data" : {
      "2012" : {
        "population" : 36346000,
        "funding" : 284084000
      },
      "2011" : {
        "population" : 35148000,
        "funding" : 309084000
      },
      "2010" : {
        "population" : 33987000,
        "funding" : 294084000
      },
      "2009" : {
        "population" : 32864000,
        "funding" : 257550000
      }
    }
  },
  "ZM" : {
    "name" : "Zambia",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 14075000,
        "funding" : 283661000
      },
      "2011" : {
        "population" : 13634000,
        "funding" : 283661000
      },
      "2010" : {
        "population" : 13217000,
        "funding" : 283661000
      },
      "2009" : {
        "population" : 12825000,
        "funding" : 236475000
      }
    }
  },
  "MZ" : {
    "name" : "Mozambique",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 25203000,
        "funding" : 255239000
      },
      "2011" : {
        "population" : 24581000,
        "funding" : 261953000
      },
      "2010" : {
        "population" : 23967000,
        "funding" : 261953000
      },
      "2009" : {
        "population" : 23361000,
        "funding" : 237304000
      }
    }
  },
  "ET" : {
    "name" : "Ethiopia",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 91729000,
        "funding" : 254089000
      },
      "2011" : {
        "population" : 89393000,
        "funding" : 289089000
      },
      "2010" : {
        "population" : 87095000,
        "funding" : 323679000
      },
      "2009" : {
        "population" : 84838000,
        "funding" : 333687000
      }
    }
  },
  "HT" : {
    "name" : "Haiti",
    "hlegality" : 3, 
    "data" : {
      "2012" : {
        "population" : 10174000,
        "funding" : 141240000
      },
      "2011" : {
        "population" : 10033000,
        "funding" : 156240000
      },
      "2010" : {
        "population" : 9896000,
        "funding" : 121240000
      },
      "2009" : {
        "population" : 9765000,
        "funding" : 116473000
      }
    }
  },
  "CI" : {
    "name" : "Cote D'Ivoire",
    "hlegality" : 3,
    "data" : {
      "2012" : {
        "population" : 19840000,
        "funding" : 118305000
      },
      "2011" : {
        "population" : 19390000,
        "funding" : 93305000
      },
      "2010" : {
        "population" : 18977000,
        "funding" : 133305000
      },
      "2009" : {
        "population" : 18601000,
        "funding" : 107136000
      }
    }
  },
  "RW" : {
    "name" : "Rwanda",
    "hlegality" : 3,
    "data" : {
      "2012" : {
        "population" : 11458000,
        "funding" : 99072000
      },
      "2011" : {
        "population" : 11144000,
        "funding" : 109072000
      },
      "2010" : {
        "population" : 10837000,
        "funding" : 124072000
      },
      "2009" : {
        "population" : 10530000,
        "funding" : 133922000
      }
    }
  },
  "NA" : {
    "name" : "Namibia",
    "hlegality" : 2, 
    "data" : {
      "2012" : {
        "population" : 2259000,
        "funding" : 88809000
      },
      "2011" : {
        "population" : 2218000,
        "funding" : 101122000
      },
      "2010" : {
        "population" : 2179000,
        "funding" : 100809000
      },
      "2009" : {
        "population" : 2143000,
        "funding" : 104934000
      }
    }
  },
  "VN" : {
    "name" : "Vietnam",
    "hlegality" : 3,
    "data" : {
      "2012" : {
        "population" : 90796000,
        "funding" : 66978000
      },
      "2011" : {
        "population" : 89914000,
        "funding" : 81978000
      },
      "2010" : {
        "population" : 89047000,
        "funding" : 94978000
      },
      "2009" : {
        "population" : 88200000,
        "funding" : 86148000
      }
    }
  },
  "BW" : {
    "name" : "Botswana",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 2004000,
        "funding" : 66000000
      },
      "2011" : {
        "population" : 1987000,
        "funding" : 74443000
      },
      "2010" : {
        "population" : 1969000,
        "funding" : 76443000
      },
      "2009" : {
        "population" : 1952000,
        "funding" : 80675000
      }
    }
  },
  "MW" : {
    "name" : "Malawi",
    "hlegality" : 1,
    "data" : {
      "2012" : {
        "population" : 15906000,
        "funding" : 61948000
      },
      "2011" : {
        "population" : 15458000,
        "funding" : 61948000
      },
      "2010" : {
        "population" : 15014000,
        "funding" : 51948000
      },
      "2009" : {
        "population" : 14573000,
        "funding" : 40148000
      }
    }
  }
}
var USFUNDING_CURYEAR = "2012";
var USFUNDING_MAX = 545969000;

$(document).ready(function(){
  $('#graphic-usfunding .mapcontainer').load("/img/day2/world_funding.svg", function(){
    for(country in USFUNDING_DATA)
    {
      var country_el = $('#graphic-usfunding .mapcontainer [country_code='+ country +']');
      var thiscolor = USFUNDING_COLORS[USFUNDING_DATA[country]['hlegality']];
      country_el.css('fill',thiscolor).css('stroke',"#000000");
      country_el.children("path").css('fill',thiscolor).css('stroke',"#000000");
      country_el.children("g").children("path").css('fill',thiscolor).css('stroke',"#000000");      
    }
  })
  
  function usfunding_changeyear(newyear, initial)
  {
    $('#graphic-usfunding .chart2container [data-country-bar]').each(function(){
      var width = (USFUNDING_DATA[$(this).data('country-bar')]['data'][newyear]['funding'] / USFUNDING_MAX)*100;
      $(this).children('div').css('width', width+"%");
      if(initial)
      {
        $(this).children('div').css('background-color', USFUNDING_COLORS[USFUNDING_DATA[$(this).data('country-bar')]['hlegality']]);
      }
      $(this).hover(function(){
        showTooltip();
      }, function(){
        hideTooltip();
      });
    });
  }
    
  $('#graphic-usfunding .chart1container').load("/img/day2/line_funding.svg", function(){
    usfunding_changeyear("2012", true);
  });
  
  $('#graphic-usfunding .changeyear').change(function(){
    usfunding_changeyear($(this).val(), false);
  })
  
});