	window.onload = function () {

	var chart = new CanvasJS.Chart("chartContainer5", {
		theme: "dark2",
		title: {
			text: "Daily Temperature Variation for Mars - Febuary 2030"
		},
		axisX: {
			valueFormatString: "DD MMM"
		},
		axisY: {
			title: "Temperature (in °C)"
		},
		toolTip: {
			shared: true
		},
		legend: {
			dockInsidePlotArea: true,
			cursor: "pointer",
			itemclick: toggleDataSeries,
		},
		data: [{
			type: "rangeArea",
			markerSize: 0,
			name: "Temperature Range",
			showInLegend: true,
			dataPoints: [
				{ x: new Date(2030, 6, 1),  y: [30, 19] },
				{ x: new Date(2030, 6, 2), y: [30, 21] },
				{ x: new Date(2030, 6, 3), y: [29, 21] },
				{ x: new Date(2030, 6, 4), y: [28, 20] },
				{ x: new Date(2030, 6, 5), y: [29, 20] },
				{ x: new Date(2030, 6, 6), y: [29, 20] },
				{ x: new Date(2030, 6, 7), y: [27, 21] },
				{ x: new Date(2030, 6, 8), y: [26, 20] },
				{ x: new Date(2030, 6, 9), y: [30, 20] },
				{ x: new Date(2030, 6, 10), y: [30, 21] },
				{ x: new Date(2030, 6, 11), y: [30, 21] },
				{ x: new Date(2030, 6, 12),y: [29, 21] },
				{ x: new Date(2030, 6, 13),y: [27, 20] },
				{ x: new Date(2030, 6, 14),y: [27, 20] },
				{ x: new Date(2030, 6, 15),y: [25, 20] },
				{ x: new Date(2030, 6, 16),y: [29, 20] },
				{ x: new Date(2030, 6, 17),y: [28, 20] },
				{ x: new Date(2030, 6, 18),y: [27, 21] },
				{ x: new Date(2030, 6, 19),y: [27, 21] },
				{ x: new Date(2030, 6, 20),y: [29, 21] },
				{ x: new Date(2030, 6, 21),y: [29, 20] },
				{ x: new Date(2030, 6, 22),y: [31, 20] },
				{ x: new Date(2030, 6, 23),y: [30, 21] },
				{ x: new Date(2030, 6, 24),y: [30, 20] },
				{ x: new Date(2030, 6, 25),y: [31, 21] },
				{ x: new Date(2030, 6, 26),y: [30, 21] },
				{ x: new Date(2030, 6, 27),y: [31, 21] },
				{ x: new Date(2030, 6, 28),y: [31, 21] },
				{ x: new Date(2030, 6, 29),y: [31, 21] },
				{ x: new Date(2030, 6, 30), y: [31, 21] },
				{ x: new Date(2030, 6, 31), y: [31, 22] }
			]
		}]
	});
	chart.render();

	addAverages();

	function addAverages() {
		var dps = [];
		for(var i = 0; i < chart.options.data[0].dataPoints.length; i++) {
			dps.push({
				x: chart.options.data[0].dataPoints[i].x,
				y: (chart.options.data[0].dataPoints[i].y[0] + chart.options.data[0].dataPoints[i].y[1]) / 2
			});
		}
		chart.options.data.push({
			type: "line",
			name: "Average",
			showInLegend: true,
			markerType: "triangle",
			markerSize: 0,
			yValueFormatString: "##.0 °C",
			dataPoints: dps
		});
		chart.render();
	}


	function toggleDataSeries(e) {
		if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		} else {
			e.dataSeries.visible = true;
		}
		e.chart.render();
	}


			var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			backgroundColor: "#21272b",
			title: {
				text: "Fuel tank",
					fontFamily: "Sans serif",
					fontColor: "#c7c7c8",
					fontSize: "23",
					fontWeight: "bold"
			},
			data: [{
				indexLabelFontColor: "#c7c7c8",
				indexLabelFontFamily: "sans serif",
				type: "pie",
				startAngle: 310,
				yValueFormatString: "##0.00'%'",
				indexLabel: "{label} {y}",
				dataPoints: [
					{y: 89.45, label: "Full",color: "#2e527b" },
					{y: 10.55, label: "Empty",color: "#ccac55" },
					
				]
			}]
		});
		chart.render();


		{
		var chart = new CanvasJS.Chart("chartContainer4", {
			fontFamily: "Sans serif",
			fontColor: "#c7c7c8",
			fontSize: "23",
			fontWeight: "bold",
			animationEnabled: true,
			theme: "dark2",
			title:{
				text: "Energy output overview"
			},
			axisY:{
				includeZero: false
			},
			data: [{    
				indexLabelFontColor: "#c7c7c8",
				indexLabelFontFamily: "sans serif",    
				type: "line",       
				dataPoints: [
					{ y: 90, indexLabel: "highest",markerColor: "#2e527b", markerType: "triangle" },
					{ y: 84},
					{ y: 52},
					{ y: 46 },
					{ y: 45 },
					{ y: 50 },
					{ y: 48 },
					{ y: 48 },
					{ y: 31},
					{ y: 50 },
					{ y: 48 },
					{ y: 10 , indexLabel: "lowest",markerColor: "#ccac55", markerType: "triangle" },
				]
			}]
		});
		chart.render();


		var chart = new CanvasJS.Chart("chartContainer2", {
			fontFamily: "Sans serif",
			fontColor: "#c7c7c8",
			fontSize: "23",
			fontWeight: "bold",
			animationEnabled: true,
			theme: "dark2",
			title:{
				text: "Energy output overview"
			},
			axisY:{
				includeZero: false
			},
			data: [{    
				indexLabelFontColor: "#c7c7c8",
				indexLabelFontFamily: "sans serif",    
				type: "line",       
				dataPoints: [
					{ y: 90, indexLabel: "highest",markerColor: "#2e527b", markerType: "triangle" },
					{ y: 84},
					{ y: 52},
					{ y: 46 },
					{ y: 45 },
					{ y: 50 },
					{ y: 48 },
					{ y: 48 },
					{ y: 31},
					{ y: 50 },
					{ y: 48 },
					{ y: 10 , indexLabel: "lowest",markerColor: "#ccac55", markerType: "triangle" },
				]
			}]
		});
		chart.render();
		}	
			var countDownDate = new Date("dec 29, 2019 23:39:01").getTime();
			
			var x = setInterval(function() {
			  var now = new Date().getTime();
			  var distance = countDownDate - now;
			  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
			  + minutes + "m " + seconds + "s ";
			  if (distance < 0) {
				clearInterval(x);
				document.getElementById("countdown").innerHTML = "EXPIRED";
			  }
			}, 1000);
			
			var chart = new CanvasJS.Chart("chartContainer2", {
				animationEnabled: true,
				backgroundColor: "#21272b",
				theme: "dark2",
				title:{
					text: "Current supply status",
					fontSize: "22",
					fontFamily: "Sans serrif",
					fontWeight: "bold"
				},
				axisY: {
					title: "Amount of days left"
				},
				data: [{        
					type: "column",  
					dataPoints: [      
						{ y: 397, label: "Food", color: "#2e527b"},
						{ y: 369,  label: "Water", color: "#ccac55"},
						{ y: 289,  label: "Oxygen", color: "#2e527b"},
						{ y: 169,  label: "Co2", color: "#ccac55"},
					]
				}]
			});
			chart.render();
			
			
		var chart = new CanvasJS.Chart("chartContainer3", {
			backgroundColor: "#21272b",
					theme: "dark2",

			title: {
				text: "Temprature of heating units",
					fontFamily: "Sans serif",
					fontColor: "#c7c7c8",
					fontSize: "23",
					fontWeight: "bold"
			},
			axisY: {
				suffix: " °C"
			},
			data: [{
				indexLabelFontColor: "#ccac55",
				indexLabelFontFamily: "Sans serrif",
				type: "column",	
				yValueFormatString: "#,### °C",
				indexLabel: "{y}",
				dataPoints: [
					{y: 36,  label:  "heating unit 1"},
					{y: 163,  label: "heating unit 2"},
					{y: 20,  label: "heating unit 3"},
					{y: 176,  label: "heating unit 4" },
					{y: 31,  label: "heating unit 5" },
				]
			}]
		});
		function updateChart() {
			var boilerColor, deltaY, yVal;
			var dps = chart.options.data[0].dataPoints;
			for (var i = 0; i < dps.length; i++) {
				deltaY = Math.round(2 + Math.random() *(-2-2));
				yVal = deltaY + dps[i].y > 0 ? dps[i].y + deltaY : 0;
				boilerColor = yVal > 200 ? "#FF2500" : yVal >= 170 ? "#FF6000" : yVal < 170 ? "#6B8E23 " : null;
				dps[i] = {label: "unit "+(i+1) , y: yVal, color: boilerColor};
			}
			chart.options.data[0].dataPoints = dps; 
			chart.render();
		};
		updateChart();
		setInterval(function() {updateChart()}, 500);
		}
		