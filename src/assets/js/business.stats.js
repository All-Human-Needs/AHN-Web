 //tabs
 function openTab(evt, tabName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(tabName).style.display = "block";
     evt.currentTarget.className += " active";
 }
 // Get the element with id="defaultOpen" and click on it
 document.getElementById("defaultOpen").click();

 //---------------------------------------------------------------------------------
 var dailyStats = [
     [{
         v: [7, 0, 0],
         f: '07:00AM'
     }, 0],
     [{
         v: [7, 30, 0],
         f: '07:30AM'
     }, 50],
     [{
         v: [8, 0, 0],
         f: '08:00AM'
     }, 75],
     [{
         v: [8, 30, 0],
         f: '08:30AM'
     }, 65],
     [{
         v: [9, 0, 0],
         f: '09:00AM'
     }, 25],
     [{
         v: [9, 30, 0],
         f: '09:30AM'
     }, 10],
     [{
         v: [10, 0, 0],
         f: '10:00AM'
     }, 0],
     [{
         v: [10, 30, 0],
         f: '10:30AM'
     }, 20],
     [{
         v: [11, 0, 0],
         f: '11:00AM'
     }, 55],
     [{
         v: [11, 30, 0],
         f: '11:30AM'
     }, 80],
     [{
         v: [12, 0, 0],
         f: '12:00PM'
     }, 75],
     [{
         v: [12, 30, 0],
         f: '12:30PM'
     }, 70],
     [{
         v: [13, 0, 0],
         f: '01:00PM'
     }, 48],
     [{
         v: [13, 30, 0],
         f: '01:30PM'
     }, 42],
     [{
         v: [14, 0, 0],
         f: '02:00PM'
     }, 34],
     [{
         v: [14, 30, 0],
         f: '02:30PM'
     }, 19],
     [{
         v: [15, 0, 0],
         f: '03:00PM'
     }, 0]
 ];

 var weeklyStats = [
     ["Monday", 100],
     ["Tuesday", 75],
     ["Wednesday", 110],
     ["Thursday", 119],
     ["Friday", 60],
     ["Saturday", 137],
     ["Sunday", 50],
 ];

 var monthlyStats = [
     ["Jan", 100],
     ["Feb", 75],
     ["Mar", 110],
     ["Apr", 119],
     ["May", 60],
     ["Jun", 137],
     ["Jul", 50],
     ["Aug", 10],
     ["Sept", 160],
     ["Oct", 150],
     ["Nov", 52],
     ["Dec", 100],
 ];
 //---------------------------------------------------------------------------------------

 var filter = 'monthly';
 //bar graph
 google.charts.load('current', {
     packages: ['corechart', 'bar']
 });
 if (filter === 'daily') {
     google.charts.setOnLoadCallback(drawBarGraphDaily);
 } else if (filter === 'weekly') {
     google.charts.setOnLoadCallback(drawBarGraphWeekly);
 } else if (filter === 'monthly') {
     google.charts.setOnLoadCallback(drawBarGraphMonthly);
 }


 //spreadsheet
 google.charts.load('current', {
     'packages': ['table']
 });
 if (filter === 'daily') {
     google.charts.setOnLoadCallback(drawTableDaily);
 } else if (filter === 'weekly') {
     google.charts.setOnLoadCallback(drawTableWeekly);
 } else if (filter === 'monthly') {
     google.charts.setOnLoadCallback(drawTableMonthly);
 }


 //line chart
 google.charts.load('current', {
     packages: ['corechart', 'line']
 });
 if (filter === 'daily') {
     google.charts.setOnLoadCallback(drawLineChartDaily);
 } else if (filter === 'weekly') {
     google.charts.setOnLoadCallback(drawLineChartWeekly);
 } else if (filter === 'monthly') {
     google.charts.setOnLoadCallback(drawLineChartMonthly);
 }


 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 //bargraph daily function
 function drawBarGraphDaily() {

     var dataBar = new google.visualization.DataTable();
     dataBar.addColumn('timeofday', 'Time of Day');
     dataBar.addColumn('number', 'Number of People');

     dataBar.addRows(dailyStats);

     var optionsBar = {
         title: 'Foot Traffic Throughout Monday',
         hAxis: {
             title: 'Time of Day',
             format: 'h:mm a',
             viewWindow: {
                 min: [7, 0, 0],
                 max: [15, 0, 0]
             }
         },
         vAxis: {
             title: 'Amount of People'
         }
     };

     var chartBar = new google.visualization.ColumnChart(
         document.getElementById('bar-graph'));

     chartBar.draw(dataBar, optionsBar);
 }

 //bargraph weekly function
 function drawBarGraphWeekly() {

     var dataBar = new google.visualization.DataTable();
     dataBar.addColumn('string', 'Day of the week');
     dataBar.addColumn('number', 'Number of People');

     dataBar.addRows(weeklyStats);

     var optionsBar = {
         title: 'Foot Traffic Throughout the week',
         hAxis: {
             title: 'Day of the week',
         },
         vAxis: {
             title: 'Amount of People'
         }
     };

     var chartBar = new google.visualization.ColumnChart(
         document.getElementById('bar-graph'));

     chartBar.draw(dataBar, optionsBar);
 }

 //bargraph monthly function
 function drawBarGraphMonthly() {

     var dataBar = new google.visualization.DataTable();
     dataBar.addColumn('string', 'Months of the year');
     dataBar.addColumn('number', 'Number of People');

     dataBar.addRows(monthlyStats);

     var optionsBar = {
         title: 'Foot Traffic Throughout the year',
         hAxis: {
             title: 'Months of the year',
         },
         vAxis: {
             title: 'Amount of People'
         }
     };

     var chartBar = new google.visualization.ColumnChart(
         document.getElementById('bar-graph'));

     chartBar.draw(dataBar, optionsBar);
 }
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
 function drawTableDaily() {
     var dataTable = new google.visualization.DataTable();
     dataTable.addColumn('timeofday', 'Time of Day');
     dataTable.addColumn('number', 'Number of People');

     dataTable.addRows(dailyStats);

     var table = new google.visualization.Table(document.getElementById('table_div'));

     table.draw(dataTable, {

         showRowNumber: false,
         width: '100%',
         height: '100%',

     });
 }

 function drawTableWeekly() {
     var dataTable = new google.visualization.DataTable();
     dataTable.addColumn('string', 'Day of the week');
     dataTable.addColumn('number', 'Number of People');

     dataTable.addRows(weeklyStats);

     var table = new google.visualization.Table(document.getElementById('table_div'));

     table.draw(dataTable, {

         showRowNumber: false,
         width: '100%',
         height: '100%',

     });
 }

 function drawTableMonthly() {
     var dataTable = new google.visualization.DataTable();
     dataTable.addColumn('string', 'Months of the year');
     dataTable.addColumn('number', 'Number of People');

     dataTable.addRows(monthlyStats);

     var table = new google.visualization.Table(document.getElementById('table_div'));

     table.draw(dataTable, {

         showRowNumber: false,
         width: '100%',
         height: '100%',

     });
 }
 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 function drawLineChartDaily() {
     var dataLine = new google.visualization.DataTable();
     dataLine.addColumn('timeofday', 'Time of Day');
     dataLine.addColumn('number', 'People');

     dataLine.addRows(dailyStats);

     var optionsLine = {
         hAxis: {
             title: 'Time of day',
             format: 'h:mm a',
             viewWindow: {
                 min: [7, 0, 0],
                 max: [15, 0, 0]
             },
         },
         vAxis: {
             title: 'Number of People'
         },
         width: 1000,
         height: 500,
         backgroundColor: '#fff',
     };

     var chartLine = new google.visualization.LineChart(document.getElementById('line-chart'));
     chartLine.draw(dataLine, optionsLine);
 };

 function drawLineChartWeekly() {
     var dataLine = new google.visualization.DataTable();
     dataLine.addColumn('string', 'Day of the week');
     dataLine.addColumn('number', 'Number of People');

     dataLine.addRows(weeklyStats);

     var optionsLine = {
         hAxis: {
             title: 'Day of the Week',


         },
         vAxis: {
             title: 'Number of People'
         },
         width: 1000,
         height: 500,
         backgroundColor: '#fff',
     };

     var chartLine = new google.visualization.LineChart(document.getElementById('line-chart'));
     chartLine.draw(dataLine, optionsLine);
 };

 function drawLineChartMonthly() {
     var dataLine = new google.visualization.DataTable();
     dataLine.addColumn('string', 'Months of the year');
     dataLine.addColumn('number', 'Number of People');

     dataLine.addRows(monthlyStats);

     var optionsLine = {
         hAxis: {
             title: 'Month of the year',


         },
         vAxis: {
             title: 'Number of People'
         },
         width: 1000,
         height: 500,
         backgroundColor: '#fff',
     };

     var chartLine = new google.visualization.LineChart(document.getElementById('line-chart'));
     chartLine.draw(dataLine, optionsLine);
 };