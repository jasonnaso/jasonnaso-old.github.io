//Create chart colors globally
var chartColors = {

    "green": "#a8dd78",
    "lightGreen": "rgba(234, 252, 222, .3)",
    "blue": "#0e75bb",
    "lightBlue": "rgba(230, 245, 255, .3)",
    "white":"#fff",
    "grey":"rgba(151,187,205,1)"
};

//"Map" for admin alert function
var alertObj = {

    'value': 'alertPoints',
    'support': 'support-requests',
    'cashout': 'cashout-giftcards',
    'phone': 'phone-verification'
};

var currentChartID = 'canvas-points';

(function($){

    //initialize admin alerts (the "circle info")
    adminAlert = {

        alertInit: function(){

            var sum = {}, key;

            //get the alert feed info
            $.getJSON("alertFeed.JSON", function(data) {

                //pasre data
                $.each(data.alertData, function(i, allAlerts) {

                    //iterate through alert objsct map
                    for (key in alertObj) {

                        // This is to have a start value of 0 to start adding to it:
                        // In case the `sum` object does not yet have a key 
                        // equal to the value of `k`, we initiate it.  
                        if (!(key in sum)) {
                            sum[key] = 0;
                        }

                        //add the alike alert keys together
                        sum[key] += parseFloat(allAlerts[key]);

                        //set values to the proper alert obj values
                        $('.' + alertObj[key]).html(sum[key]);
                    }
                });                
            });
        }
    };


    //Create the charts
    var gptCharts = {

        //Intitialize two charts on page load
        init: function(){

            //Check if chart is active
            if($('.chart-active')){

                //initial charts go bach 24 hours//Call parse feed to make charts
                $('.chart-active').each(function(index){
                    var dateTo = 24;

                    //Need to know which chart goes where with current id
                    currentChartID = $(this).attr('id');

                    //chart.js needed info to create chart
                    uniqueCtx = $('#' + currentChartID).get(0).getContext("2d");
                    gptCharts.parseFeed(currentChartID, uniqueCtx, dateTo);
                }); 
            }   
        },

        //load correct colors to correct charts
        loadColor: function(currentChartID){

            //check which chart is chosen and load corresponding colors
            if (currentChartID === 'canvas-points'){

                chartColor = chartColors.green;
                chartColorLight = chartColors.lightGreen;
                      
            }else{
                        
                chartColor = chartColors.blue;
                chartColorLight = chartColors.lightBlue;
            }
                
            return {

                chartColor: chartColor, 
                chartColorLight: chartColorLight
            };
        },

        //Load urls to proper graphs
        loadUrl:function(currentChartID, dateTo){

            //past choice is one hour in millis/ set new date on click//set timezone diff
            var pastChoice = 3600000;
            var to = dateTo  * pastChoice;
            var from = new Date().getTime();
            var browser_timezone = new Date().getTimezoneOffset() * 60;

            //Chose which chart for which url
            if (currentChartID === 'canvas-points'){

                url = "hoursPoints.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;

                /////////Remove this block after tested/////////
                if (dateTo === 24){

                    url = "hoursPoints.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;
                }   
                if (dateTo === 168){

                    url = "weekPoints.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;
                }
                 if (dateTo === 720){
                    
                    url = "monthPoints.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;
                }
                /////////To here/////////
                 
            }else{

                url = "hoursCashout.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;

                /////////Remove this block after tested/////////
                if (dateTo === 24){

                    url = "hoursPoints.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;
                }   
                if (dateTo === 168){

                    url = "weekCashout.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;
                }
                 if (dateTo === 720){
                    
                    url = "monthCashout.JSON?from="+from+"&to="+to+"&browser_timezone="+browser_timezone;
                }
                /////////To here/////////
            }
            return [url];
        },

        //parse color/labels/urls/etc
        parseFeed: function(currentChartID,uniqueCtx, dateTo){

            //set  similar colors
            var colors = gptCharts.loadColor(currentChartID);

            //get chart colors from global chartColor
            var chartColor = colors.chartColor;
            var chartColorLight = colors.chartColorLight;

            var urls = gptCharts.loadUrl(currentChartID, dateTo);

            //load in correct urls for different charts
            $.getJSON(urls, function(data){

                //need data/labels for chart.js need to be put into arrays
                chartData = [];
                chartLabels = [];

                $.each(data.chartData, function(i, val) {

                    var label = val.label;
                        
                    chartData.push(val.value);
                    chartLabels.push(label);
                });

                //get all the data in one object for charts.js   
                var currentChartData = {
                    labels: chartLabels,
                    datasets : [{
                                                                
                        fillColor : chartColorLight, 
                        strokeColor : chartColor, 
                        pointColor : chartColor,
                        valtrokeColor : chartColors.white,
                        pointHighlightFill : chartColors.white,
                        pointHighlightStroke : chartColors.grey,
                        data: chartData
                    },] 
                };

                //call and load the chart
                gptCharts.loadChart(currentChartID,uniqueCtx,currentChartData);

            });
        },

        //click to change charts from month/hour/week
        chartClick: function(){

            $(".chart-btn").on("click", function(){

                //get rid of hash/and reload
                event.preventDefault();

                //put data-date-to (data-attr) into variable for "back in time"
                var dateTo = $(this).data("date-to");

                //put data-canvas into variable for which element chart will be in
                var currentChartID = $(this).data("canvas");

                //create the uniqueCtx for chart
                uniqueCtx = $('#'+ currentChartID).get(0).getContext("2d");

                //call and send new chart data to parse feed to run process again
                gptCharts.parseFeed(currentChartID, uniqueCtx, dateTo);

                //destroy the last chart data to make place for the new one        
                if (currentChartID == 'canvas-points'){

                    window.pointsChart.destroy();

                } else {

                    window.cashbackChart.destroy();
                }
            });
        },

        //load the chart
        loadChart: function(currentChartID, uniqueCtx, currentChartData){

            if (currentChartID === "canvas-points"){

                window.pointsChart = new Chart(uniqueCtx).Line(currentChartData, {

                    //set chart.js globals for what you want on chart
                    responsive: true,
                    maintainAspectRatio: true,
                    scaleLabel: "<%= ' ' + value%>",
                    pointHitDetectionRadius : 1
                });

            }else{

                window.cashbackChart = new Chart(uniqueCtx).Line(currentChartData, {

                    //set chart.js globals for what you want on chart
                    responsive: true,
                    maintainAspectRatio: true,
                    scaleLabel: "<%= ' ' + value%>",
                    pointHitDetectionRadius : 1
                });
            }
        } 
    };

    //initialize all
    adminAlert.alertInit();
    gptCharts.init();
    gptCharts.chartClick();

})(jQuery);

  