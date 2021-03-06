$(function () {

  var nightly_dynamic_prices = [
    [Date.UTC(2017,6,1),319.63],
    [Date.UTC(2017,6,2),255.56],
    [Date.UTC(2017,6,3),260.25],
    [Date.UTC(2017,6,4),256.14],
    [Date.UTC(2017,6,5),258.48],
    [Date.UTC(2017,6,6),284.69],
    [Date.UTC(2017,6,7),297.67],
    [Date.UTC(2017,6,8),304.33],
    [Date.UTC(2017,6,9),252.47],
    [Date.UTC(2017,6,10),251.75],
    [Date.UTC(2017,6,11),254.49],
    [Date.UTC(2017,6,12),256.81],
    [Date.UTC(2017,6,13),257.57],
    [Date.UTC(2017,6,14),263.18],
    [Date.UTC(2017,6,15),271.64],
    [Date.UTC(2017,6,16),250.93],
    [Date.UTC(2017,6,17),251.36],
    [Date.UTC(2017,6,18),253.65],
    [Date.UTC(2017,6,19),253.70],
    [Date.UTC(2017,6,20),254.18],
    [Date.UTC(2017,6,21),257.22],
    [Date.UTC(2017,6,22),263.80],
    [Date.UTC(2017,6,23),245.66],
    [Date.UTC(2017,6,24),245.09],
    [Date.UTC(2017,6,25),246.38],
    [Date.UTC(2017,6,26),246.31],
    [Date.UTC(2017,6,27),244.64],
    [Date.UTC(2017,6,28),248.20],
    [Date.UTC(2017,6,29),257.50],
    [Date.UTC(2017,6,30),242.90],
    [Date.UTC(2017,6,31),243.84],
    [Date.UTC(2017,7,1),245.81],
    [Date.UTC(2017,7,2),245.35],
    [Date.UTC(2017,7,3),243.06],
    [Date.UTC(2017,7,4),248.40],
    [Date.UTC(2017,7,5),259.85],
    [Date.UTC(2017,7,6),242.35],
    [Date.UTC(2017,7,7),243.02],
    [Date.UTC(2017,7,8),244.83],
    [Date.UTC(2017,7,9),244.07],
    [Date.UTC(2017,7,10),245.61],
    [Date.UTC(2017,7,11),251.79],
    [Date.UTC(2017,7,12),261.32],
    [Date.UTC(2017,7,13),240.81],
    [Date.UTC(2017,7,14),240.07],
    [Date.UTC(2017,7,15),240.83],
    [Date.UTC(2017,7,16),241.43],
    [Date.UTC(2017,7,17),242.16],
    [Date.UTC(2017,7,18),247.33],
    [Date.UTC(2017,7,19),251.49],
    [Date.UTC(2017,7,20),239.50],
    [Date.UTC(2017,7,21),239.62],
    [Date.UTC(2017,7,22),240.71],
    [Date.UTC(2017,7,23),241.24],
    [Date.UTC(2017,7,24),241.48],
    [Date.UTC(2017,7,25),243.85],
    [Date.UTC(2017,7,26),250.06],
    [Date.UTC(2017,7,27),240.02],
    [Date.UTC(2017,7,28),240.27],
    [Date.UTC(2017,7,29),241.33],
    [Date.UTC(2017,7,30),241.66],
    [Date.UTC(2017,7,31),242.43],
    [Date.UTC(2017,8,1),245.49],
    [Date.UTC(2017,8,2),252.66],
    [Date.UTC(2017,8,3),243.09],
    [Date.UTC(2017,8,4),244.50],
    [Date.UTC(2017,8,5),245.98],
    [Date.UTC(2017,8,6),246.21],
    [Date.UTC(2017,8,7),246.52],
    [Date.UTC(2017,8,8),257.73],
    [Date.UTC(2017,8,9),276.41],
    [Date.UTC(2017,8,10),249.22],
    [Date.UTC(2017,8,11),250.85],
    [Date.UTC(2017,8,12),254.84],
    [Date.UTC(2017,8,13),255.33],
    [Date.UTC(2017,8,14),258.35],
    [Date.UTC(2017,8,15),269.05],
    [Date.UTC(2017,8,16),281.63],
    [Date.UTC(2017,8,17),254.42],
    [Date.UTC(2017,8,18),255.48],
    [Date.UTC(2017,8,19),257.11],
    [Date.UTC(2017,8,20),258.51],
    [Date.UTC(2017,8,21),258.56],
    [Date.UTC(2017,8,22),269.46],
    [Date.UTC(2017,8,23),278.77],
    [Date.UTC(2017,8,24),258.30],
    [Date.UTC(2017,8,25),258.90],
    [Date.UTC(2017,8,26),258.82],
    [Date.UTC(2017,8,27),258.74],
    [Date.UTC(2017,8,28),258.70],
    [Date.UTC(2017,8,29),261.18],
    [Date.UTC(2017,8,30),275.55]
  ]

  var nightly_base_prices = [
    [Date.UTC(2017,6,1),290],
    [Date.UTC(2017,6,2),290],
    [Date.UTC(2017,6,3),290],
    [Date.UTC(2017,6,4),290],
    [Date.UTC(2017,6,5),290],
    [Date.UTC(2017,6,6),290],
    [Date.UTC(2017,6,7),290],
    [Date.UTC(2017,6,8),290],
    [Date.UTC(2017,6,9),290],
    [Date.UTC(2017,6,10),290],
    [Date.UTC(2017,6,11),290],
    [Date.UTC(2017,6,12),290],
    [Date.UTC(2017,6,13),290],
    [Date.UTC(2017,6,14),290],
    [Date.UTC(2017,6,15),290],
    [Date.UTC(2017,6,16),290],
    [Date.UTC(2017,6,17),290],
    [Date.UTC(2017,6,18),290],
    [Date.UTC(2017,6,19),290],
    [Date.UTC(2017,6,20),290],
    [Date.UTC(2017,6,21),290],
    [Date.UTC(2017,6,22),290],
    [Date.UTC(2017,6,23),290],
    [Date.UTC(2017,6,24),290],
    [Date.UTC(2017,6,25),290],
    [Date.UTC(2017,6,26),290],
    [Date.UTC(2017,6,27),290],
    [Date.UTC(2017,6,28),290],
    [Date.UTC(2017,6,29),290],
    [Date.UTC(2017,6,30),290],
    [Date.UTC(2017,6,31),290],
    [Date.UTC(2017,7,1),290],
    [Date.UTC(2017,7,2),290],
    [Date.UTC(2017,7,3),290],
    [Date.UTC(2017,7,4),290],
    [Date.UTC(2017,7,5),290],
    [Date.UTC(2017,7,6),290],
    [Date.UTC(2017,7,7),290],
    [Date.UTC(2017,7,8),290],
    [Date.UTC(2017,7,9),290],
    [Date.UTC(2017,7,10),290],
    [Date.UTC(2017,7,11),290],
    [Date.UTC(2017,7,12),290],
    [Date.UTC(2017,7,13),290],
    [Date.UTC(2017,7,14),290],
    [Date.UTC(2017,7,15),290],
    [Date.UTC(2017,7,16),290],
    [Date.UTC(2017,7,17),290],
    [Date.UTC(2017,7,18),290],
    [Date.UTC(2017,7,19),290],
    [Date.UTC(2017,7,20),290],
    [Date.UTC(2017,7,21),290],
    [Date.UTC(2017,7,22),290],
    [Date.UTC(2017,7,23),290],
    [Date.UTC(2017,7,24),290],
    [Date.UTC(2017,7,25),290],
    [Date.UTC(2017,7,26),290],
    [Date.UTC(2017,7,27),290],
    [Date.UTC(2017,7,28),290],
    [Date.UTC(2017,7,29),290],
    [Date.UTC(2017,7,30),290],
    [Date.UTC(2017,7,31),290],
    [Date.UTC(2017,8,1),290],
    [Date.UTC(2017,8,2),290],
    [Date.UTC(2017,8,3),290],
    [Date.UTC(2017,8,4),290],
    [Date.UTC(2017,8,5),290],
    [Date.UTC(2017,8,6),290],
    [Date.UTC(2017,8,7),290],
    [Date.UTC(2017,8,8),290],
    [Date.UTC(2017,8,9),290],
    [Date.UTC(2017,8,10),290],
    [Date.UTC(2017,8,11),290],
    [Date.UTC(2017,8,12),290],
    [Date.UTC(2017,8,13),290],
    [Date.UTC(2017,8,14),290],
    [Date.UTC(2017,8,15),290],
    [Date.UTC(2017,8,16),290],
    [Date.UTC(2017,8,17),290],
    [Date.UTC(2017,8,18),290],
    [Date.UTC(2017,8,19),290],
    [Date.UTC(2017,8,20),290],
    [Date.UTC(2017,8,21),290],
    [Date.UTC(2017,8,22),290],
    [Date.UTC(2017,8,23),290],
    [Date.UTC(2017,8,24),290],
    [Date.UTC(2017,8,25),290],
    [Date.UTC(2017,8,26),290],
    [Date.UTC(2017,8,27),290],
    [Date.UTC(2017,8,28),290],
    [Date.UTC(2017,8,29),290],
    [Date.UTC(2017,8,30),290]
  ]

  var ranges = [
    [Date.UTC(2017,6,1),215.88,344.50],
    [Date.UTC(2017,6,2),203.00,332.00],
    [Date.UTC(2017,6,3),202.50,327.00],
    [Date.UTC(2017,6,4),210.50,346.50],
    [Date.UTC(2017,6,5),206.13,350.38],
    [Date.UTC(2017,6,6),204.25,334.75],
    [Date.UTC(2017,6,7),207.50,355.00],
    [Date.UTC(2017,6,8),211.50,348.50],
    [Date.UTC(2017,6,9),205.00,348.75],
    [Date.UTC(2017,6,10),202.75,342.00],
    [Date.UTC(2017,6,11),199.25,346.38],
    [Date.UTC(2017,6,12),200.25,338.00],
    [Date.UTC(2017,6,13),202.38,344.50],
    [Date.UTC(2017,6,14),215.75,365.00],
    [Date.UTC(2017,6,15),222.75,373.38],
    [Date.UTC(2017,6,16),208.75,340.50],
    [Date.UTC(2017,6,17),202.50,340.75],
    [Date.UTC(2017,6,18),203.38,355.00],
    [Date.UTC(2017,6,19),207.63,360.00],
    [Date.UTC(2017,6,20),206.25,336.25],
    [Date.UTC(2017,6,21),211.00,335.00],
    [Date.UTC(2017,6,22),207.00,322.00],
    [Date.UTC(2017,6,23),207.58,323.25],
    [Date.UTC(2017,6,24),198.25,328.75],
    [Date.UTC(2017,6,25),197.00,321.00],
    [Date.UTC(2017,6,26),201.00,319.00],
    [Date.UTC(2017,6,27),187.00,317.50],
    [Date.UTC(2017,6,28),187.88,316.38],
    [Date.UTC(2017,6,29),194.75,326.00],
    [Date.UTC(2017,6,30),178.00,335.00],
    [Date.UTC(2017,6,31),183.25,326.25],
    [Date.UTC(2017,7,1),186.00,312.00],
    [Date.UTC(2017,7,2),185.75,321.50],
    [Date.UTC(2017,7,3),187.25,326.25],
    [Date.UTC(2017,7,4),184.00,337.00],
    [Date.UTC(2017,7,5),189.00,353.50],
    [Date.UTC(2017,7,6),184.25,346.50],
    [Date.UTC(2017,7,7),181.75,327.50],
    [Date.UTC(2017,7,8),180.25,306.25],
    [Date.UTC(2017,7,9),177.00,289.50],
    [Date.UTC(2017,7,10),184.25,299.25],
    [Date.UTC(2017,7,11),186.75,288.50],
    [Date.UTC(2017,7,12),185.42,306.50],
    [Date.UTC(2017,7,13),184.50,317.00],
    [Date.UTC(2017,7,14),187.00,310.50],
    [Date.UTC(2017,7,15),186.00,307.00],
    [Date.UTC(2017,7,16),184.00,317.00],
    [Date.UTC(2017,7,17),185.00,304.00],
    [Date.UTC(2017,7,18),185.50,309.25],
    [Date.UTC(2017,7,19),188.50,304.50],
    [Date.UTC(2017,7,20),173.75,285.50],
    [Date.UTC(2017,7,21),173.50,284.38],
    [Date.UTC(2017,7,22),178.50,277.50],
    [Date.UTC(2017,7,23),165.50,278.75],
    [Date.UTC(2017,7,24),174.00,282.00],
    [Date.UTC(2017,7,25),175.00,285.75],
    [Date.UTC(2017,7,26),180.00,278.00],
    [Date.UTC(2017,7,27),159.75,268.00],
    [Date.UTC(2017,7,28),163.25,282.50],
    [Date.UTC(2017,7,29),167.75,292.25],
    [Date.UTC(2017,7,30),168.13,287.75],
    [Date.UTC(2017,7,31),179.00,294.00],
    [Date.UTC(2017,8,1),172.00,307.50],
    [Date.UTC(2017,8,2),171.50,318.75],
    [Date.UTC(2017,8,3),168.00,312.00],
    [Date.UTC(2017,8,4),172.00,295.25],
    [Date.UTC(2017,8,5),176.50,272.25],
    [Date.UTC(2017,8,6),178.38,279.00],
    [Date.UTC(2017,8,7),184.75,280.25],
    [Date.UTC(2017,8,8),190.33,281.00],
    [Date.UTC(2017,8,9),193.00,287.00],
    [Date.UTC(2017,8,10),183.00,282.00],
    [Date.UTC(2017,8,11),174.25,277.25],
    [Date.UTC(2017,8,12),178.75,290.00],
    [Date.UTC(2017,8,13),179.00,295.50],
    [Date.UTC(2017,8,14),176.25,301.13],
    [Date.UTC(2017,8,15),174.00,286.00],
    [Date.UTC(2017,8,16),181.75,286.75],
    [Date.UTC(2017,8,17),175.75,291.50],
    [Date.UTC(2017,8,18),175.75,278.50],
    [Date.UTC(2017,8,19),174.13,283.75],
    [Date.UTC(2017,8,20),176.50,289.50],
    [Date.UTC(2017,8,21),176.50,290.00],
    [Date.UTC(2017,8,22),180.25,295.50],
    [Date.UTC(2017,8,23),186.33,306.00],
    [Date.UTC(2017,8,24),188.00,296.00],
    [Date.UTC(2017,8,25),185.33,302.75],
    [Date.UTC(2017,8,26),176.50,302.50],
    [Date.UTC(2017,8,27),176.25,305.63],
    [Date.UTC(2017,8,28),174.00,308.50],
    [Date.UTC(2017,8,29),179.25,307.00],
    [Date.UTC(2017,8,30),179.63,305.00]
  ]

  var nightlyLabel = 'Your nightly price';
  var marketLabel = 'Guests are paying';

  var chart = Highcharts.chart('container', {
    chart: {
      style: {
        fontFamily: 'Circular_light'
      },
      marginLeft: 0
    },
    title: {
        text: null
    },
    legend:{
      align: 'left',
      verticalAlign: 'top',
      floating: false,
      squareSymbol: false,
      symbolHeight: 12,
      symbolWidth: 12,
      symbolRadius: 3,
      itemStyle: {
        color: '#484848',
        fontSize: '15px'
      },
      symbolPadding: 8,
      padding: 0,
      margin: 16,
      itemDistance: 32,
      itemHoverStyle: '$484848',
      labelFormatter: function () {

        if(this.name == marketLabel) {
          return '<a data-tooltip="nada" class="tooltip-top" href="#">' + this.name + '<span>?</span></a>';
        } else {
          return this.name;
        }
      },
      useHTML: true
    },
    xAxis: {
      type: 'datetime',
      minPadding: 0,
      maxPadding: 0,
      //startOnTick: true,
      tickInterval: 1000 * 60 * 60 * 24 * 30,
      dateTimeLabelFormats: {
          month: '%e. %b',
          year: '%b'
      },
      endOnTick: false,
      title: {
          text: null
      },
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%b', this.value);
        },
        align: 'center',
        style: {
          fontSize: 15
        },
        x: 8
      },
      crosshair: {
        zIndex: 20
      }
    },
    yAxis: {
      title: {
        text: null
      },
      endOnTick: false,
      // tickAmount: 4,
      showFirstLabel: false,
      labels: {
        formatter: function () {
          return '$' + this.value;
        },
        style: {
          fontSize: 15
        }
      },
      min: 100,
      // max: 350,
      // tickInterval: 100,
      opposite: true
    },
    tooltip: {
      crosshairs: true,
      shared: true,
      useHTML: true,
      formatter: function () {
        var s = '<b class="date">' + Highcharts.dateFormat('%A, %b %e', this.x) +
              '</b>';

        var flag;
        $.each(this.points, function () {
          if(flag){
            if (flag > this.y) {
              s += '<br><span class="series_name">' + this.series.name + ': </span><b class="right">$' + this.y + '</b><p class="small">Your min price is preventing Smart Pricing from setting your price.</p>';
            } else {
              s += '<br><span class="series_name">' + this.series.name + ': </span><b class="right">$' + this.y + '</b>';
            }
          } else {
            s += '<br><span class="series_name">' + this.series.name + ': </span><b class="right">$' + this.y + '</b>';
          }

          flag = this.y;
        });

        return s;
      },
      positioner: function(boxWidth, boxHeight, point) {
        return {
          x:point.plotX + 22,y:point.plotY - 8
        };
      }
    },
    credits: {
      enabled: false
    },

    plotOptions: {
      series: {
        events: {
          legendItemClick: function () {
            return false;
          }
        },
        marker: {
          radius: 5,
          lineWidth: 2,
          enabled: true,
        }
      }
    },
    series: [{
      type: 'spline',
      name: nightlyLabel,
      zIndex: 1000,
      data: $.extend(true,[],nightly_base_prices),
      id: 'nightly',
      legendIndex:0,
      marker: {
        symbol: 'circle',
        enabled: false,
        states: {
          hover: {
            // fillColor: '#484848',
            radius: 5,
            lineWidthPlus: 0,
            radiusPlus: 0,
            animation: {
              duration: 0
            }
          }
        }
      },
      color: '#00A699',
      label: ''
    }, {
      type: 'arearange',
      name: marketLabel,
      data: ranges,
      color: '#d1f3f3',
      id: 'band',
      legendIndex:2,
      zIndex: 1,
      // fillColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [
      //     [0, 'rgba(194, 239, 239, .8)'],
      //     [1, 'rgba(194, 239, 239, .8)']
      //   ]
      // },
      lineWidth: 0,
      enableMouseTracking: false,
      label: '',
      states: {
        hover: {
          enabled: false
        }
      },
      marker: {
        enabled: false
      }
    }]
  });

  function turn_SP_on(){
    $('body').removeClass('sp_off').addClass('sp_on');
    $(".input_module input").val('');
    $(".toggle").toggleClass('on off');
    removeBanner();
    chart.series[0].setData(nightly_dynamic_prices, {
      redraw: true
    });
  }

  function turn_SP_off(){
    $('body').removeClass('sp_on').addClass('sp_off');
    $(".toggle").toggleClass('on off');
    removeBanner();
    numberOfMin = 0;

    removeLine('minimum');
    removeLine('maximum');
    invertColors(0, 'reset')
    destroySuggestionsLineIfExist()
    chart.series[0].setData(nightly_base_prices, {
      redraw: true
    });
  }

  function addMinLine(val){
    removeLine('minimum');

    chart.yAxis[0].addPlotLine({
      color: '#111111',
      dashStyle: 'solid',
      value: val,
      width: 1,
      id: 'minimum',
      zIndex: 2,
      label: {
        text: "Min Price",
        useHTML: true,
        x: -7
      }
    });
  }

  function addMaxLine(val){
    removeLine('maximum');

    chart.yAxis[0].addPlotLine({
      color: '#111111',
      dashStyle: 'solid',
      value: val,
      width: 1,
      id: 'maximum',
      zIndex: 2,
      label: {
        text: "Max Price",
        useHTML: true,
        x: -7
      }
    });
  }

  function removeLine(id){
    chart.yAxis[0].removePlotLine(id);
  }

  function newBase(val){
    nightly_base_prices = [];

    $.each( chart.series[0].data, function( index, value ){
      nightly_base_prices.push([value.x,parseInt(val)])
    });

    var mainSeries = chart.get('nightly');

    //replace data
    mainSeries.setData(nightly_base_prices, {
      redraw: true
    });
  }

  function destroySuggestionsLineIfExist(){
    var minSeries = chart.get('min_bound');

    if(typeof minSeries !== "undefined") {
      console.log("the min graph exists and should be destroyed")
      minSeries.remove();
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  var numberOfMin = 0;

  function minBound(newMinPrice){
    nightly_dynamic_prices_new = [];
    min_prices = [];

    var minBound = false;

    $.each( nightly_dynamic_prices, function( index, value ){

      var currentDate = value[0];
      var currentPrice = value[1];

      if(newMinPrice > currentPrice) {
        nightly_dynamic_prices_new.push([currentDate,parseInt(newMinPrice)])
        min_prices.push([currentDate,parseInt(currentPrice)])

        numberOfMin++;

        minBound = true;
      } else {
        nightly_dynamic_prices_new.push([currentDate,parseInt(currentPrice)])
        min_prices.push([currentDate,parseInt(currentPrice)])
      }
    });

    var nightly_prices = chart.get('nightly');
    nightly_prices.setData(nightly_dynamic_prices_new, {
      redraw: true
    });

    destroySuggestionsLineIfExist();

    if(minBound) {
      // console.log('min bound, pop a banner');

      var val = $('.min_price input').val();
      var bookingValue = numberOfMin * 200;

      // var title = numberOfMin + " of your nightly prices are not matching demand"
      var title = "Earn up to $" + numberWithCommas(bookingValue) + " more from July-September"
      var body = "Your min price of $" + val + " is preventing " + numberOfMin + " nights from being priced automatically and may result in unbooked nights."
      var link = "Tip: Lower your min price to $<span>200</span>"
      var type = "min_price"

      showBanner(title, body, link, type)
    }
    else {
      // console.log('not min bound')
      removeBanner();
    }

    if(minBound) {
      chart.addSeries({
        type: 'spline',
        name: 'Suggested Price',
        data: min_prices,
        animation: false,
        color: '#41A499',
        id: 'min_bound',
        className: 'suggested',
        label: '',
        zIndex: 5,
        lineWidth: 1,
        dashStyle: 'Dash',
        showInLegend: true,
        legendIndex:1,
        marker: {
          enabled: false,
          lineWidth: 2,
          lineColor: '#C0CCCC',
          fillColor: '#ffffff',
          symbol: 'circle',
          states: {
            hover: {
              lineColor: '#484848',
              radius: 5,
              lineWidthPlus: 0,
              radiusPlus: 0,
              animation: {
                duration: 0
              }
            }
          }
        }
      });
    }
  }

  var minVar, maxVar;
  function invertColors(val, type){
    var marketBand = chart.get('band');

    if(type == 'min'){
      minVar = val;

      if(maxVar) {
        var currentMax = chart.yAxis[0].max;
        var top = currentMax + maxVar;

        marketBand.update({
          zones: [
            {
              value: minVar,
              className: 'below'
            },
            {
              value: maxVar,
              className: 'mid'
            },
            {
              value: top,
              className: 'top'
            }
          ]
        });
      } else {
        marketBand.update({
          zones: [
            {
              value: minVar,
              className: 'below'
            }
          ]
        });
      }
    }
    else if (type == 'max'){
      maxVar = val;

      var currentMax = chart.yAxis[0].max;
      var top = currentMax + maxVar;

      console.log(maxVar)
      if(minVar) {
        marketBand.update({
          zones: [
            {
              value: minVar,
              className: 'below'
            },
            {
              value: maxVar,
              className: 'mid'
            },
            {
              value: top,
              className: 'top'
            }
          ]
        });
      } else {
        marketBand.update({
          zones: [
            {
              value: maxVar,
              className: 'mid'
            },
            {
              value: top,
              className: 'top'
            }
          ]
        });
      }
    }
    else if (type= 'reset'){
      marketBand.update({
        zones: [{value: 0}]
      });
    }
  }

  var initMax = chart.yAxis[0].max;
  function maxHandler(value){
    var currentMax = chart.yAxis[0].max;

    removeLine('maximum');
    addMaxLine(value);
    invertColors(value, 'max');

    if(value > currentMax) {
      chart.yAxis[0].update({
        max: value
      })
    }
    else if (value < initMax) {
      chart.yAxis[0].update({
        max: initMax
      })
    }
  }

  function minHandler(value){
    numberOfMin = 0;

    removeLine('minimum');
    invertColors(value, 'min');
    addMinLine(value);
    minBound(value);
  }

  function showBanner (title, body, link, type){
    $(".banner").find('h4').html(title);
    $(".banner").find('p').html(body);
    $(".banner").find('a').html(link);

    $(".banner .body").addClass(type)

    setTimeout(function(){
      $(".banner_wrap").removeClass('is-hidden');
    }, 500)
  }

  function removeBanner(){
    $(".banner_wrap").addClass('is-hidden');
    $(".banner div").removeClass().addClass('body');
  }

  function basePriceChange(value){
    var marketBand = chart.get('band');
    var maxNumberOnBand = 0;


    $.each( marketBand.data, function( index, value ){
      var high = value.high;
      if(high > maxNumberOnBand){
        maxNumberOnBand = high;
      }
    });


    var threshold = 100;
    var maxNumberReduced = maxNumberOnBand - threshold;

    if(value > maxNumberReduced) {
      var title = "Your base price is higher than what guests are paying"
      var body = "Become more competitive by pricing your listing in line with your market."
      var link = "Tip: Lower your base price to $<span>250</span>"
      var type = "nightly_price"

      showBanner(title, body, link, type);
    }

    newBase(value);
  }

  // $('.banner .close').on('click', function(){
  //   $(this).closest('.banner_wrap').addClass('is-hidden');
  // })


  function positionBanner(){
    var scrollTop     = $(document).height(),
    elementOffset = $('h2').offset().top,
    distance      = (scrollTop - elementOffset),
    offset = 30,
    bannerMargin = distance + offset

    $(".banner").css('marginTop', bannerMargin)
  }

  positionBanner();


  $(".toggle").on('click', function(){
    if($(this).hasClass('off')){
      turn_SP_on()
    } else {
      turn_SP_off()
    }
  });

  $(".turn_on").on('click', function(e){
    turn_SP_on();
    removeBanner();

    e.preventDefault();
  });

  $(".wrapper").on('click','.tip', function(e){
    e.preventDefault();

    var parentType = $(this).parent('div'),
        value = $(this).find('span').text();

    if(parentType.hasClass('min_price')){
      minHandler(value)

      if(parentType.hasClass('body')){
        $('.min_price input').val(value);
      }
      else {
        var input = $(this).prev('input');
        input.val(value);
      }
    }
    else if(parentType.hasClass('max_price')){
      maxHandler(value)

      var input = $(this).prev('input');
      input.val(value);
    }
    else if(parentType.hasClass('nightly_price')){
      basePriceChange(value)

      if(parentType.hasClass('body')){
        $('.nightly_price input').val(value);
        removeBanner();
      } else {
        var input = $(this).prev('input');
        input.val(value);
      }
    }
  });

  $(".min_price input").on('blur', function(){
    var newValue = $(this).val();
    minHandler(newValue);
  });

  $(".max_price input").on('blur', function(){
    var newValue = $(this).val();
    maxHandler(newValue);
  });

  $(".nightly_price input").on('blur', function(){
    var newValue = $(this).val();
    basePriceChange(newValue)
  });

  // $("aside .banner").removeClass('is-hidden');

  // $(".banner .close").on('click', function(){
  //   $(this).parent().addClass('is-hidden');
  // });

  $('input').on("keypress", function(e) {
    if (e.keyCode == 13) {
      $(this).blur();
      return false;
    }
  });

  $(window).scroll(function(){

    var offset = $(document).height() - 50;

    if($(window).scrollTop() >= (offset - $(window).height())){
      $('.toolbar').removeClass('scroll')
    } else {
      $('.toolbar').addClass('scroll')
    }
  })

  $(".modal, .toolbar a, .highcharts-legend-item a").on('click', function(e){

    e.preventDefault();
  });
});
