$(document).ready(function () {

    console.log("ready");

    question1();
    question2();
    question3();
    question4();
    question5();
    question6();
    question7();
    question8();
    question9();
    question10();
    question11();
    question12();
    question13();
    question14();

});

function question1() {

    console.log("q1");

    Highcharts.chart('container1', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        },        
        xAxis: {
            categories: [
            '',
            'Feb',
            'Mar',
            'Apr'
        ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Age Range'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '19-21',
            data: [20],
            color: '#ed5565'

    }, {
            name: '22-25',
            data: [22],
            color: '#ffce54'

    }, {
            name: '26-29',
            data: [17],
            color: '#48cfad'
    }, {
            name: '30+',
            data: [4],
            color: '#5d9cec'

    }]
    });

}

function question2() {

    console.log("q2");

    Highcharts.chart('container2', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        xAxis: {
            categories: [
            '',
            'Feb',
            'Mar',
            'Apr'
        ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Amount of Children'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '0',
            data: [10],
            color: '#ed5565'

    }, {
            name: '1-3',
            data: [20],
            color: '#ffce54'

    }, {
            name: '4-5',
            data: [7],
            color: '#48cfad'
    }, {
            name: '6+',
            data: [4],
            color: '#5d9cec'

    }]
    });

}

function question3() {

    console.log("q3");

    Highcharts.chart('container3', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'

        },
        title: {
            text: ''
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.0f} ',
                    style: {
                        color: '#828282',
                    },
                    connectorColor: '#828282'
                }
            }
        },
        series: [{
            name: 'Brands',
            data: [
                {
                    name: 'NeverMarried',
                    y: 15,
                    color:'#fc6e51'
                },
                {
                    name: 'Married',
                    y: 15,
                    color:'#a0d468'
                },
                {
                    name: 'Sing - Pre Married',
                    y: 5,
                    color:'#4fc1e9'
                },
                {
                    name: 'Divor - Remarried',
                    y: 5,
                    color:'#ac92ec'
                },
                {
                    name: 'Widowed',
                    y: 10,
                    color:'#656d78'
                },
                {
                    name: 'Significant Partner',
                    y: 10,
                    color:'#ec87c0'
                }
        ]
    }]
    });

}

function question4() {

    console.log("q4");

    Highcharts.chart('container4', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'pyramid'
        },
        title: {
            text: '',
            x: -50
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: '#828282',
                    softConnector: true
                },
                center: ['25%', '50%'],
                width: '40%'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                        ['Both Parents', 17],
                        ['Mother', 13],
                        ['Father', 10],
                        ['Grandparent', 8],
                        ['Parent / Step Parent', 6],
                        ['Sibling', 4],
                        ['Adoptive Parent', 2]
                    ]
                }]
    });
}

function question5() {

    console.log("q5");

    Highcharts.chart('container5', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'pyramid'
        },
        title: {
            text: '',
            x: -50
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: '#828282',
                    softConnector: true
                },
                center: ['25%', '50%'],
                width: '40%'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [
                        ['City / Urban', 18],
                        ['Small Town', 12],
                        ['Rural Area / Farm', 10],
                        ['Suburban Area', 8],
                        ['Moved Frequently', 6],
                        ['Military', 4],
                        ['Other:', 2]
                    ]
                }]
    });
}

function question6() {

    console.log("q6");

    Highcharts.chart('container6', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'pyramid'
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        title: {
            text: '',
            x: -40
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: '#898989',
                    softConnector: true
                },
                center: ['25%', '50%'],
                width: '40%'
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Unique users',
            data: [

                        ['Under $25k', 16],
                        ['$25k-$50k', 12],
                        ['$50k-$75k', 11],
                        ['$75k-$100k', 9],
                        ['$100k+', 7],
                        ['unknown', 5]
                    ]
                }]
    });
}

function question7() {

    console.log("q7");

    Highcharts.chart('container7', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'bar'
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['college degree', 'resume', 'updated resume', 'financial literacy education', 'NFL first job', 'off field development', 'relationship with university', 'contact with employers'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 1,
            y: 8,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        series: [{
            name: 'Yes',
            data: [35, 20, 23, 39, 44, 37, 10, 15],
            color:'#ed5565'
    }, {
            name: 'No',
            data: [25, 40, 37, 21, 16, 23, 50, 45],
            color:'#4fc1e9'
    }]
    });

}

