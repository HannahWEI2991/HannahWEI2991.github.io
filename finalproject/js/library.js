var chart = Highcharts.chart('library1', {
	chart: {
		type: 'bar'
	},
	title: {
		text: '图书馆馆藏数目对比'
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
	}],
});


var chart = Highcharts.chart('library2',{
	chart: {
		type: 'column'
	},
	title: {
		text: '学术数据库数量对比'
	},
	subtitle: {
		text: '数据来源: 各高校图书馆官网数据库'
	},
	xAxis: {
		categories: [
			'香港大学','香港中文大学','香港城市大学','香港理工大学','香港浸会大学'
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
		title: {
			text: '数目'
		}
	},
	plotOptions: {
		column: {
			borderWidth: 0
		}
	},
	series: [{
		name:'数据库',
		data: [1003,923,410,335,464]
	},]
});

var chart = Highcharts.chart('library3',{
	chart: {
		type: 'column'
	},
	title: {
		text: '图书馆基础设施数量对比'
	},
	subtitle: {
		text: '数据来源: 各高校图书馆官网数据库'
	},
	xAxis: {
		categories: [
			'香港大学','香港中文大学','香港城市大学','香港理工大学','香港浸会大学',
		],
		crosshair: true
	},
	yAxis: {
		min: 0,
		title: {
			text: '数量'
		}
	},
	tooltip: {
		// head + 每个 point + footer 拼接成完整的 table
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			borderWidth: 0
		}
	},
	series: [{
		name: '座位',
		data: [2615, 4488, 2648, 1777, 3916]
	}, {
		name: '公共电脑',
		data: [406, 600, 395, 532, 400]
	}]
});
