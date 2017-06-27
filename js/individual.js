$(document).ready(function () {

    console.log("ready!");

    question1();
    question2();
    educationq1();
    educationq2();
    educationq3();
    educationq4();
    educationq5();
    educationq6();
    educationq7();
    educationq8();
    educationq9();
    familyQ1();
    familyQ2();
    familyQ3();
    familyQ4();
    footballQ1();
    footballQ2();
    footballQ3();
    footballQ4();
    footballQ5();
    SocialQ1();
    SocialQ2();
    emotionalQ1();
    emotionalQ2();
    emotionalQ3();
    emotionalQ4();
    emotionalQ5();
    player_score();

    // End of Doc Ready

});


function question1() {

    Highcharts.chart('qSet2', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },

            type: 'column'
        },
        title: {
            text: 'Background'
        },
        xAxis: {
            categories: [
            'Never Married',
            'Married',
            'Single',
            'Divorced',
            'Widowed',
            'Significent Partner',
            'Live In'
        ]
        },
        yAxis: [{
            min: 0,
            max: 5,
            tickAmount: 6,
            title: {
                text: 'Number of Children'
            }
    }, {
            title: {
                text: ''
            },
            opposite: true
    }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Black',
            color: '#ed5565',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '',
                valueSuffix: ''
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'African American',
            color: '#ffce54',
            data: [1, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '',
                valueSuffix: ''
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'Pacific Islander ',
            color: '#48cfad',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '',
                valueSuffix: ''
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'Asian',
            color: '#5d9cec',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '',
                valueSuffix: ''
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: ' Caucasian',
            color: '#ec87c0',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '',
                valueSuffix: ''
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
        }, {
            name: 'Other',
            color: '#4fc1e9',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '',
                valueSuffix: ''
            },
            pointPadding: 0,
            pointPlacement: 0
    }, ]
    });

}

function question2() {

    Highcharts.chart('qSet3', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'column'
        },
        title: {
            text: 'Childhood'
        },
        xAxis: {
            categories: [
            'Both Parents',
            'Mother',
            'Father',
            'Grandparents',
            'Step Parent',
            'Sibling',
            'Adoptive Parent'
        ]
        },
        yAxis: [{
            min: 0,
            max: 200,
            tickAmount: 5,
            title: {
                text: 'Annual Income'
            }
    }, {
            title: {
                text: ''
            },
            opposite: true
    }],
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [{
            name: 'City/Urban',
            color: '#ed5565',
            data: [75, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' K'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'Small Town',
            color: '#ffce54',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' K'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'Rural ',
            color: '#48cfad',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' K'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'Suburban',
            color: '#5d9cec',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' k'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
    }, {
            name: 'Military',
            color: '#ec87c0',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' K'
            },
            pointPadding: 0.3,
            pointPlacement: 0.2
        }, {
            name: 'Moved Frequently',
            color: '#a0d468',
            data: [0, 0, 0, 0, 0, 0, 0],
            tooltip: {
                valuePrefix: '$',
                valueSuffix: ' K'
            },
            pointPadding: 0,
            pointPlacement: 0
    }, ]
    });

}