function question8() {

    console.log("q8");

    Highcharts.chart('container8', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Not Important', 'Somewhat Important', 'Important', 'Extremely Important'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 10,
            y: 50,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false 
        }, 
        series: [{
            name: 'Players',
            data: [5, 25, 20, 10],
            color:'#5d9cec'
    }]
    });

}

function question9() {

    console.log("q9");

    Highcharts.chart('container9', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Not good', 'Okay', 'Good', 'Really Good'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 10,
            y: 50,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false 
        }, 
        series: [{
            name: 'Players',
            data: [10, 25, 15, 10],
            color:'#5d9cec'
    }]
    });

}

function question10() {

    console.log("q10");

    Highcharts.chart('container10', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'bar'
        },
        credits: {
                enabled: false
            },
        title: {
            text: ''
        },
        xAxis: {
            categories: [' friends move', ' family move', ' contact you', 'friends asked', ' family asked']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            },
        },
        series: [{
            name: '10+',
            data: [25, 5, 4, 7, 10],
            color:'#ed5565'
    }, {
            name: '8-10',
            data: [15, 15, 6, 7, 30],
            color:'#ffce54'
    }, {
            name: '5-7',
            data: [15, 10, 10, 7, 10],
            color:'#48cfad'
    }, {
            name: '3-4',
            data: [3, 7, 3, 30, 8],
            color:'#ec87c0'
    }, {
            name: '1-2',
            data: [2, 23, 4, 10, 2],
            color:'#ac92ec'
    }]
    });

}

function question11() {

    console.log("q11");

    Highcharts.chart('container11', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'bar'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: ['Financial Paid', 'Viewed as Millionaire', 'Trouble Saying NO'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 6,
            y: 8,
            floating: true,
            borderWidth: 1,
            shadow: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false 
        }, 
        series: [{
            name: 'Yes',
            data: [35, 20, 23]
    }, {
            name: 'No',
            data: [25, 40, 37]
    }]
    });

}

function question12() {

    console.log("q12");

    Highcharts.chart('container12', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        xAxis: {
            categories: [
            '',
            'Feb',
            'Mar',
            'Apr'
        ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: '1-3',
            data: [5],
            color: '#a0d468'

    }, {
            name: '4-5',
            data: [10],
            color: '#4fc1e9'

    }, {
            name: '6-9',
            data: [20],
            color: '#48cfad'
    }, {
            name: '9+',
            data: [25],
            color:'#ffce54'

    }]
});

}

function question13() {

    console.log("q13");

    Highcharts.chart('container13', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        xAxis: {
            categories: [
            '',
            'Feb',
            'Mar',
            'Apr'
        ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Financial',
            data: [5],
            color:'#ed5565'

    }, {
            name: 'Whats Next',
            data: [10],
            color:'#ffce54'

    }, {
            name: 'No Other Passion',
            data: [10],
            color:'#48cfad'
    }, {
            name: 'Football Only Skill',
            data: [5],
            color:'#5d9cec'

    }, {
            name: 'No Degree',
            data: [20],
            color:'#ec87c0'

    }, {
            name: 'Loss Of identity',
            data: [10],
            color:'#a0d468'

    }]
});


}

function question14() {

    console.log("q14");

    Highcharts.chart('container14', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'column'
        },
        title: {
            text: ''
        },
        subtitle: {
            text: ''
        },
        credits: {
                enabled: false
            },
        exporting: {
            enabled: false 
        }, 
        xAxis: {
            categories: [
            '',
            'Feb',
            'Mar',
            'Apr'
        ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Parenthood',
            data: [5],
            color:'#656d78'

    }, {
            name: 'Alchohol/Drugs',
            data: [10],
            color:'#a0d468'

    }, {
            name: 'Dating/Being Single',
            data: [10],
            color:'#4fc1e9'
    }, {
            name: 'Personal Finances',
            data: [5],
            color:'#ac92ec'

    }, {
            name: 'Friendship',
            data: [20],
            color:'#ed5565'

    }, {
            name: 'Family',
            data: [10],
            color:'#ffce54'

    }, {
            name: 'Other:',
            data: [10],
            color:'#48cfad'

    }]
    });
}
