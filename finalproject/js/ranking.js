var chart = Highcharts.chart('ranking1', {
	title: {
		text: '2014-2018 QS世界大学综合排名'
	},
	subtitle: {
		text: '数据来源：www.topuniversities.com'
	},
	yAxis: {
		reversed:true,
		title: {
			text: '排名'
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle'
	},
	plotOptions: {
		series: {
			label: {
				connectorAllowed: false
			},
			pointStart: 2014
		}
	},
	series: [{
		name: '香港大学',
		data: [28, 30, 27, 26, 25,]
	}, {
		name: '香港中文大学',
		data: [46, 51, 44, 46, 49]
	}, {
		name: '香港城市大学',
		data: [108, 57, 55, 49, 55]
	}, {
		name: '香港理工大学',
		data: [162, 116, 111, 95, 106]
	}, {
		name: '香港浸会大学',
		data: [318, 281, 278, 299, 277]
	}],
	responsive: {
		rules: [{
			condition: {
				maxWidth: 500
			},
			chartOptions: {
				legend: {
					layout: 'horizontal',
					align: 'center',
					verticalAlign: 'bottom'
				}
			}
		}]
	}
});

var chart = Highcharts.chart('ranking2', {
	chart: {
		type: 'scatter',
		zoomType: 'xy'
	},
	title: {
		text: '2018 QS传播与媒体研究专业世界排名'
	},
	subtitle: {
		text: '数据来源: www.topuniversities.com'
	},
	xAxis: {
		title: {
			enabled: true,
			text: '2018年',
		},
		startOnTick: false,
		endOnTick: true,
		showLastLabel: true
	},
	yAxis: {
		reversed:true,
		title: {
			text: '排名'
		}
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		verticalAlign: 'top',
		x: 100,
		y: 70,
		floating: true,
		backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
		borderWidth: 1
	},
	plotOptions: {
		scatter: {
			marker: {
				radius: 5,
				states: {
					hover: {
						enabled: true,
						lineColor: 'rgb(100,100,100)'
					}
				}
			},
			states: {
				hover: {
					marker: {
						enabled: false
					}
				}
			},
			tooltip: {
				headerFormat: '<b>{series.name}</b><br>',
				pointFormat: '{point.y}'
			}
		}
	},
	series: [{
		name: '香港大学',
		color: 'rgb(161,201,240)',
		data: [35]
	}, {
		name: '香港中文大学',
		color: 'rgb(247,164,93)',
		data: [20]
	},
			 {
				 name: '香港浸会',
				 color: 'rgb(165,237,237)',
				 data: [51]
			 }, {
				 name: '香港理工大学',
				 color: 'rgb(115,149,189)',
				 data: [27]
			 }]
});


var chart = Highcharts.chart('library', {
	chart: {
		type: 'bar',
		renderTo: 'library'
	},
	title: {
		text: '香港高校图书馆学术资源对比'
	},
	subtitle: {
		text: '数据来源: 各高校图书馆官网数据库'
	},
	xAxis: {
		categories: ['实体书', '电子书', '电子期刊'],
		title: {
			text: null
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: '数量',
			align: 'high'
		},
		labels: {
			overflow: 'justify'
		}
	},
	tooltip: {
		valueSuffix: ' 百万'
	},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true,
				allowOverlap: true // 允许数据标签重叠
			}
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		x: -40,
		y: 100,
		floating: true,
		borderWidth: 1,
		backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
		shadow: true
	},
	series: [{
		name: '香港大学',
		data: [3093115, 6012706, 341421]
	}, {
		name: '香港中文大学',
		data: [2737105, 4399769, 143108]
	}, {
		name: '香港城市大学',
		data: [1019000, 1972000, 80800]
	}, {
		name: '香港浸会大学',
		data: [1256224, 1313485, 125405]
	}, {
		name: '香港理工大学',
		data: [901050, 3243482, 131780]
	}]
});