function educationq1() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ1',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'College Degree?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq2() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ2',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Created a Resume?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq3() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ3',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Updated Resume',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [2],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq4() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ4',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Educated in Financial Literacy?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq5() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ5',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'First Job?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq6() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ6',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Development Outside University?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [2],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq7() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ7',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Maintain University Relationship?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [2],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq8() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ8',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2,
                title: {
                    text: 'Contact with Employers?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [5],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq9() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ8',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2,
                title: {
                    text: 'Contact with Employers?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [5],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function educationq9() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [0.1, '#359372'], // green
            [0.5, '#f3b42f'], // yellow
            [0.9, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 0
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('eduQ9',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: 'University Administration?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [5],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:15px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:10px;color:silver">Score</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function familyQ1() {
    Highcharts.chart('fafQ1', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Friends Moving with you', 'Family Moving with you', 'Friends or Family contact', 'Friends asked for money', 'Family asked for money', 'Contacted to sell goods'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 7,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [4, 1, 6, 1, 1, 6],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function familyQ2() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('fafQ2',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 2,
                title: {
                    text: 'Financial Advisor Payment?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [2],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function familyQ3() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('fafQ3',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Viewed as a Millionaire?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [2],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function familyQ4() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('fafQ4',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Trouble Saying NO?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function footballQ1() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [0.1, '#359372'], // green
            [0.5, '#f3b42f'], // yellow
            [0.9, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('flQ1',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: 'Year in the NFL',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [7],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:10px;color:silver">Years</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function footballQ2() {

    Highcharts.chart('flQ2', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Parenthood', 'Alcohol', 'Drugs', 'Dating', 'Being Single', 'Personal Finances', 'Friendship', 'Family'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 7,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [1, 4, 6, 1, 3, 1, 5, 3],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function footballQ3() {

    Highcharts.chart('flQ3', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Financial Education', 'Family Relationships', 'Dealing with Social Media', 'Psychology Education', 'Leveraging NFL Career', 'Paycheck Breakdown', 'Resume Workshop', 'Networking 101', 'Post Football Plans', 'Nutrition Education', 'Post-Grad Degree'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 7,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [5, 1, 6, 1, 0, 1, 5, 6, 3, 6, 3],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function footballQ4() {

    Highcharts.chart('flQ4', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '80%'
        },

        xAxis: {
            categories: ['Education', 'Real Estate', 'Sports Coaching', 'Healthcare', 'Broadcast', 'Social Serives', 'Sales', 'Communications', 'Human Resources', 'Goverment', 'Engineering', 'Financial Services'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 7,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [5, 1, 2, 1, 4, 1, 0, 3, 1, 5, 6, 0],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function footballQ5() {

    var gaugeOptions = {

        chart: {
            height: 200,
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [0.1, '#359372'], // green
            [0.5, '#f3b42f'], // yellow
            [0.9, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('flQ5',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: 'People Outside of Football?',
                    y: -60
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:10px;color:silver">Value</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function SocialQ1() {

    var gaugeOptions = {

        chart: {
            height: '250',
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [0.1, '#359372'], // green
            [0.5, '#f3b42f'], // yellow
            [0.9, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('smQ1',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 10,
                title: {
                    text: 'Dealing with Media?',
                    y: -80
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [10],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:30px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                        '<span style="font-size:10px;color:silver">Value</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));

}

function SocialQ2() {

    Highcharts.chart('smQ2', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '90%'
        },

        xAxis: {
            categories: ['Instagram', 'Twitter', 'Facebook', 'SnapChat', 'Periscope', 'Vine', 'LinkedIn'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 1,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [1, 0, 1, 1, 0, 1, 0],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function emotionalQ1() {

    var gaugeOptions = {

        chart: {
            height: '250',
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('emlQ1',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Dealt with Depression',
                    y: -70
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [2],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));
}

function emotionalQ2() {

    var gaugeOptions = {

        chart: {
            height: '250',
            style: {
                fontFamily: 'Abel'
            },
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
            [1, '#359372'], // green
            [2, '#e7354a'] // red
        ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };


    var chartSpeed = Highcharts.chart('emlQ2',
        Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 1,
                title: {
                    text: 'Do you know yourself?',
                    y: -70
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [1],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '"></span><br/>' +
                        '<span style="font-size:10px;color:silver">Yes / No</span></div>'
                },
                tooltip: {
                    valueSuffix: 'User Answered'
                }
    }]

        }));
}

function emotionalQ3() {

    Highcharts.chart('emlQ3', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '70%'
        },

        xAxis: {
            categories: ['Parent / Guardian', 'Mentor', 'Sibling', 'Former Coach', 'Friend'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 5,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [1, 3, 4, 5, 2],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function emotionalQ4() {

    Highcharts.chart('emlQ4', {

        chart: {
            style: {
                fontFamily: 'Abel'
            },
            polar: true,
            type: 'line'
        },
        credits: {
            enabled: false
        },

        title: {
            text: '',
            x: -80
        },

        pane: {
            size: '70%'
        },

        xAxis: {
            categories: ['Stubbon', 'Open', 'Blunt', 'Quiet', 'Independent', 'Outgoing'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0,
            max: 1,
            tickInterval: 2
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
        },

        legend: false,

        series: [{
            name: '',
            data: [1, 0, 0, 0, 1],
            pointPlacement: 'on',
            color: '#199cd9'
    }]

    });
}

function emotionalQ5() {

    Highcharts.chart('emlQ5', {
        chart: {
            style: {
                fontFamily: 'Abel'
            },
            type: 'bar'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['Christian', 'Jewish', 'Catholic', 'Baptist', 'None']
        },
        yAxis: {
            min: 0,
            max: 2,
            labels: false,
            title: {
                text: 'Spiritual Beliefs'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Player Name',
            data: [0, 0, 0, 0, 1],
            color: '#199cd9'

    }]
    });

}

function player_score() {
    
    Highcharts.chart('playerScore', {

    chart: {
        type: 'solidgauge',
        marginTop: 
    },
    title: false,
    
    tooltip: {
        borderWidth: 0,
        backgroundColor: 'none',
        shadow: false,
        style: {
            fontSize: '16px'
        },
        pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
        positioner: function (labelWidth) {
            return {
                x: 400 - labelWidth / 2,
                y: 280
            };
        }
    },

    pane: {
        startAngle: 0,
        endAngle: 360,
        background: [{ // Track for Move
            outerRadius: '112%',
            innerRadius: '88%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[0])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Exercise
            outerRadius: '87%',
            innerRadius: '63%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[1])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }, { // Track for Stand
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: Highcharts.Color(Highcharts.getOptions().colors[2])
                .setOpacity(0.3)
                .get(),
            borderWidth: 0
        }]
    },

    yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                enabled: false
            },
            linecap: 'round',
            stickyTracking: false,
            rounded: true
        }
    },

    series: [{
        name: 'Move',
        data: [{
            color: Highcharts.getOptions().colors[0],
            radius: '112%',
            innerRadius: '88%',
            y: 80
        }]
    }, {
        name: 'Exercise',
        data: [{
            color: Highcharts.getOptions().colors[1],
            radius: '87%',
            innerRadius: '63%',
            y: 65
        }]
    }, {
        name: 'Stand',
        data: [{
            color: Highcharts.getOptions().colors[2],
            radius: '62%',
            innerRadius: '38%',
            y: 50
        }]
    }]
},

/**
 * In the chart load callback, add icons on top of the circular shapes
 */
function callback() {

    // Move icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 26)
        .add(this.series[2].group);

    // Exercise icon
    this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
            'M', 8, -8, 'L', 16, 0, 8, 8])
        .attr({
            'stroke': '#ffffff',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 61)
        .add(this.series[2].group);

    // Stand icon
    this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
        .attr({
            'stroke': '#303030',
            'stroke-linecap': 'round',
            'stroke-linejoin': 'round',
            'stroke-width': 2,
            'zIndex': 10
        })
        .translate(190, 96)
        .add(this.series[2].group);
});



}
